(function ($) {
  'use strict';
  $(function () {
    // Remove pro banner on close
    document.querySelector('#bannerClose').addEventListener('click', function () {
      document.querySelector('#proBanner').classList.add('d-none');
    });


    // ================== PASTE THE FINAL DOUGHNUT CHART CODE HERE ==================
    if ($("#doughnutChart").length) {

      const chartContainer = $('#doughnut-chart-container'); // The div with the chart and filter
      const errorContainer = $('#doughnut-chart-error');
      const csvFile = 'data/chartdata.csv';

      let chartInstance = null;
      let allCrimeData = [];

      // This is our professional color palette built around your core green
      const proColorPalette = [
        '#1d3a7a',
        '#176b9f',
        '#3677d1',
        '#58b4f5',
        '#17a2b8',
        '#8a95a5'
      ];

      // --- This is a new plugin to draw text in the center of the chart ---
      const centerTextPlugin = {
        id: 'centerText',
        beforeDraw: (chart) => {
          if (chart.config.options.elements.center) {
            const ctx = chart.ctx;
            const centerConfig = chart.config.options.elements.center;
            const fontStyle = centerConfig.fontStyle || 'Arial';
            const txt = centerConfig.text;
            const color = centerConfig.color || '#000';
            const maxFontSize = centerConfig.maxFontSize || 75;
            const sidePadding = centerConfig.sidePadding || 20;
            const sidePaddingCalculated = (sidePadding / 100) * (chart.innerRadius * 2)

            ctx.font = "30px " + fontStyle;
            const stringWidth = ctx.measureText(txt).width;
            const elementWidth = (chart.innerRadius * 2) - sidePaddingCalculated;
            const widthRatio = elementWidth / stringWidth;
            const newFontSize = Math.floor(30 * widthRatio);
            const elementHeight = (chart.innerRadius * 2);
            const finalFontSize = Math.min(newFontSize, elementHeight, maxFontSize);

            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            const centerX = ((chart.chartArea.left + chart.chartArea.right) / 2);
            const centerY = ((chart.chartArea.top + chart.chartArea.bottom) / 2);
            ctx.font = finalFontSize + "px " + fontStyle;
            ctx.fillStyle = color;

            ctx.fillText(txt, centerX, centerY);
          }
        }
      };
      // Safely register the plugin only if it hasn't been registered before
      if (Chart.plugins.getAll().findIndex(p => p.id === 'centerText') === -1) {
        Chart.plugins.register(centerTextPlugin);
      }

      // A single function to display the error and hide the chart
      function displayError(logMessage, technicalError) {
        console.error(logMessage, technicalError || ''); // Log for debugging
        $('#doughnutChart').hide();
        $('#doughnut-chart-error').show();
      }
      // --------------------------------------------------------------------

      function drawChart(selectedState) {
        const crimeTotals = {};
        allCrimeData.forEach(row => {
          if (row && row.type !== 'all' && row.state === selectedState) {
            crimeTotals[row.type] = (crimeTotals[row.type] || 0) + row.crimes;
          }
        });

        const sortedCrimes = Object.entries(crimeTotals).sort(([, a], [, b]) => b - a);
        const finalChartData = {};
        let otherTotal = 0;
        sortedCrimes.forEach((crime, index) => {
          if (index < 5) {
            finalChartData[crime[0]] = crime[1];
          } else {
            otherTotal += crime[1];
          }
        });
        if (otherTotal > 0) {
          finalChartData['Other'] = otherTotal;
        }

        const labels = Object.keys(finalChartData);
        const values = Object.values(finalChartData);

        // Calculate the total number of crimes to display in the center
        const totalCrimes = values.reduce((sum, current) => sum + current, 0);

        if (chartInstance) {
          chartInstance.destroy();
        }

        var doughnutChartCanvas = $("#doughnutChart").get(0).getContext("2d");
        chartInstance = new Chart(doughnutChartCanvas, {
          type: 'doughnut',
          data: {
            labels: labels,
            datasets: [{
              data: values,
              backgroundColor: proColorPalette,
              borderColor: '#ffffff',
              borderWidth: 1, // Slightly thicker border for a cleaner look
              hoverOffset: 12 // A more pronounced "pop" on hover
            }]
          },
          // These options control the new professional look and feel
          options: {
            responsive: true,
            maintainAspectRatio: false,
            animation: {
              animateScale: true,
              animateRotate: true
            },
            cutoutPercentage: 70, // Thinner ring for a more modern look
            elements: {
              center: { // The text we will draw in the middle
                text: totalCrimes.toLocaleString(), // Format number with commas
                color: '#2c3e50',
                fontStyle: 'Helvetica',
                sidePadding: 20,
                maxFontSize: 40
              }
            },
            legend: {
              display: true,
              position: 'bottom',
              labels: {

                borderWidth: 0,
              },
              onClick: null
            },
            tooltips: {
              callbacks: {
                label: function (tooltipItem, data) {
                  // Get the dataset for the item being hovered
                  let dataset = data.datasets[tooltipItem.datasetIndex];

                  // Calculate the total of all values in the dataset
                  let total = dataset.data.reduce(function (previousValue, currentValue) {
                    return previousValue + currentValue;
                  });

                  // Get the value of the specific item
                  let currentValue = dataset.data[tooltipItem.index];

                  // Calculate the percentage
                  let percentage = ((currentValue / total) * 100).toFixed(1);

                  // Get the label for the specific item
                  let label = data.labels[tooltipItem.index];

                  // Return the final formatted text
                  return `${label}: ${currentValue.toLocaleString()} (${percentage}%)`;
                }
              }
            }

          }
        });
      }

      // --- This section loads the data and sets up the page ---
      Papa.parse(csvFile, {
        download: true,
        header: true,
        dynamicTyping: true,
        complete: function (results) {

          // If data is good, show the chart and hide any previous errors
          $('#doughnutChart').show();
          $('#doughnut-chart-error').hide();

          allCrimeData = results.data.map(row => ({ ...row, crimes: Number(String(row.crimes).replace(/,/g, '')) || 0 }));

          const states = [...new Set(allCrimeData.map(row => row.state).filter(Boolean))];
          const stateFilterDropdown = document.getElementById('stateFilter');

          if (stateFilterDropdown) {
            stateFilterDropdown.innerHTML = '';
            // 2. Now add all the real state options from your data
            states.forEach(state => {
              const option = document.createElement('option');
              option.value = state;
              option.text = state;
              stateFilterDropdown.appendChild(option);
            });
          }

          // Listen for when the user picks a new state
          $('#stateFilter').on('change', function () {
            // Only draw the chart if the user selects a real state (not the placeholder)
            if ($(this).val()) {
              drawChart($(this).val());
            }
          });

          drawChart("Malaysia");
        },
        // This function catches network errors (like a wrong file path)
        error: function (err) {
          displayError("Donut Chart: Error loading or parsing CSV file:", err);
        }
      });
      let resizeTimeout;
      window.addEventListener("resize", function () {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(function () {
          // Ensure the chart container has the correct size before drawing
          if (chartInstance) {
            chartInstance.destroy();
          }
          // Get the currently selected state, or default to "Malaysia"
          const selectedState = $('#stateFilter').val() || "Malaysia";
          // Redraw the donut chart
          drawChart(selectedState);
        }, 0);
      });

    }


    // ================== LINE CHART FOR CRIME TRENDS ==================
    if ($("#line-chart").length) {
      const csvFile = 'data/chartdata.csv';
      let chartInstance = null;
      let allCrimeData = [];
      let allStates = [];

      const chartContainer = $('#line-chart-wrapper');
      const errorContainer = $('#line-chart-error');

      const stateColors = {
        "Johor": "#EF1505",
        "Kedah": "#FF54E0",
        "Kelantan": "#AE03CD",
        "Melaka": "#5925B2",
        "Negeri Sembilan": "#0C24A6",
        "Pahang": "#2196F3",
        "Pulau Pinang": "#00BCD4",
        "Perak": "#009688",
        "Perlis": "#4CAF50",
        "Sabah": "#CDDC39",
        "Sarawak": "#FFC107",
        "Selangor": "#D38105",
        "Terengganu": "#795548",
        "Kuala Lumpur": "#607D8B",
      };

      function displayError(logMessage, technicalError) {
        console.error(logMessage, technicalError || '');
        chartContainer.hide();
        errorContainer.show();
      }

      function drawChart(selectedStates = []) {
        const ctx = $("#line-chart").get(0).getContext("2d");

        if (chartInstance) chartInstance.destroy();

        if (selectedStates.length === 0) {
          const dateMap = {};
          allCrimeData.forEach(row => {
            const date = new Date(row.date);
            if (!isNaN(date) && typeof row.crimes === 'number') {
              const yearMonth = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-01`;
              dateMap[yearMonth] = (dateMap[yearMonth] || 0) + row.crimes;
            }
          });
          const sortedDates = Object.keys(dateMap).sort((a, b) => new Date(a) - new Date(b));
          const values = sortedDates.map(date => dateMap[date]);

          chartInstance = new Chart(ctx, {
            type: 'line',
            data: {
              labels: sortedDates,
              datasets: [{
                label: 'Malaysia Crime Trend (All States)',
                data: values,
                borderColor: '#176b9f',
                backgroundColor: 'rgba(23, 107, 159, 0.2)',
                fill: true,
                tension: 0.3,
                pointRadius: 4,
                pointHoverRadius: 6
              }]
            },
            options: {
              responsive: true,
              maintainAspectRatio: false,
              animation: { duration: 750 },
              scales: {
                x: {
                  type: 'time',
                  time: { unit: 'month', tooltipFormat: 'YYYY-MM', displayFormats: { month: 'YYYY-MM' } },
                  ticks: { maxTicksLimit: 12 }
                },
                y: {
                  beginAtZero: true,
                  ticks: { callback: v => v.toLocaleString() }
                }
              }
            }
          });
          return;
        }


        const datasets = [];

        selectedStates.forEach((state, i) => {
          const dateMap = {};
          allCrimeData.forEach(row => {
            const cleanState = row.state ? row.state.trim() : '';
            if (cleanState !== state) return;

            const date = new Date(row.date);
            if (!isNaN(date) && typeof row.crimes === 'number') {
              const yearMonth = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-01`;
              dateMap[yearMonth] = (dateMap[yearMonth] || 0) + row.crimes;
            }
          });

          const sortedDates = Object.keys(dateMap).sort((a, b) => new Date(a) - new Date(b));
          const values = sortedDates.map(date => dateMap[date]);
          const color = stateColors[state] || '#999999';

          datasets.push({
            label: state,
            data: values,
            borderColor: color,
            backgroundColor: color + '55',
            fill: false,
            tension: 0.3,
            pointRadius: 4,
            pointHoverRadius: 6
          });
        });

        const allDatesSet = new Set();
        allCrimeData.forEach(row => {
          const date = new Date(row.date);
          if (!isNaN(date)) {
            const yearMonth = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-01`;
            allDatesSet.add(yearMonth);
          }
        });
        const allDates = Array.from(allDatesSet).sort((a, b) => new Date(a) - new Date(b));

        chartInstance = new Chart(ctx, {
          type: 'line',
          data: {
            labels: allDates,
            datasets: datasets
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            animation: { duration: 750 },
            scales: {
              x: {
                type: 'time',
                time: { unit: 'month', tooltipFormat: 'YYYY-MM', displayFormats: { month: 'YYYY-MM' } },
                ticks: { maxTicksLimit: 12 }
              },
              y: {
                beginAtZero: true,
                ticks: { callback: v => v.toLocaleString() }
              }
            }
          }
        });
      }

      $(function () {
        Papa.parse(csvFile, {
          download: true,
          header: true,
          dynamicTyping: true,
          complete: function (results) {
            chartContainer.show();
            errorContainer.hide();

            allCrimeData = results.data;

            const stateSet = new Set();
            allCrimeData.forEach(row => {
              if (row.state) stateSet.add(row.state.trim());
            });
            allStates = Array.from(stateSet).sort();

            allStates.forEach(state => {
              if (state.toLowerCase() !== 'malaysia') {  // 排除 Malaysia
                $('#stateSearch').append(new Option(state, state));
              }
            });


            $('#stateSearch').select2({
              placeholder: "Please enter the state",
              allowClear: true,
              minimumInputLength: 1,
              matcher: function (params, data) {
                if ($.trim(params.term) === '') return data;
                if (typeof data.text === 'undefined') return null;
                if (data.text.toLowerCase().startsWith(params.term.toLowerCase())) return data;
                return null;
              }
            });

            drawChart();

            $('#stateSearch').on('change', function () {
              const selected = $(this).val() || [];
              drawChart(selected);
            });
          },
          error: function (err) {
            displayError("Line Chart: Error loading or parsing CSV file:", err);
          }
        });
      });
    }

    //--================== BAR CHART FOR STATE CRIMES ==================
    if ($("#bar-chart").length) {
      const csvFile = 'data/chartdata.csv';
      let chartInstance = null;
      let allCrimeData = [];
      let allYears = [];
      let allTypes = [];

      // 州名与颜色映射
      const stateColors = {
        "Johor": "#EF1505",
        "Kedah": "#FF54E0",
        "Kelantan": "#AE03CD",
        "Melaka": "#5925B2",
        "Negeri Sembilan": "#0C24A6",
        "Pahang": "#2196F3",
        "Pulau Pinang": "#00BCD4",
        "Perak": "#009688",
        "Perlis": "#4CAF50",
        "Sabah": "#CDDC39",
        "Sarawak": "#FFC107",
        "Selangor": "#D38105",
        "Terengganu": "#795548",
        "Kuala Lumpur": "#607D8B",
        // "Putrajaya": "#8BC34A",
        // "Labuan": "#9C27B0"
      };

      function drawChart(selectedYear, selectedType) {
        const ctx = $("#bar-chart").get(0).getContext("2d");
        if (chartInstance) chartInstance.destroy();

        let filteredData = allCrimeData.filter(row => {
          let year = parseInt(String(row.date).substring(0, 4));
          let crimes = Number(row.crimes);
          let typeValue = row.type ? row.type.trim().toLowerCase() : '';
          return (year === selectedYear) &&
            (selectedType ? typeValue === selectedType.toLowerCase() : true) &&
            !isNaN(crimes);
        });

        let stateMap = {};
        filteredData.forEach(row => {
          if (row.state && row.state.trim().toLowerCase() !== 'malaysia') {
            if (!stateMap[row.state]) stateMap[row.state] = 0;
            stateMap[row.state] += Number(row.crimes);
          }
        });

        let sortedStates = Object.entries(stateMap).sort((a, b) => b[1] - a[1]).slice(0, 10);
        if (!sortedStates.length) {
          $("#bar-chart").hide();
          $("#bar-chart-error").show();
          return;
        } else {
          $("#bar-chart-error").hide();
          $("#bar-chart").show();
        }

        chartInstance = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: sortedStates.map(s => s[0]),
            datasets: [{
              label: `Type `,
              data: sortedStates.map(s => s[1]),
              backgroundColor: sortedStates.map(s => stateColors[s[0]] || '#999'),
              borderRadius: 5
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            legend: {
              display: true,
              position: 'bottom',
              onClick: null,
              labels: {
                generateLabels: function (chart) {
                  const labels = chart.data.labels;
                  return labels.map((state, i) => ({
                    text: state,
                    fillStyle: stateColors[state] || '#999',
                    hidden: false
                  }));
                }
              }
            },
            // --- THIS IS THE FINAL, CORRECTED TOOLTIP CONFIGURATION ---
            tooltips: {

            }
          }

        });
      }

      $(function () {
        Papa.parse(csvFile, {
          download: true,
          header: true,
          dynamicTyping: false,
          complete: function (results) {
            try {
              allCrimeData = results.data;

              let yearSet = new Set();
              let typeSet = new Set();

              allCrimeData.forEach(row => {
                if (row.date) {
                  let year = parseInt(String(row.date).substring(0, 4));
                  if (!isNaN(year)) yearSet.add(year);
                }
                if (row.type) typeSet.add(row.type.trim().toLowerCase());
              });

              allYears = Array.from(yearSet).sort((a, b) => a - b);
              allTypes = Array.from(typeSet)
                .filter(type => type.toLowerCase() !== "all")
                .sort();

              // 填充年份下拉
              let yearSelect = $("#yearFilter");
              allYears.forEach(year => {
                yearSelect.append(`<option value="${year}">${year}</option>`);
              });

              // 填充罪案类型下拉
              let typeSelect = $("#crimeTypeFilter");
              typeSelect.append(`<option value="">All</option>`);
              allTypes.forEach(type => {
                let displayName = type.replace(/_/g, ' ');
                typeSelect.append(`<option value="${type}">${displayName}</option>`);
              });

              // 默认选中最新年份
              yearSelect.val(Math.max(...allYears));

              // 渲染颜色对照表*********
              // renderStateColorList();

              // 绑定事件
              $("#yearFilter, #crimeTypeFilter").on("change", function () {
                let year = parseInt($("#yearFilter").val());
                let selectedType = $("#crimeTypeFilter").val();
                drawChart(year, selectedType);
              });

              // 初次绘制
              drawChart(Math.max(...allYears), "");
            } catch (error) {
              console.error("Error loading bar chart:", error);
              $("#bar-chart").hide();
              $("#bar-chart-error").show();
            }
          },
          error: function (err) {
            console.error("Failed to parse CSV:", err);
            $("#bar-chart").hide();
            $("#bar-chart-error").show();
          }
        });
        let barResizeTimer;
        window.addEventListener("resize", function () {
          clearTimeout(barResizeTimer);
          barResizeTimer = setTimeout(() => {
            if (barChartInstance) {
              barChartInstance.resize();
            }
          }, 300);
        });
      });
    }

    //==================== SCATTER PLOT AND DATA TABLE FOR CRIME DATA ==================
    $(document).ready(function () {

      const csvFile = 'data/chartdata.csv';

      // 1. LOAD DATA ONCE
      // This loads the data and then passes it to the two independent functions.
      Papa.parse(csvFile, {
        download: true,
        header: true,
        skipEmptyLines: true,
        complete: function (results) {
          // A robust filter to handle any inconsistencies in the CSV file
          const allRawData = results.data.map(row => {
            const stateKey = Object.keys(row).find(k => k.toLowerCase() === 'state');
            const dateKey = Object.keys(row).find(k => k.toLowerCase() === 'date');
            const typeKey = Object.keys(row).find(k => k.toLowerCase() === 'type');
            const crimesKey = Object.keys(row).find(k => k.toLowerCase() === 'crimes');
            if (stateKey && dateKey && typeKey && crimesKey && row[stateKey]) {
              return {
                state: row[stateKey],
                date: row[dateKey],
                type: row[typeKey],
                crimes: Number(String(row[crimesKey]).replace(/,/g, '')) || 0
              };
            }
            return null;
          }).filter(row => row !== null);

          // 2. INITIALIZE BOTH COMPONENTS INDEPENDENTLY
          initializeScatterChart(allRawData);
          initializeDataTable(allRawData);
        },
        error: function (err) {
          console.error("CSV Load Error:", err);

          // --- SCATTER CHART ERROR HANDLING ---
          $('#scatter-chart-container').hide();
          $('#scatter-chart-error').show();
          $('#year-slider-container').hide();

          // --- CORRECTED DATA TABLE ERROR HANDLING ---
          $('#data-table-header').show();   // 1. Explicitly show the header.
          $('#data-table-content').hide();  // 2. Hide ONLY the table content.
          $('#data-table-error').show();
        }
      });

      /**
        * Scatter Chart: Property vs Violent Crimes
        */
      function initializeScatterChart(rawData) {
        if (!$("#scatterChart").length) return;

        const chartContainer = $('#scatter-chart-container');
        const errorContainer = $('#scatter-chart-error');

        // Single reusable error display function
        function displayError(logMessage, technicalError) {
          console.error(logMessage, technicalError || '');
          chartContainer.hide();
          errorContainer.show();
          $('#year-slider-container').hide();
        }

        try {
          const stateColors = {
            "Johor": "rgba(239, 21, 5, 0.8)",
            "Kedah": "rgba(255, 84, 224, 0.8)",
            "Kelantan": "rgba(174, 3, 205, 0.8)",
            "Melaka": "rgba(89, 37, 178, 0.8)",
            "Negeri Sembilan": "rgba(12, 36, 166, 0.8)",
            "Pahang": "rgba(33, 150, 243, 0.8)",
            "Pulau Pinang": "rgba(0, 188, 212, 0.8)",
            "Perak": "rgba(0, 150, 136, 0.8)",
            "Perlis": "rgba(76, 175, 80, 0.8)",
            "Sabah": "rgba(205, 220, 57, 0.8)",
            "Sarawak": "rgba(255, 193, 7, 0.8)",
            "Selangor": "rgba(211, 129, 5, 0.8)",
            "Terengganu": "rgba(121, 85, 72, 0.8)",
            "Kuala Lumpur": "rgba(96, 125, 139, 0.8)"
          };
          const propertyCrimeTypes = ['theft', 'burglary', 'vandalism', 'arson'];
          const violentCrimeTypes = ['assault', 'robbery', 'murder', 'homicide', 'rape'];

          const dataByYear = {};
          const years = new Set();
          rawData.forEach(row => {
            const year = new Date(row.date).getFullYear();
            if (!year || isNaN(year) || row.state === 'Malaysia') return;
            years.add(year);
            const state = row.state;
            if (!dataByYear[state]) dataByYear[state] = {};
            if (!dataByYear[state][year]) dataByYear[state][year] = { property: 0, violent: 0 };
            if (propertyCrimeTypes.some(type => row.type.toLowerCase().includes(type))) { dataByYear[state][year].property += row.crimes; }
            if (violentCrimeTypes.some(type => row.type.toLowerCase().includes(type))) { dataByYear[state][year].violent += row.crimes; }
          });

          const allStates = Object.keys(dataByYear).sort();
          const sortedYears = [...years].sort();

          const checkboxContainer = $('#state-checkboxes-container');
          allStates.forEach(state => {
            checkboxContainer.append(
              `<div class="form-check"><input class="form-check-input state-checkbox" type="checkbox" value="${state}" id="check-${state}" checked><label class="form-check-label" for="check-${state}">${state}</label></div>`
            );
          });
          const yearSlider = $('#year-slider');
          const yearLabel = $('#current-year-label');
          if (sortedYears.length > 0) {
            const minYear = sortedYears[0];
            const maxYear = sortedYears[sortedYears.length - 1];

            yearSlider.attr('min', minYear);
            yearSlider.attr('max', maxYear);
            yearSlider.val(maxYear);
            yearLabel.text(maxYear);

            // --- ARIA FIX #1: Set initial ARIA attributes for the slider ---
            yearSlider.attr('aria-valuemin', minYear);
            yearSlider.attr('aria-valuemax', maxYear);
            yearSlider.attr('aria-valuenow', maxYear);
          }

          const scatterChartCanvas = $("#scatterChart").get(0).getContext("2d");
          const scatterChart = new Chart(scatterChartCanvas, {
            type: 'scatter',
            data: { datasets: [] },
            options: {
              responsive: true,
              maintainAspectRatio: false,
              animation: { duration: 750 },
              scales: {
                xAxes: [{
                  type: 'linear',
                  position: 'bottom',
                  scaleLabel: {
                    display: true,
                    labelString: 'Total Property Crimes',
                    fontSize: 14,
                    fontStyle: 'bold'
                  }
                }],
                yAxes: [{
                  type: 'linear',
                  scaleLabel: {
                    display: true,
                    labelString: 'Total Violent Crimes',
                    fontSize: 14,
                    fontStyle: 'bold'
                  }
                }]
              },
              tooltips: {
                callbacks: {
                  label: function (tooltipItem, data) {
                    let label = data.datasets[tooltipItem.datasetIndex].label || '';
                    if (label) { label += ': '; }
                    label += `(${Number(tooltipItem.xLabel).toLocaleString()}, ${Number(tooltipItem.yLabel).toLocaleString()})`;
                    return label;
                  }
                }
              },
              legend: {
                display: true,
                position: 'bottom',
                onClick: null
              }
            },
            plugins: [{
              afterDraw: function (chart) {
                const ctx = chart.ctx;
                const chartArea = chart.chartArea;
                if (!chartArea) return;
                ctx.save();
                ctx.beginPath();
                ctx.moveTo(chartArea.left, chartArea.bottom);
                ctx.lineTo(chartArea.right, chartArea.top);
                ctx.strokeStyle = 'rgba(150, 150, 150, 0.6)';
                ctx.lineWidth = 2;
                ctx.setLineDash([5, 5]);
                ctx.stroke();
                ctx.restore();
              }
            }]
          });

          function updateChart() {
            const selectedYear = yearSlider.val();
            const selectedStates = $('.state-checkbox:checked').map((_, el) => $(el).val()).get();
            let newDatasets = [];
            yearLabel.text(selectedYear);

            yearSlider.attr('aria-valuenow', selectedYear);

            selectedStates.forEach((state, index) => {
              const yearlyData = dataByYear[state] ? dataByYear[state][selectedYear] : null;
              if (yearlyData) {
                const color = stateColors[state] || '#999999';
                newDatasets.push({
                  label: state,
                  data: [{ x: yearlyData.property, y: yearlyData.violent }],
                  backgroundColor: color,
                  pointRadius: 8
                });
              }
            });
            scatterChart.data.datasets = newDatasets;
            scatterChart.update();

            const selectAllBtn = $('#select-all-states');
            const deselectAllBtn = $('#deselect-all-states');
            selectAllBtn.removeClass('active');
            deselectAllBtn.removeClass('active');
            if (selectedStates.length === allStates.length) {
              selectAllBtn.addClass('active');
            } else if (selectedStates.length === 0) {
              deselectAllBtn.addClass('active');
            }
          }

          $('#state-checkboxes-container').on('change', '.state-checkbox', updateChart);
          yearSlider.on('input', updateChart);
          $('#select-all-states').on('click', () => {
            $('.state-checkbox').prop('checked', true);
            updateChart();
          });
          $('#deselect-all-states').on('click', () => {
            $('.state-checkbox').prop('checked', false);
            updateChart();
          });
          updateChart();
          chartContainer.show();
          errorContainer.hide();
          $('#year-slider-container').show();

        } catch (err) {
          displayError("Scatter Chart: Unexpected error while rendering chart.", err);
        }
      }
      // --- Your working chart code ends here ---


      /**
       * Initializes the Data Table after aggregating data by State and Date.
       */
      function initializeDataTable(rawData) {
        if (!$("#rawData-table").length) return;

        const tableContainer = $('#data-table-container');
        const errorContainer = $('#data-table-error');
        const headerContainer = $('#data-table-header');

        function displayError(logMessage, technicalError) {
          console.error(logMessage, technicalError || '');
          $('#data-table-content').hide();
          headerContainer.show();
          errorContainer.show();
        }

        try {
          const aggregatedDataMap = {};
          rawData.forEach(row => {
            const key = `${row.state}|${row.date}`;
            if (!aggregatedDataMap[key]) {
              aggregatedDataMap[key] = { state: row.state, date: row.date, crimes: 0 };
            }
            aggregatedDataMap[key].crimes += row.crimes;
          });
          const aggregatedData = Object.values(aggregatedDataMap);

          const allStates = [...new Set(aggregatedData.map(item => item.state))].sort();
          const filterContainer = $('#table-filter-container');

          let filterHtml = '<label for="state-filter" style="margin-right: 5px; font-weight: normal;">Filter by State:</label>';
          filterHtml += '<select id="state-filter" class="form-control form-control-sm" aria-label="Filter table by state">';
          filterHtml += '<option value="">All States</option>'; // Default option
          allStates.forEach(state => {
            filterHtml += `<option value="${state}">${state}</option>`;
          });
          filterHtml += '</select>';
          filterContainer.html(filterHtml);



          const table = $('#rawData-table').DataTable({
            data: aggregatedData,
            columns: [
              { data: 'state' },
              { data: 'date' },
              { data: 'crimes', render: $.fn.dataTable.render.number(',', '.', 0) }
            ],
            // The 'f' in the dom string tells DataTables to create the filter (search) input
            dom: 'rt',
            scrollY: '450px',
            scrollCollapse: true,
            paging: false,
            info: false,
            initComplete: function () {
              const searchContainer = $('#table-search-container');
              // Create and style the search input manually for more control
              const searchInput = $('<input type="search" class="form-control form-control-sm" placeholder="Search for data..." aria-label="Search table data">');

              searchContainer.append('<label style="margin-right: 5px; font-weight: normal;">Search:</label>');
              searchContainer.append(searchInput);

              // Event listener to perform search on keyup
              searchInput.on('keyup', function () {
                table.search(this.value).draw();
              });
            }
          });

          // --- NEW: Add event listener for the state filter dropdown ---
          $('#state-filter').on('change', function () {
            const selectedState = $(this).val();
            // Filter the first column (State) for an exact match
            // `true` for regex, `false` for smart search
            table.column(0).search(selectedState ? '^' + selectedState + '$' : '', true, false).draw();
          });

          $('#data-table-content').show();
          headerContainer.show();
          errorContainer.hide();

        } catch (err) {
          displayError("Data Table: Unexpected error while rendering table.", err);
        }
      }
    });

    // ================== MAIN DASHBOARD KPIS ==================
    $(document).ready(function () {

      const kpiContainer = $('#dashboard-content-wrapper');
      const kpiErrorContainer = $('#kpi-error-message');
      const csvFile = 'data/chartdata.csv'; // Make sure this path is correct

      // A single function to show the error and hide the KPIs
      function displayKpiError(logMessage, technicalError) {
        console.error(logMessage, technicalError || ''); // Log for debugging
        kpiContainer.hide(); // Hide the KPI cards
        kpiErrorContainer.show(); // Show the error message
      }

      // Use PapaParse to read the CSV file
      Papa.parse(csvFile, {
        download: true,
        header: true,
        skipEmptyLines: true,
        // This function runs after the data has been loaded
        complete: function (results) {

          // Check for empty or invalid data first.
          if (!results.data || results.data.length === 0 || results.errors.length > 0) {
            displayKpiError("Main Dashboard: CSV file is empty or contains errors.", results.errors);
            return; // Stop execution
          }

          // If data is good, show the KPIs and hide any previous errors
          kpiContainer.show();
          kpiErrorContainer.hide();

          // Convert crime numbers to actual numbers for calculations
          const allCrimeData = results.data.map(row => {
            const crimeCount = Number(String(row.crimes).replace(/,/g, '')) || 0;
            return { ...row, crimes: crimeCount };
          });

          // 1. Calculate Total Recorded Cases
          const totalCases = allCrimeData.reduce((sum, row) => sum + row.crimes, 0);
          $('#kpi-title-1').text('Total Recorded Cases');
          $('#kpi-value-1').text(totalCases.toLocaleString());

          // 2. Calculate Highest Crime State
          const crimesByState = {};
          allCrimeData.forEach(row => {
            if (row.state && row.state.trim().toLowerCase() !== 'malaysia') {
              crimesByState[row.state] = (crimesByState[row.state] || 0) + row.crimes;
            }
          });
          let maxState = 'N/A';
          let maxStateCrimes = 0;
          for (const state in crimesByState) {
            if (crimesByState[state] > maxStateCrimes) {
              maxStateCrimes = crimesByState[state];
              maxState = state;
            }
          }
          $('#kpi-title-2').text('Highest Crime State');
          $('#kpi-value-2').text(maxState);

          // 3. Calculate Most Frequent Crime Type
          const uniqueYear = Array.from(new Set(allCrimeData.map(row => row.date ? new Date(row.date).getFullYear() : null).filter(y => y))).sort((a, b) => b - a);

          if (uniqueYear.length >= 2) {
            const mostRecentYear = uniqueYear[0];
            const previousYear = uniqueYear[1];

            const mostRecentYearTotal = allCrimeData
              .filter(row => new Date(row.date).getFullYear() === mostRecentYear)
              .reduce((sum, row) => sum + row.crimes, 0);

            const previousYearTotal = allCrimeData
              .filter(row => new Date(row.date).getFullYear() === previousYear)
              .reduce((sum, row) => sum + row.crimes, 0);

            const yoyGrowth = previousYearTotal === 0 ? 0 : ((mostRecentYearTotal - previousYearTotal) / previousYearTotal) * 100;

            // --- This is the corrected part ---
            // It now updates the third info card.
            $('#kpi-title-3').text('Year-over-Year Growth Trend');
            $('#kpi-value-3').text(yoyGrowth.toFixed(1) + '%');

          } else {
            $('#kpi-title-3').text('Year-over-Year Growth Trend');
            $('#kpi-value-3').text('N/A');
          }


          // 4. Calculate Average Daily Cases
          const uniqueYears = new Set(allCrimeData.map(row => row.date ? parseInt(String(row.date).substring(0, 4)) : null).filter(y => y));
          const numberOfYears = uniqueYears.size > 0 ? uniqueYears.size : 1; // Avoid division by zero
          const totalDays = numberOfYears * 365;
          const averageDailyCases = Math.round(totalCases / totalDays);

          // --- This is the corrected part ---
          // It now updates the fourth info card.
          $('#kpi-title-4').text('Average Daily Cases');
          $('#kpi-value-4').text(averageDailyCases.toLocaleString());
          // --- END: KPI CALCULATIONS ---

          // Initialize all your other charts and tables
          initializeScatterChart(allCrimeData);
          initializeDataTable(allCrimeData);
          // Add initializations for your other charts here if they are in this file...
        },
        error: function (err) {
          displayKpiError("Main Dashboard: Error loading or parsing CSV file:", err);
        }
      });
    });



  });
})(jQuery);