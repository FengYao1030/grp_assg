(function ($) {
  'use strict';
  $(function () {
    // Remove pro banner on close
    document.querySelector('#bannerClose').addEventListener('click', function () {
      document.querySelector('#proBanner').classList.add('d-none');
    });
    if ($("#transactions-chart").length) {
      var transactionsChartCanvas = $("#transactions-chart").get(0).getContext("2d");

      var gradientFill = transactionsChartCanvas.createLinearGradient(0, 0, 0, 110);
      gradientFill.addColorStop(0, "rgba(255, 255, 255, 1)");
      gradientFill.addColorStop(1, "rgba(243, 153, 21, .6)");

      var areaData = {
        labels: ["AA", "AB", "AC", "AD", "AE", "AF", "AG", "AH", "AI", "AJ", "AK", "AL"],
        datasets: [{
          data: [42, 90, 70, 88, 15, 92, 40, 75, 60, 90, 75, 100],
          backgroundColor: gradientFill,
          borderColor: [
            '#f39915'
          ],
          borderWidth: 2,
          fill: 'origin',
          label: "online"
        }
        ]
      };
      var areaOptions = {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          filler: {
            propagate: false
          }
        },
        scales: {
          xAxes: [{
            display: false,
            ticks: {
              display: false
            },
            gridLines: {
              display: false,
              drawBorder: false,
              color: 'transparent',
              zeroLineColor: '#eeeeee'
            }
          }],
          yAxes: [{
            display: false,
            ticks: {
              display: false,
              autoSkip: false,
              maxRotation: 0,
              stepSize: 15,
              min: 0,
              max: 100
            }
          }]
        },
        legend: {
          display: false
        },
        tooltips: {
          enabled: true
        },
        elements: {
          line: {
            tension: 0
          },
          point: {
            radius: 0
          }
        }
      }

      var transactionsChart = new Chart(transactionsChartCanvas, {
        type: 'line',
        data: areaData,
        options: areaOptions
      });
    }

    if ($("#transactions-chart-dark").length) {
      var transactionsChartCanvas = $("#transactions-chart-dark").get(0).getContext("2d");

      var gradientFill = transactionsChartCanvas.createLinearGradient(0, 0, 0, 110);
      gradientFill.addColorStop(0, "rgba(0, 0, 0, 0)");
      gradientFill.addColorStop(1, "rgba(243, 153, 21, .6)");

      var areaData = {
        labels: ["AA", "AB", "AC", "AD", "AE", "AF", "AG", "AH", "AI", "AJ", "AK", "AL"],
        datasets: [{
          data: [42, 90, 70, 88, 15, 92, 40, 75, 60, 90, 75, 100],
          backgroundColor: gradientFill,
          borderColor: [
            '#f39915'
          ],
          borderWidth: 2,
          fill: 'origin',
          label: "online"
        }
        ]
      };
      var areaOptions = {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          filler: {
            propagate: false
          }
        },
        scales: {
          xAxes: [{
            display: false,
            ticks: {
              display: false
            },
            gridLines: {
              display: false,
              drawBorder: false,
              color: 'transparent',
              zeroLineColor: '#eeeeee'
            }
          }],
          yAxes: [{
            display: false,
            ticks: {
              display: false,
              autoSkip: false,
              maxRotation: 0,
              stepSize: 15,
              min: 0,
              max: 100
            }
          }]
        },
        legend: {
          display: false
        },
        tooltips: {
          enabled: true
        },
        elements: {
          line: {
            tension: 0
          },
          point: {
            radius: 0
          }
        }
      }

      var transactionsChart = new Chart(transactionsChartCanvas, {
        type: 'line',
        data: areaData,
        options: areaOptions
      });
    }

    // sales-chart-a start
    if ($("#sales-chart-a").length) {
      var areaData = {
        labels: ["AA", "AB", "AC", "AD", "AE", "AF", "AG", "AI", "AJ", "AK"],
        datasets: [
          {
            data: [30, 38, 20, 30, 25, 35, 19, 23, 19, 27],
            backgroundColor: [
              '#003c7c'
            ],
            borderColor: [
              '#003c7c'
            ],
            borderWidth: 1,
            fill: 'origin',
            label: "Sales"
          },
          {
            data: [62, 58, 40, 52, 58, 55, 52, 62, 55, 60],
            backgroundColor: [
              '#2981d7'
            ],
            borderColor: [
              '#2981d7'
            ],
            borderWidth: 1,
            fill: 'origin',
            label: "Orders"
          },
          {
            data: [73, 70, 82, 70, 90, 97, 71, 98, 88, 98],
            backgroundColor: [
              '#cfdced'
            ],
            borderColor: [
              '#cfdced'
            ],
            borderWidth: 1,
            fill: 'origin',
            label: "Revenue"
          }
        ]
      };
      var areaOptions = {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          filler: {
            propagate: false
          }
        },
        scales: {
          xAxes: [{
            display: false,
            ticks: {
              display: true
            },
            gridLines: {
              display: false,
              drawBorder: false,
              color: 'transparent',
              zeroLineColor: '#eeeeee'
            }
          }],
          yAxes: [{
            display: false,
            ticks: {
              display: true,
              autoSkip: false,
              maxRotation: 0,
              stepSize: 100,
              min: 0,
              max: 100
            },
            gridLines: {
              drawBorder: false
            }
          }]
        },
        legend: {
          display: false
        },
        tooltips: {
          enabled: true
        },
        elements: {
          line: {
            tension: .35
          },
          point: {
            radius: 0
          }
        }
      }
      var salesChartACanvas = $("#sales-chart-a").get(0).getContext("2d");
      var salesChartA = new Chart(salesChartACanvas, {
        type: 'line',
        data: areaData,
        options: areaOptions
      });
    }
    // sales-chart-a end

    // sales-chart-a-dark start
    if ($("#sales-chart-a-dark").length) {
      var areaData = {
        labels: ["AA", "AB", "AC", "AD", "AE", "AF", "AG", "AI", "AJ", "AK"],
        datasets: [
          {
            data: [30, 38, 20, 30, 25, 35, 19, 23, 19, 27],
            backgroundColor: [
              '#003c7c'
            ],
            borderColor: [
              '#003c7c'
            ],
            borderWidth: 1,
            fill: 'origin',
            label: "Sales"
          },
          {
            data: [62, 58, 40, 52, 58, 55, 52, 62, 55, 60],
            backgroundColor: [
              '#2981d7'
            ],
            borderColor: [
              '#2981d7'
            ],
            borderWidth: 1,
            fill: 'origin',
            label: "Orders"
          },
          {
            data: [73, 70, 82, 70, 90, 97, 71, 98, 88, 98],
            backgroundColor: [
              'rgba(207, 220, 237, .8)'
            ],
            borderColor: [
              'rgba(207, 220, 237, .8)'
            ],
            borderWidth: 1,
            fill: 'origin',
            label: "Revenue"
          }
        ]
      };
      var areaOptions = {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          filler: {
            propagate: false
          }
        },
        scales: {
          xAxes: [{
            display: false,
            ticks: {
              display: true
            },
            gridLines: {
              display: false,
              drawBorder: false,
              color: 'transparent',
              zeroLineColor: '#eeeeee'
            }
          }],
          yAxes: [{
            display: false,
            ticks: {
              display: true,
              autoSkip: false,
              maxRotation: 0,
              stepSize: 100,
              min: 0,
              max: 100
            },
            gridLines: {
              drawBorder: false
            }
          }]
        },
        legend: {
          display: false
        },
        tooltips: {
          enabled: true
        },
        elements: {
          line: {
            tension: .35
          },
          point: {
            radius: 0
          }
        }
      }
      var salesChartACanvas = $("#sales-chart-a-dark").get(0).getContext("2d");
      var salesChartA = new Chart(salesChartACanvas, {
        type: 'line',
        data: areaData,
        options: areaOptions
      });
    }
    // sales-chart-a-dark end

    // sales-chart-b starts
    if ($("#sales-chart-b").length) {
      var salesChartBChartCanvas = $("#sales-chart-b").get(0).getContext("2d");
      var salesChartBChart = new Chart(salesChartBChartCanvas, {
        type: 'bar',
        data: {
          labels: ['AA', 'AB', 'AC', 'AD', 'AF', 'AG', 'AH', 'AI', 'AJ', 'AK', 'AL', 'AM', 'AN', 'AO', 'AP', 'AQ', 'AR', 'AS', 'AT', 'AU', 'AW', 'AX', 'AY', 'AZ', 'BA', 'BB', 'BC', 'BD'],
          datasets: [{
            label: 'Profit',
            data: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,],
            backgroundColor: ['#3b86d1', '#3b86d1', '#3b86d1', '#3b86d1', '#3b86d1', '#3b86d1', '#3b86d1', '#3b86d1', '#3b86d1', '#3b86d1', '#3b86d1', '#3b86d1', '#3b86d1', '#3b86d1', '#3b86d1', '#3b86d1', '#3b86d1', '#3b86d1', '#3b86d1', '#3b86d1', '#3b86d1', '#3b86d1', '#3b86d1', '#b4d5f6', '#b4d5f6', '#b4d5f6', '#b4d5f6', '#b4d5f6']
          }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          layout: {
            padding: {
              left: 0,
              right: 0,
              top: 0,
              bottom: 0
            }
          },
          scales: {
            yAxes: [{
              display: false,
              gridLines: {
                drawBorder: false,
                color: '#f1f3f9',
                zeroLineColor: '#f1f3f9'
              },
              ticks: {
                display: false,
                fontColor: "#9fa0a2",
                padding: 0,
                stepSize: 20,
                min: 0,
                max: 100
              }
            }],
            xAxes: [{
              display: false,
              stacked: false,
              categoryPercentage: 1,
              ticks: {
                display: false,
                beginAtZero: false,
                display: true,
                padding: 10,
                fontSize: 11
              },
              gridLines: {
                color: "rgba(0, 0, 0, 0)",
                display: false
              },
              position: 'bottom',
              barPercentage: 0.7
            }]
          },
          legend: {
            display: false
          },
          elements: {
            point: {
              radius: 0
            }
          }
        }
      });
    }
    // sales-chart-b end

    // sales-chart-b-dark starts
    if ($("#sales-chart-b-dark").length) {
      var salesChartBChartCanvas = $("#sales-chart-b-dark").get(0).getContext("2d");
      var salesChartBChart = new Chart(salesChartBChartCanvas, {
        type: 'bar',
        data: {
          labels: ['AA', 'AB', 'AC', 'AD', 'AF', 'AG', 'AH', 'AI', 'AJ', 'AK', 'AL', 'AM', 'AN', 'AO', 'AP', 'AQ', 'AR', 'AS', 'AT', 'AU', 'AW', 'AX', 'AY', 'AZ', 'BA', 'BB', 'BC', 'BD'],
          datasets: [{
            label: 'Profit',
            data: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,],
            backgroundColor: ['#3b86d1', '#3b86d1', '#3b86d1', '#3b86d1', '#3b86d1', '#3b86d1', '#3b86d1', '#3b86d1', '#3b86d1', '#3b86d1', '#3b86d1', '#3b86d1', '#3b86d1', '#3b86d1', '#3b86d1', '#3b86d1', '#3b86d1', '#3b86d1', '#3b86d1', '#3b86d1', '#3b86d1', '#3b86d1', '#3b86d1', 'rgba(180, 213, 246, .8)', 'rgba(180, 213, 246, .8)', 'rgba(180, 213, 246, .8)', 'rgba(180, 213, 246, .8)', 'rgba(180, 213, 246, .8)']
          }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          layout: {
            padding: {
              left: 0,
              right: 0,
              top: 0,
              bottom: 0
            }
          },
          scales: {
            yAxes: [{
              display: false,
              gridLines: {
                drawBorder: false,
                color: '#f1f3f9',
                zeroLineColor: '#f1f3f9'
              },
              ticks: {
                display: false,
                fontColor: "#9fa0a2",
                padding: 0,
                stepSize: 20,
                min: 0,
                max: 100
              }
            }],
            xAxes: [{
              display: false,
              stacked: false,
              categoryPercentage: 1,
              ticks: {
                display: false,
                beginAtZero: false,
                display: true,
                padding: 10,
                fontSize: 11
              },
              gridLines: {
                color: "rgba(0, 0, 0, 0)",
                display: false
              },
              position: 'bottom',
              barPercentage: 0.7
            }]
          },
          legend: {
            display: false
          },
          elements: {
            point: {
              radius: 0
            }
          }
        }
      });
    }
    // sales-chart-b-dark end

    // desktop-chart start
    if ($("#desktop-chart").length) {
      var areaData = {
        labels: ["Jan", "Feb", "Mar"],
        datasets: [{
          data: [24, 26, 50],
          backgroundColor: [
            "#e6b8ff", "#d077ff", "#a43cda"
          ],
          borderColor: "rgba(0,0,0,0)"
        }
        ]
      };
      var areaOptions = {
        responsive: true,
        maintainAspectRatio: true,
        segmentShowStroke: false,
        cutoutPercentage: 72,
        elements: {
          arc: {
            borderWidth: 4
          }
        },
        legend: {
          display: false
        },
        tooltips: {
          enabled: true
        },
        legendCallback: function (chart) {
          var text = [];
          text.push('<div class="d-flex align-items-center mb-3">');
          text.push('<div class="mr-2" style="width: 10px; height: 10px; border-radius: 50%;  background: ' + chart.data.datasets[0].backgroundColor[0] + ' "></div>');
          text.push('<p class="mb-0">Desktop&nbsp;(24%)</p>')
          text.push('</div>');
          text.push('<div class="d-flex align-items-center mb-3">');
          text.push('<div class="mr-2" style="width: 10px; height: 10px; border-radius: 50%; background: ' + chart.data.datasets[0].backgroundColor[1] + ' "></div>');
          text.push('<p class="mb-0">Mobile&nbsp;(26%)</p>')
          text.push('</div>');
          text.push('<div class="d-flex align-items-center">');
          text.push('<div class="mr-2" style="width: 10px; height: 10px; border-radius: 50%; background: ' + chart.data.datasets[0].backgroundColor[2] + ' "></div>');
          text.push('<p class="mb-0">Tablet&nbsp;(50%)</p>')
          text.push('</div>');
          return text.join("");
        },
      }
      var desktopChartPlugins = {
        beforeDraw: function (chart) {
          var width = chart.chart.width,
            height = chart.chart.height,
            ctx = chart.chart.ctx;

          ctx.restore();
          var fontSize = .96;
          ctx.font = "600 " + fontSize + "em sans-serif";
          ctx.textBaseline = "middle";
          ctx.fillStyle = "#fff";

          var text = "70%",
            textX = Math.round((width - ctx.measureText(text).width) / 2),
            textY = height / 2;

          ctx.fillText(text, textX, textY);
          ctx.save();
        }
      }
      var desktopChartCanvas = $("#desktop-chart").get(0).getContext("2d");
      var desktopChart = new Chart(desktopChartCanvas, {
        type: 'doughnut',
        data: areaData,
        options: areaOptions,
        plugins: desktopChartPlugins
      });
      document.getElementById('desktop-chart-legend').innerHTML = desktopChart.generateLegend();
    }
    // desktop-chart end

    // income-chart start
    if ($('#income-chart').length) {
      var incomeChartCanvas = $("#income-chart").get(0).getContext("2d");


      var data = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        datasets: [
          {
            label: 'Register User',
            data: [80, 180, 80, 200, 140, 180, 70],
            borderColor: [
              '#a43cda'
            ],
            borderWidth: 2,
            fill: true,
            backgroundColor: "rgba(164, 60, 218, .1)"
          },
          {
            label: 'Premium User',
            data: [200, 340, 200, 340, 220, 310, 190],
            borderColor: [
              '#00c8bf'
            ],
            borderWidth: 2,
            fill: true,
            backgroundColor: 'rgba(0, 200, 191, .1)'

          }

        ]
      };
      var options = {
        scales: {
          yAxes: [{
            display: true,
            gridLines: {
              drawBorder: false,
              lineWidth: 1,
              color: "#f1f3f9",
              zeroLineColor: "#f1f3f9",
            },
            ticks: {
              min: 0,
              max: 400,
              stepSize: 100,
              fontColor: "#001737",
              fontSize: 11,
              fontStyle: 400,
              padding: 10
            }
          }],
          xAxes: [{
            display: true,
            gridLines: {
              display: false,
              drawBorder: false,
              lineWidth: 1,
              color: "#e9e9e9",
            },
            ticks: {
              fontColor: "#001737",
              fontSize: 11,
              fontStyle: 400,
              padding: 10,
            }
          }]
        },
        legend: {
          display: false
        },
        legendCallback: function (chart) {
          var text = [];
          text.push('<div class="d-flex align-items-center mr-3">');
          text.push('<div class="mr-2" style="width: 12px; border-radius: 50%; height: 12px; background-color: ' + chart.data.datasets[0].borderColor[0] + ' "></div>');
          text.push('<p class="mb-0">Register User</p>');
          text.push('</div>');
          text.push('<div class="d-flex align-items-center">');
          text.push('<div class="mr-2" style="width: 12px; border-radius: 50%; height: 12px; background-color: ' + chart.data.datasets[1].borderColor[0] + ' "></div>');
          text.push('<p class="mb-0">Premium User</p>');
          text.push('</div>');
          return text.join('');
        },
        elements: {
          point: {
            radius: 0,
          },
          line: {
            tension: .35
          }
        },
        stepsize: 1,
        layout: {
          padding: {
            top: 30,
            bottom: -7,
            left: 0,
            right: 0
          }
        }
      };
      var incomeChart = new Chart(incomeChartCanvas, {
        type: 'line',
        data: data,
        options: options
      });
      document.getElementById('income-chart-legend').innerHTML = incomeChart.generateLegend();
    }
    // income-chart end

    // income-chart-dark start
    if ($('#income-chart-dark').length) {
      var incomeChartCanvas = $("#income-chart-dark").get(0).getContext("2d");


      var data = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        datasets: [
          {
            label: 'Register User',
            data: [80, 180, 80, 200, 140, 180, 70],
            borderColor: [
              '#a43cda'
            ],
            borderWidth: 2,
            fill: true,
            backgroundColor: "rgba(164, 60, 218, .1)"
          },
          {
            label: 'Premium User',
            data: [200, 340, 200, 340, 220, 310, 190],
            borderColor: [
              '#00c8bf'
            ],
            borderWidth: 2,
            fill: true,
            backgroundColor: 'rgba(0, 200, 191, .1)'

          }

        ]
      };
      var options = {
        scales: {
          yAxes: [{
            display: true,
            gridLines: {
              drawBorder: false,
              lineWidth: 1,
              color: "#383d5b",
              zeroLineColor: "#383d5b",
            },
            ticks: {
              min: 0,
              max: 400,
              stepSize: 100,
              fontColor: "#b1b1b5",
              fontSize: 11,
              fontStyle: 400,
              padding: 10
            }
          }],
          xAxes: [{
            display: true,
            gridLines: {
              display: false,
              drawBorder: false,
              lineWidth: 1,
              color: "#e9e9e9",
            },
            ticks: {
              fontColor: "#b1b1b5",
              fontSize: 11,
              fontStyle: 400,
              padding: 10,
            }
          }]
        },
        legend: {
          display: false
        },
        legendCallback: function (chart) {
          var text = [];
          text.push('<div class="d-flex align-items-center mr-3">');
          text.push('<div class="mr-2" style="width: 12px; border-radius: 50%; height: 12px; background-color: ' + chart.data.datasets[0].borderColor[0] + ' "></div>');
          text.push('<p class="mb-0">Register User</p>');
          text.push('</div>');
          text.push('<div class="d-flex align-items-center">');
          text.push('<div class="mr-2" style="width: 12px; border-radius: 50%; height: 12px; background-color: ' + chart.data.datasets[1].borderColor[0] + ' "></div>');
          text.push('<p class="mb-0">Premium User</p>');
          text.push('</div>');
          return text.join('');
        },
        elements: {
          point: {
            radius: 0,
          },
          line: {
            tension: .35
          }
        },
        stepsize: 1,
        layout: {
          padding: {
            top: 30,
            bottom: -7,
            left: 0,
            right: 0
          }
        }
      };
      var incomeChart = new Chart(incomeChartCanvas, {
        type: 'line',
        data: data,
        options: options
      });
      document.getElementById('income-chart-dark-legend').innerHTML = incomeChart.generateLegend();
    }
    // income-chart-dark end

    // sales-chart-c start

    if ($("#sales-chart-c").length) {
      Papa.parse("data/chartdata.csv", {
        download: true,
        header: true,
        skipEmptyLines: true,
        complete: function (results) {
          console.log("CSV Loaded:", results.data);

          const crimeData = {};

          results.data.forEach(row => {
            const type = row.type?.trim();
            const crimes = parseInt(row.crimes);
            if (type && !isNaN(crimes)) {
              crimeData[type] = (crimeData[type] || 0) + crimes;
            }
          });

          const chartLabels = Object.keys(crimeData);
          const chartData = Object.values(crimeData);

          if (chartLabels.length === 0) {
            alert("No valid data found in CSV.");
            return;
          }

          const ctx = document.getElementById("sales-chart-c").getContext("2d");
          new Chart(ctx, {
            type: 'pie',
            data: {
              labels: chartLabels,
              datasets: [{
                data: chartData,
                backgroundColor: ['#f39915', '#21bf06', '#a43cda', '#14a2ff', '#ff5252'],
                borderColor: ['#fff', '#fff', '#fff', '#fff', '#fff']
              }]
            },
            options: {
              responsive: true,
              plugins: {
                legend: {
                  display: true,
                  position: 'bottom'
                }
              }
            }
          });
        }
      });
    }




    // sales-chart-c end

    // sales-chart-d start
    if ($("#sales-chart-d").length) {
      var SalesChartDCanvas = $("#sales-chart-d").get(0).getContext("2d");
      var SalesChartD = new Chart(SalesChartDCanvas, {
        type: 'bar',
        data: {
          labels: ["2014", "2015", "2016", "2017", "2018", "2019"],
          datasets: [{
            label: 'Offline Sales',
            data: [52, 40, 33, 45, 22, 50],
            backgroundColor: '#a43cda'
          },
          {
            label: 'Online Sales',
            data: [22, 45, 23, 50, 15, 40],
            backgroundColor: '#f39915'
          }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          layout: {
            padding: {
              left: 0,
              right: 0,
              top: 0,
              bottom: 0
            }
          },
          scales: {
            yAxes: [{
              display: true,
              gridLines: {
                display: false,
                drawBorder: false
              },
              ticks: {
                display: true,
                min: 0,
                max: 60,
                stepSize: 10,
                fontSize: 10,
                fontColor: "#001737",
              }
            }],
            xAxes: [{
              stacked: false,
              ticks: {
                beginAtZero: true,
                fontColor: "#001737",
                fontSize: 10
              },
              gridLines: {
                color: "rgba(0, 0, 0, 0)",
                display: false
              },
              barPercentage: .3
            }]
          },
          legend: {
            display: false
          },
          elements: {
            point: {
              radius: 0
            }
          }
        },
      });
    }
    // sales-chart-d end

    // sales-chart-d-dark start
    if ($("#sales-chart-d-dark").length) {
      var SalesChartDCanvas = $("#sales-chart-d-dark").get(0).getContext("2d");
      var SalesChartD = new Chart(SalesChartDCanvas, {
        type: 'bar',
        data: {
          labels: ["2014", "2015", "2016", "2017", "2018", "2019"],
          datasets: [{
            label: 'Offline Sales',
            data: [52, 40, 33, 45, 22, 50],
            backgroundColor: '#a43cda'
          },
          {
            label: 'Online Sales',
            data: [22, 45, 23, 50, 15, 40],
            backgroundColor: '#f39915'
          }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          layout: {
            padding: {
              left: 0,
              right: 0,
              top: 0,
              bottom: 0
            }
          },
          scales: {
            yAxes: [{
              display: true,
              gridLines: {
                display: false,
                drawBorder: false
              },
              ticks: {
                display: true,
                min: 0,
                max: 60,
                stepSize: 10,
                fontSize: 10,
                fontColor: "#b1b1b5",
              }
            }],
            xAxes: [{
              stacked: false,
              ticks: {
                beginAtZero: true,
                fontColor: "#b1b1b5",
                fontSize: 10
              },
              gridLines: {
                color: "rgba(0, 0, 0, 0)",
                display: false
              },
              barPercentage: .3
            }]
          },
          legend: {
            display: false
          },
          elements: {
            point: {
              radius: 0
            }
          }
        },
      });
    }
    // sales-chart-d-dark end

    // expense-chart start
    if ($("#expense-chart").length) {
      var expenseChartCanvas = $("#expense-chart").get(0).getContext("2d");
      var expenseChart = new Chart(expenseChartCanvas, {
        type: 'bar',
        data: {
          labels: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V"],
          datasets: [
            {
              label: 'Profit',
              data: [35, 38, 29, 35, 37, 38, 24, 28, 19, 33, 42, 48, 33, 33, 29, 27, 29, 38, 31, 28, 23, 24],
              backgroundColor: '#a43cda',
            },
            {
              label: 'Growth',
              data: [35, 38, 29, 35, 37, 38, 24, 28, 19, 33, 42, 48, 33, 33, 29, 27, 29, 38, 31, 28, 23, 24],
              backgroundColor: '#e1e1e2',
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          layout: {
            padding: {
              left: 0,
              right: 0,
              top: 0,
              bottom: 0
            }
          },
          scales: {
            yAxes: [{
              display: false,
              stacked: true,
              gridLines: {
                drawBorder: false,
                color: '#f1f3f9',
                zeroLineColor: '#f1f3f9'
              },
              ticks: {
                display: false,
                fontColor: "#9fa0a2",
                padding: 0,
                stepSize: 10,
                min: 0,
                max: 100
              }
            }],
            xAxes: [{
              display: false,
              stacked: true,
              categoryPercentage: 1,
              ticks: {
                display: false,
                beginAtZero: false,
                display: true,
                padding: 10,
                fontSize: 11
              },
              gridLines: {
                color: "rgba(0, 0, 0, 0)",
                display: false
              },
              position: 'bottom',
              barPercentage: 0.4
            }]
          },
          legend: {
            display: false
          },
          elements: {
            point: {
              radius: 0
            }
          }
        }
      });
    }
    // expense-chart end

    // expense-chart-dark start
    if ($("#expense-chart-dark").length) {
      var expenseChartCanvas = $("#expense-chart-dark").get(0).getContext("2d");
      var expenseChart = new Chart(expenseChartCanvas, {
        type: 'bar',
        data: {
          labels: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V"],
          datasets: [
            {
              label: 'Profit',
              data: [35, 38, 29, 35, 37, 38, 24, 28, 19, 33, 42, 48, 33, 33, 29, 27, 29, 38, 31, 28, 23, 24],
              backgroundColor: '#a43cda',
            },
            {
              label: 'Growth',
              data: [35, 38, 29, 35, 37, 38, 24, 28, 19, 33, 42, 48, 33, 33, 29, 27, 29, 38, 31, 28, 23, 24],
              backgroundColor: '#6c7293',
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          layout: {
            padding: {
              left: 0,
              right: 0,
              top: 0,
              bottom: 0
            }
          },
          scales: {
            yAxes: [{
              display: false,
              stacked: true,
              gridLines: {
                drawBorder: false,
                color: '#f1f3f9',
                zeroLineColor: '#f1f3f9'
              },
              ticks: {
                display: false,
                fontColor: "#9fa0a2",
                padding: 0,
                stepSize: 10,
                min: 0,
                max: 100
              }
            }],
            xAxes: [{
              display: false,
              stacked: true,
              categoryPercentage: 1,
              ticks: {
                display: false,
                beginAtZero: false,
                display: true,
                padding: 10,
                fontSize: 11
              },
              gridLines: {
                color: "rgba(0, 0, 0, 0)",
                display: false
              },
              position: 'bottom',
              barPercentage: 0.4
            }]
          },
          legend: {
            display: false
          },
          elements: {
            point: {
              radius: 0
            }
          }
        }
      });
    }
    // expense-chart-dark end

    // budget-chart start
    if ($("#budget-chart").length) {
      var expenseChartCanvas = $("#budget-chart").get(0).getContext("2d");
      var expenseChart = new Chart(expenseChartCanvas, {
        type: 'bar',
        data: {
          labels: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V"],
          datasets: [
            {
              label: 'Profit',
              data: [35, 38, 29, 35, 37, 38, 24, 28, 19, 33, 42, 48, 33, 33, 29, 27, 29, 38, 31, 28, 23, 24],
              backgroundColor: '#21bf06'
            },
            {
              label: 'Growth',
              data: [35, 38, 29, 35, 37, 38, 24, 28, 19, 33, 42, 48, 33, 33, 29, 27, 29, 38, 31, 28, 23, 24],
              backgroundColor: '#e1e1e2'
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          layout: {
            padding: {
              left: 0,
              right: 0,
              top: 0,
              bottom: 0
            }
          },
          scales: {
            yAxes: [{
              display: false,
              stacked: true,
              gridLines: {
                drawBorder: false,
                color: '#f1f3f9',
                zeroLineColor: '#f1f3f9'
              },
              ticks: {
                display: false,
                fontColor: "#9fa0a2",
                padding: 0,
                stepSize: 10,
                min: 0,
                max: 100
              }
            }],
            xAxes: [{
              display: false,
              stacked: true,
              categoryPercentage: 1,
              ticks: {
                display: false,
                beginAtZero: false,
                display: true,
                padding: 10,
                fontSize: 11
              },
              gridLines: {
                color: "rgba(0, 0, 0, 0)",
                display: false
              },
              position: 'bottom',
              barPercentage: 0.4
            }]
          },
          legend: {
            display: false
          },
          elements: {
            point: {
              radius: 0
            }
          }
        }
      });
    }
    // budget-chart end

    // budget-chart-dark start
    if ($("#budget-chart-dark").length) {
      var expenseChartCanvas = $("#budget-chart-dark").get(0).getContext("2d");
      var expenseChart = new Chart(expenseChartCanvas, {
        type: 'bar',
        data: {
          labels: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V"],
          datasets: [
            {
              label: 'Profit',
              data: [35, 38, 29, 35, 37, 38, 24, 28, 19, 33, 42, 48, 33, 33, 29, 27, 29, 38, 31, 28, 23, 24],
              backgroundColor: '#21bf06'
            },
            {
              label: 'Growth',
              data: [35, 38, 29, 35, 37, 38, 24, 28, 19, 33, 42, 48, 33, 33, 29, 27, 29, 38, 31, 28, 23, 24],
              backgroundColor: '#6c7293'
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          layout: {
            padding: {
              left: 0,
              right: 0,
              top: 0,
              bottom: 0
            }
          },
          scales: {
            yAxes: [{
              display: false,
              stacked: true,
              gridLines: {
                drawBorder: false,
                color: '#f1f3f9',
                zeroLineColor: '#f1f3f9'
              },
              ticks: {
                display: false,
                fontColor: "#9fa0a2",
                padding: 0,
                stepSize: 10,
                min: 0,
                max: 100
              }
            }],
            xAxes: [{
              display: false,
              stacked: true,
              categoryPercentage: 1,
              ticks: {
                display: false,
                beginAtZero: false,
                display: true,
                padding: 10,
                fontSize: 11
              },
              gridLines: {
                color: "rgba(0, 0, 0, 0)",
                display: false
              },
              position: 'bottom',
              barPercentage: 0.4
            }]
          },
          legend: {
            display: false
          },
          elements: {
            point: {
              radius: 0
            }
          }
        }
      });
    }
    // budget-chart-dark end

    // balance-chart start
    if ($("#balance-chart").length) {
      var expenseChartCanvas = $("#balance-chart").get(0).getContext("2d");
      var expenseChart = new Chart(expenseChartCanvas, {
        type: 'bar',
        data: {
          labels: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V"],
          datasets: [
            {
              label: 'Profit',
              data: [35, 38, 29, 35, 37, 38, 24, 28, 19, 33, 42, 48, 33, 33, 29, 27, 29, 38, 31, 28, 23, 24],
              backgroundColor: '#dc3545'
            },
            {
              label: 'Growth',
              data: [35, 38, 29, 35, 37, 38, 24, 28, 19, 33, 42, 48, 33, 33, 29, 27, 29, 38, 31, 28, 23, 24],
              backgroundColor: '#e1e1e2'
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          layout: {
            padding: {
              left: 0,
              right: 0,
              top: 0,
              bottom: 0
            }
          },
          scales: {
            yAxes: [{
              display: false,
              stacked: true,
              gridLines: {
                drawBorder: false,
                color: '#f1f3f9',
                zeroLineColor: '#f1f3f9'
              },
              ticks: {
                display: false,
                fontColor: "#9fa0a2",
                padding: 0,
                stepSize: 10,
                min: 0,
                max: 100
              }
            }],
            xAxes: [{
              display: false,
              stacked: true,
              categoryPercentage: 1,
              ticks: {
                display: false,
                beginAtZero: false,
                display: true,
                padding: 10,
                fontSize: 11
              },
              gridLines: {
                color: "rgba(0, 0, 0, 0)",
                display: false
              },
              position: 'bottom',
              barPercentage: 0.4
            }]
          },
          legend: {
            display: false
          },
          elements: {
            point: {
              radius: 0
            }
          }
        }
      });
    }
    // balance-chart end

    // balance-chart-dark start
    if ($("#balance-chart-dark").length) {
      var expenseChartCanvas = $("#balance-chart-dark").get(0).getContext("2d");
      var expenseChart = new Chart(expenseChartCanvas, {
        type: 'bar',
        data: {
          labels: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V"],
          datasets: [
            {
              label: 'Profit',
              data: [35, 38, 29, 35, 37, 38, 24, 28, 19, 33, 42, 48, 33, 33, 29, 27, 29, 38, 31, 28, 23, 24],
              backgroundColor: '#dc3545'
            },
            {
              label: 'Growth',
              data: [35, 38, 29, 35, 37, 38, 24, 28, 19, 33, 42, 48, 33, 33, 29, 27, 29, 38, 31, 28, 23, 24],
              backgroundColor: '#6c7293'
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          layout: {
            padding: {
              left: 0,
              right: 0,
              top: 0,
              bottom: 0
            }
          },
          scales: {
            yAxes: [{
              display: false,
              stacked: true,
              gridLines: {
                drawBorder: false,
                color: '#f1f3f9',
                zeroLineColor: '#f1f3f9'
              },
              ticks: {
                display: false,
                fontColor: "#9fa0a2",
                padding: 0,
                stepSize: 10,
                min: 0,
                max: 100
              }
            }],
            xAxes: [{
              display: false,
              stacked: true,
              categoryPercentage: 1,
              ticks: {
                display: false,
                beginAtZero: false,
                display: true,
                padding: 10,
                fontSize: 11
              },
              gridLines: {
                color: "rgba(0, 0, 0, 0)",
                display: false
              },
              position: 'bottom',
              barPercentage: 0.4
            }]
          },
          legend: {
            display: false
          },
          elements: {
            point: {
              radius: 0
            }
          }
        }
      });
    }
    // balance-chart-dark end

    // cpu-chart start
    if ($("#cpu-chart").length) {
      var cpuChartCanvas = $("#cpu-chart").get(0).getContext("2d");
      var cpuChart = new Chart(cpuChartCanvas, {
        type: 'bar',
        data: {
          labels: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"],
          datasets: [{
            label: 'Profit',
            data: [45, 38, 29, 35, 37, 38, 24, 28, 19, 33, 42, 48],
            backgroundColor: '#dc3545',
          }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          layout: {
            padding: {
              left: 0,
              right: 0,
              top: 0,
              bottom: 0
            }
          },
          scales: {
            yAxes: [{
              display: false,
              gridLines: {
                drawBorder: false,
                color: '#f1f3f9',
                zeroLineColor: '#f1f3f9'
              },
              ticks: {
                display: false,
                fontColor: "#9fa0a2",
                padding: 0,
                stepSize: 10,
                min: 0,
                max: 50
              }
            }],
            xAxes: [{
              display: false,
              stacked: false,
              categoryPercentage: 1,
              ticks: {
                display: false,
                beginAtZero: false,
                display: true,
                padding: 10,
                fontSize: 11
              },
              gridLines: {
                color: "rgba(0, 0, 0, 0)",
                display: false
              },
              position: 'bottom',
              barPercentage: 0.4
            }]
          },
          legend: {
            display: false
          },
          elements: {
            point: {
              radius: 0
            }
          },
          tooltips: {
            backgroundColor: 'rgba(168, 60, 218, .6)'
          }
        }
      });
    }
    // cpu-chart end

    // memory-chart start
    if ($("#memory-chart").length) {
      var memoryChartCanvas = $("#memory-chart").get(0).getContext("2d");
      var memoryChart = new Chart(memoryChartCanvas, {
        type: 'bar',
        data: {
          labels: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"],
          datasets: [{
            label: 'Profit',
            data: [38, 35, 23, 22, 35, 23, 24, 28, 19, 33, 30, 45],
            backgroundColor: '#00c8bf',
          }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          layout: {
            padding: {
              left: 0,
              right: 0,
              top: 0,
              bottom: 0
            }
          },
          scales: {
            yAxes: [{
              display: false,
              gridLines: {
                drawBorder: false,
                color: '#f1f3f9',
                zeroLineColor: '#f1f3f9'
              },
              ticks: {
                display: false,
                fontColor: "#9fa0a2",
                padding: 0,
                stepSize: 10,
                min: 0,
                max: 50
              }
            }],
            xAxes: [{
              display: false,
              stacked: false,
              categoryPercentage: 1,
              ticks: {
                display: false,
                beginAtZero: false,
                display: true,
                padding: 10,
                fontSize: 11
              },
              gridLines: {
                color: "rgba(0, 0, 0, 0)",
                display: false
              },
              position: 'bottom',
              barPercentage: 0.4
            }]
          },
          legend: {
            display: false
          },
          elements: {
            point: {
              radius: 0
            }
          },
          tooltips: {
            backgroundColor: 'rgba(168, 60, 218, .6)'
          }
        }
      });
    }
    // memory-chart end

    // ================== PASTE THE FINAL DOUGHNUT CHART CODE HERE ==================
    // --- FINAL, DESIGNER & INTERACTIVE DOUGHNUT CHART CODE ---
    // --- FINAL, ENHANCED-DESIGN DOUGHNUT CHART CODE ---
    if ($("#doughnutChart").length) {

      const csvFile = '/data/chartdata.csv';
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
      // Register the plugin with Chart.js
      Chart.plugins.register(centerTextPlugin);
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
              borderWidth: 4, // Slightly thicker border for a cleaner look
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
                fontColor: '#555',
                boxWidth: 20,
                padding: 20,
                fontSize: 14
              },
              onClick: null
            },
            tooltips: {
              enabled: true,
              backgroundColor: '#222',
              titleFontColor: '#fff',
              bodyFontColor: '#fff',
              displayColors: false,
              callbacks: {
                label: function (tooltipItem, data) {
                  let label = data.labels[tooltipItem.index] || '';
                  let value = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
                  return ` ${label}: ${value.toLocaleString()}`;
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
          allCrimeData = results.data;

          const states = [...new Set(allCrimeData.map(row => row.state).filter(Boolean))];
          const stateFilterDropdown = document.getElementById('stateFilter');

          if (stateFilterDropdown) {
            // --- THIS IS THE NEW LOGIC FOR THE DROPDOWN ---

            // 1. Add the disabled, selected placeholder first. This is what the user will see on load.
            const placeholder = document.createElement('option');
            placeholder.text = "Filter by State";
            placeholder.value = ""; // Give it an empty value
            placeholder.disabled = true;
            placeholder.selected = true;
            stateFilterDropdown.appendChild(placeholder);

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
        }
      });
    }




    /*
    
        if ($("#scatterChart").length) {
    
          const csvFile = 'data/chartdata.csv';
          const stateColors = [
            'rgba(239, 21, 5, 0.8)',   // Red
            'rgba(255, 84, 224, 0.8)',   // Pink
            'rgba(174, 3, 205, 0.8)',  // Purple
            'rgba(89, 37, 178, 0.8)',  // Deep Purple
            'rgba(12, 36, 166, 0.8)',   // Indigo
            'rgba(33, 150, 243, 0.8)',  // Blue
            'rgba(0, 188, 212, 0.8)',   // Cyan
            'rgba(0, 150, 136, 0.8)',   // Teal
            'rgba(76, 175, 80, 0.8)',   // Green
            'rgba(205, 220, 57, 0.8)',  // Lime
            'rgba(255, 193, 7, 0.8)',   // Amber
            'rgba(211, 129, 5, 0.8)',   // Orange
            'rgba(121, 85, 72, 0.8)',   // Brown
            'rgba(96, 125, 139, 0.8)'   // Blue Grey
          ];
          const propertyCrimeTypes = ['theft', 'burglary', 'vandalism', 'arson'];
          const violentCrimeTypes = ['assault', 'robbery', 'murder', 'homicide', 'rape'];
    
          Papa.parse(csvFile, {
            download: true,
            header: true,
            dynamicTyping: true,
            complete: function (results) {
              const allData = results.data.filter(r => r && r.state && r.date && typeof r.crimes === 'number');
    
              const dataByYear = {};
              const years = new Set();
              allData.forEach(row => {
                const year = new Date(row.date).getFullYear();
                if (!year || isNaN(year)) return;
                years.add(year);
    
                const state = row.state;
                if (state === 'Malaysia') return;
    
                if (!dataByYear[state]) dataByYear[state] = {};
                if (!dataByYear[state][year]) dataByYear[state][year] = { property: 0, violent: 0 };
    
                if (propertyCrimeTypes.some(type => row.type.toLowerCase().includes(type))) {
                  dataByYear[state][year].property += row.crimes;
                }
                if (violentCrimeTypes.some(type => row.type.toLowerCase().includes(type))) {
                  dataByYear[state][year].violent += row.crimes;
                }
              });
    
              const allStates = Object.keys(dataByYear).sort();
              const sortedYears = [...years].sort();
    
              const checkboxContainer = $('#state-checkboxes-container');
              allStates.forEach(state => {
                checkboxContainer.append(`
                        <div class="form-check"><input class="form-check-input state-checkbox" type="checkbox" value="${state}" id="check-${state}" checked>
                            <label class="form-check-label" for="check-${state}">${state}</label>
                        </div>`);
              });
    
              const yearSlider = $('#year-slider');
              const yearLabel = $('#current-year-label');
              if (sortedYears.length > 0) {
                yearSlider.attr('min', sortedYears[0]);
                yearSlider.attr('max', sortedYears[sortedYears.length - 1]);
                yearSlider.val(sortedYears[sortedYears.length - 1]);
                yearLabel.text(sortedYears[sortedYears.length - 1]);
              }
    
              // --- 1. DEFINE THE DIAGONAL LINE PLUGIN ---
              const diagonalLinePlugin = {
                id: 'diagonalLine',
                afterDraw: (chart, args, options) => {
                  if (options.display) {
                    const { ctx, chartArea: { left, right, top, bottom } } = chart;
                    ctx.save();
                    ctx.beginPath();
                    ctx.moveTo(left, bottom);
                    ctx.lineTo(right, top);
                    ctx.strokeStyle = 'rgba(150, 150, 150, 0.6)';
                    ctx.lineWidth = 2;
                    ctx.setLineDash([5, 5]);
                    ctx.stroke();
                    ctx.restore();
                  }
                }
              };
    
              const scatterChartCanvas = $("#scatterChart").get(0).getContext("2d");
              const scatterChart = new Chart(scatterChartCanvas, {
                type: 'scatter',
                data: { datasets: [] },
                options: {
                  responsive: true,
                  maintainAspectRatio: false,
                  animation: { duration: 750, easing: 'easeInOutQuart' },
                  scales: {
                    x: {
                      type: 'logarithmic',
                      title: {
                        display: true, // This makes the title visible
                        text: 'Total Property Crimes', // This is the text that will appear
                        font: {
                          size: 14,
                          weight: 'bold'
                        }
                      }
                    },
                    y: {
                      type: 'logarithmic',
                      title: {
                        display: true, // This makes the title visible
                        text: 'Total Violent Crimes', // This is the text that will appear
                        font: {
                          size: 14,
                          weight: 'bold'
                        }
                      }
                    }
                  },
                  plugins: {
                    tooltip: {
                      callbacks: {
                        label: function (context) {
                          let label = context.dataset.label || '';
                          if (label) { label += ': '; }
                          let point = context.raw;
                          return `${label}(${point.x.toLocaleString()}, ${point.y.toLocaleString()})`;
                        }
                      }
                    },
                    // --- 2. CONFIGURE THE PLUGIN OPTIONS ---
                    diagonalLine: {
                      display: true // We want the line to be visible
                    }
                  }
                },
                // --- 3. REGISTER THE PLUGIN WITH THE CHART ---
                plugins: [diagonalLinePlugin]
              });
    
              // --- THE MAIN UPDATE FUNCTION ---
              function updateChart() {
                const selectedYear = yearSlider.val();
                const selectedStates = $('.state-checkbox:checked').map((_, el) => $(el).val()).get();
                let newDatasets = [];
    
                yearLabel.text(selectedYear);
    
                selectedStates.forEach((state, index) => {
                  const yearlyData = dataByYear[state] ? dataByYear[state][selectedYear] : null;
    
                  if (yearlyData && yearlyData.property > 0 && yearlyData.violent > 0) {
                    newDatasets.push({
                      label: state,
                      data: [{ x: yearlyData.property, y: yearlyData.violent }],
                      backgroundColor: stateColors[index % stateColors.length],
                      radius: 8
                    });
                  }
                });
    
                scatterChart.data.datasets = newDatasets;
                scatterChart.update();
              }
    
              // --- Event Listeners & Initial Load ---
              $('#state-checkboxes-container').on('change', '.state-checkbox', updateChart);
              yearSlider.on('input', updateChart);
              $('#select-all-states').on('click', () => { $('.state-checkbox').prop('checked', true).trigger('change'); });
              $('#deselect-all-states').on('click', () => { $('.state-checkbox').prop('checked', false).trigger('change'); });
    
              updateChart();
            }
          });
        }
    */









    // ================== LATEST VERSION ==================   /*
    /*
    if ($("#scatterChart").length) {

      const csvFile = 'data/chartdata.csv';
      const stateColors = [
        'rgba(239, 21, 5, 0.8)',   // Red
        'rgba(255, 84, 224, 0.8)',   // Pink
        'rgba(174, 3, 205, 0.8)',  // Purple
        'rgba(89, 37, 178, 0.8)',  // Deep Purple
        'rgba(12, 36, 166, 0.8)',   // Indigo
        'rgba(33, 150, 243, 0.8)',  // Blue
        'rgba(0, 188, 212, 0.8)',   // Cyan
        'rgba(0, 150, 136, 0.8)',   // Teal
        'rgba(76, 175, 80, 0.8)',   // Green
        'rgba(205, 220, 57, 0.8)',  // Lime
        'rgba(255, 193, 7, 0.8)',   // Amber
        'rgba(211, 129, 5, 0.8)',   // Orange
        'rgba(121, 85, 72, 0.8)',   // Brown
        'rgba(96, 125, 139, 0.8)'   // Blue Grey
      ];
      const propertyCrimeTypes = ['theft', 'burglary', 'vandalism', 'arson'];
      const violentCrimeTypes = ['assault', 'robbery', 'murder', 'homicide', 'rape'];

      Papa.parse(csvFile, {
        download: true,
        header: true,
        dynamicTyping: true,
        complete: function (results) {
          const allData = results.data.filter(r => r && r.state && r.date && typeof r.crimes === 'number');

          const dataByYear = {};
          const years = new Set();
          allData.forEach(row => {
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
            yearSlider.attr('min', sortedYears[0]);
            yearSlider.attr('max', sortedYears[sortedYears.length - 1]);
            yearSlider.val(sortedYears[sortedYears.length - 1]);
            yearLabel.text(sortedYears[sortedYears.length - 1]);
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
                position: 'top',
                onClick: null
              }
            },
            // --- THIS IS THE CORRECTED PLUGIN REGISTRATION FOR CHART.JS v2 ---
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
            selectedStates.forEach((state, index) => {
              const yearlyData = dataByYear[state] ? dataByYear[state][selectedYear] : null;
              if (yearlyData) {
                newDatasets.push({
                  label: state,
                  data: [{ x: yearlyData.property, y: yearlyData.violent }],
                  backgroundColor: stateColors[index % stateColors.length],
                  pointRadius: 8
                });
              }
            });

            scatterChart.data.datasets = newDatasets;
            scatterChart.update();

            // Logic to set the active "Select/Deselect" button style
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

          // Event Listeners
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

          // Initial Chart Load
          updateChart();
        }

      });
    }

*/





























    // ========================================================================
    // === FINAL, CONSOLIDATED JAVASCRIPT FOR THE ENTIRE DASHBOARD ===
    // ========================================================================
    /*
        $(document).ready(function () {
    
          const csvFile = 'data/chartdata.csv';
    
          // 1. LOAD DATA ONCE
          // This loads the CSV file and then passes the data to the functions that build the dashboard.
          Papa.parse(csvFile, {
            download: true,
            header: true,
            skipEmptyLines: true,
            complete: function (results) {
              // A robust filter to handle any inconsistencies in the CSV file
              const allRawData = results.data.map(row => {
                // Find the keys for state, date, type, and crimes, ignoring case
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
            }
          });
    
                function initializeScatterChart(rawData) {
            if (!$("#scatterChart").length) return;
    
            const stateColors = [
              'rgba(230, 25, 75, 0.8)', 'rgba(60, 180, 75, 0.8)', 'rgba(255, 225, 25, 0.8)',
              'rgba(0, 130, 200, 0.8)', 'rgba(245, 130, 48, 0.8)', 'rgba(145, 30, 180, 0.8)',
              'rgba(70, 240, 240, 0.8)', 'rgba(240, 50, 230, 0.8)', 'rgba(210, 245, 60, 0.8)'
            ];
            const propertyCrimeTypes = ['theft', 'burglary', 'vandalism', 'arson'];
    
            const dataByYear = {};
            const years = new Set();
            rawData.forEach(row => {
              const year = new Date(row.date).getFullYear();
              if (!year || isNaN(year)) return;
              years.add(year);
              const state = row.state;
              if (!dataByYear[state]) dataByYear[state] = {};
              if (!dataByYear[state][year]) dataByYear[state][year] = { property: 0, violent: 0 };
              if (propertyCrimeTypes.some(type => row.type.toLowerCase().includes(type))) {
                dataByYear[state][year].property += row.crimes;
              } else {
                dataByYear[state][year].violent += row.crimes;
              }
            });
    
            const allStates = Object.keys(dataByYear).sort();
            const sortedYears = [...years].sort();
            const checkboxContainer = $('#state-checkboxes-container');
            allStates.forEach(state => { checkboxContainer.append(`<div class="form-check"><input class="form-check-input state-checkbox" type="checkbox" value="${state}" checked><label class="form-check-label">${state}</label></div>`); });
    
            const yearSlider = $('#year-slider');
            const yearLabel = $('#current-year-label');
            if (sortedYears.length > 0) {
              yearSlider.attr('min', sortedYears[0]);
              yearSlider.attr('max', sortedYears[sortedYears.length - 1]);
              yearSlider.val(sortedYears[sortedYears.length - 1]);
              yearLabel.text(sortedYears[sortedYears.length - 1]);
            }
    
            const scatterChartCanvas = $("#scatterChart").get(0).getContext("2d");
            const scatterChart = new Chart(scatterChartCanvas, {
              type: 'scatter',
              data: { datasets: [] },
              options: {
                responsive: true, maintainAspectRatio: false, animation: { duration: 750 },
                scales: { xAxes: [{ type: 'linear', position: 'bottom', scaleLabel: { display: true, labelString: 'Total Property Crimes', fontSize: 14, fontStyle: 'bold' } }], yAxes: [{ type: 'linear', scaleLabel: { display: true, labelString: 'Total Violent Crimes', fontSize: 14, fontStyle: 'bold' } }] },
                tooltips: { callbacks: { label: function (tooltipItem, data) { let label = data.datasets[tooltipItem.datasetIndex].label || ''; if (label) { label += ': '; } label += `(${Number(tooltipItem.xLabel).toLocaleString()}, ${Number(tooltipItem.yLabel).toLocaleString()})`; return label; } } },
                legend: { display: true, position: 'top' },
                plugins: [{ afterDraw: function (chart) { const ctx = chart.ctx; const chartArea = chart.chartArea; if (!chartArea) return; ctx.save(); ctx.beginPath(); ctx.moveTo(chartArea.left, chartArea.bottom); ctx.lineTo(chartArea.right, chartArea.top); ctx.strokeStyle = 'rgba(150, 150, 150, 0.6)'; ctx.lineWidth = 2; ctx.setLineDash([5, 5]); ctx.stroke(); ctx.restore(); } }]
              }
            });
    
            function updateChart() {
              const selectedYear = yearSlider.val();
              const selectedStates = $('.state-checkbox:checked').map((_, el) => $(el).val()).get();
              let newDatasets = [];
              yearLabel.text(selectedYear);
              selectedStates.forEach((state, index) => {
                const yearlyData = dataByYear[state] ? dataByYear[state][selectedYear] : null;
                if (yearlyData) { newDatasets.push({ label: state, data: [{ x: yearlyData.property, y: yearlyData.violent }], backgroundColor: stateColors[index % stateColors.length], pointRadius: 8 }); }
              });
              scatterChart.data.datasets = newDatasets;
              scatterChart.update();
            }
    
            $('#state-checkboxes-container').on('change', '.state-checkbox', updateChart);
            yearSlider.on('input', updateChart);
            $('#select-all-states').on('click', () => { $('.state-checkbox').prop('checked', true); updateChart(); });
            $('#deselect-all-states').on('click', () => { $('.state-checkbox').prop('checked', false); updateChart(); });
            updateChart();
          }
    
               function initializeDataTable(rawData) {
            if (!$("#rawData-table").length) return;
    
            const states = [...new Set(rawData.map(item => item.state))].sort();
            const crimeTypes = [...new Set(rawData.map(item => item.type))].sort();
    
            const stateFilter = $('#tableStateFilter');
            stateFilter.append('<option value="">All States</option>');
            states.forEach(state => stateFilter.append(`<option value="${state}">${state}</option>`));
    
            const crimeTypeFilter = $('#tableCrimeTypeFilter');
            crimeTypeFilter.append('<option value="">All Crime Types</option>');
            crimeTypes.forEach(type => crimeTypeFilter.append(`<option value="${type}">${type}</option>`));
    
            const dataTable = $('#rawData-table').DataTable({
              data: rawData,
              columns: [
                { data: 'state' },
                { data: 'date' },
                { data: 'type' },
                { data: 'crimes' }
              ]
            });
    
            function updateDataTable() {
              const selectedState = stateFilter.val();
              const selectedCrimeType = crimeTypeFilter.val();
    
              $.fn.dataTable.ext.search.pop();
              $.fn.dataTable.ext.search.push(
                function (settings, data, dataIndex) {
                  const rowState = data[0];
                  const rowCrimeType = data[2];
                  const stateMatch = !selectedState || rowState === selectedState;
                  const crimeTypeMatch = !selectedCrimeType || rowCrimeType === selectedCrimeType;
                  return stateMatch && crimeTypeMatch;
                }
              );
              dataTable.draw();
            }
    
            stateFilter.on('change', updateDataTable);
            crimeTypeFilter.on('change', updateDataTable);
          }
    
        });
    */















    // ========================================================================
    // === FINAL, MERGED JAVASCRIPT WITH YOUR PREFERRED CHART DESIGN ===
    // ========================================================================

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
          console.error("Error loading or parsing CSV file:", err);
          alert("Failed to load the data file. Please check the file path and format.");
        }
      });

      /**
       * YOUR PREFERRED SCATTER CHART CODE
       * This function contains your working scatter chart code, exactly as you provided it.
       * @param {Array} rawData The complete dataset from the CSV.
       */
      function initializeScatterChart(rawData) {
        if (!$("#scatterChart").length) return;

        // --- Your working chart code starts here ---
        const stateColors = [
          'rgba(239, 21, 5, 0.8)',   // Red
          'rgba(255, 84, 224, 0.8)',  // Pink
          'rgba(174, 3, 205, 0.8)',  // Purple
          'rgba(89, 37, 178, 0.8)',  // Deep Purple
          'rgba(12, 36, 166, 0.8)',   // Indigo
          'rgba(33, 150, 243, 0.8)',  // Blue
          'rgba(0, 188, 212, 0.8)',   // Cyan
          'rgba(0, 150, 136, 0.8)',   // Teal
          'rgba(76, 175, 80, 0.8)',   // Green
          'rgba(205, 220, 57, 0.8)',  // Lime
          'rgba(255, 193, 7, 0.8)',   // Amber
          'rgba(211, 129, 5, 0.8)',   // Orange
          'rgba(121, 85, 72, 0.8)',   // Brown
          'rgba(96, 125, 139, 0.8)'   // Blue Grey
        ];
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
          yearSlider.attr('min', sortedYears[0]);
          yearSlider.attr('max', sortedYears[sortedYears.length - 1]);
          yearSlider.val(sortedYears[sortedYears.length - 1]);
          yearLabel.text(sortedYears[sortedYears.length - 1]);
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
              position: 'top',
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
          selectedStates.forEach((state, index) => {
            const yearlyData = dataByYear[state] ? dataByYear[state][selectedYear] : null;
            if (yearlyData) {
              newDatasets.push({
                label: state,
                data: [{ x: yearlyData.property, y: yearlyData.violent }],
                backgroundColor: stateColors[index % stateColors.length],
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
        // --- Your working chart code ends here ---
      }

      /**
       * Initializes the Data Table after aggregating data by State and Date.
       */
      function initializeDataTable(rawData) {
        if (!$("#rawData-table").length) return;

        const aggregatedDataMap = {};
        rawData.forEach(row => {
          const key = `${row.state}|${row.date}`;
          if (!aggregatedDataMap[key]) {
            aggregatedDataMap[key] = { state: row.state, date: row.date, crimes: 0 };
          }
          aggregatedDataMap[key].crimes += row.crimes;
        });
        const aggregatedData = Object.values(aggregatedDataMap);

        // Inside the initializeDataTable function...

        const dataTable = $('#rawData-table').DataTable({
          data: aggregatedData,
          columns: [
            { data: 'state' },
            { data: 'date' },
            { data: 'crimes', render: $.fn.dataTable.render.number(',', '.', 0) }
          ],
          // The 'f' in the dom string tells DataTables to create the filter (search) input
          dom: '<"row"<"col-sm-12"f>>' + // We only need the search box generated
            '<"row"<"col-sm-12"tr>>',
          scrollY: '450px',
          scrollCollapse: true,
          paging: false,
          info: false,

          // --- THIS IS THE KEY CHANGE ---
          // This function runs after the table is fully built.
          initComplete: function () {
            // Find the search box DataTables created...
            const searchInput = $('#rawData-table_filter');
            // ...and move it into our new placeholder div.
            searchInput.appendTo('#table-search-placeholder');
          }
        });

        /* dataTable.on('init.dt', function () {
           dataTable.columns.adjust().draw();
         });
 
         $.fn.dataTable.ext.search.push(
           function (settings, data, dataIndex) {
             const selectedState = stateFilter.val();
             const rowState = data[0];
             return !selectedState || rowState === selectedState;
           }
         );
 
         stateFilter.on('change', () => dataTable.draw()); */
      }
    });












  });
})(jQuery);