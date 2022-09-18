(function (window, document, $, undefined) {
	"use strict";
	$(function () {

		// Traffic Sources Week
		new Chartist.Line(
			"#traffic-week", {
				labels: ["MON", "TUES", "WED", "THURS", "FRI", "SAT", "SUN"],
				series: [
					[0, 2, 3.5, 0, 13, 1, 4, 1],
					[0, 4, 0, 4, 0, 4, 0, 4]
				]
			}, {
				high: 15,
				low: 0,
				showArea: true,
				fullWidth: true,
				axisY: {
					onlyInteger: true,
					offset: 20,
					labelInterpolationFnc: function (value) {
						return value / 1 + "k";
					}
				}
			}
		);

		// Traffic Sources Month
		new Chartist.Line(
			"#traffic-month", {
				labels: ["0", "4", "8", "12", "16", "20", "24", "28", "31"],
				series: [
					[0, 2, 3.5, 4, 8, 3, 4, 6, 2, 6],
					[0, 6, 5.5, 3, 3, 11, 7, 4, 7, 9]
				]
			}, {
				high: 15,
				low: 0,
				showArea: true,
				fullWidth: true,

				axisY: {
					onlyInteger: true,
					offset: 20,
					labelInterpolationFnc: function (value) {
						return value / 1 + "k";
					}
				}
			}
		);

		// Traffic Sources Year
		new Chartist.Line(
			"#traffic-year", {
				labels: [
					"JAN",
					"FEB",
					"MAR",
					"APR",
					"MAY",
					"JUN",
					"JUL",
					"AUG",
					"SEPT",
					"OCT",
					"NOV",
					"DEC"
				],
				series: [
					[0, 2, 3.5, 4, 8, 3, 4, 6, 2, 6, 4.7, 3, 5],
					[0, 6, 5.5, 3, 3, 11, 7, 4, 7, 9, 10, 12, 13]
				]
			}, {
				high: 15,
				low: 0,
				showArea: true,
				fullWidth: true,

				axisY: {
					onlyInteger: true,
					offset: 20,
					labelInterpolationFnc: function (value) {
						return value / 1 + "k";
					}
				}
			}
		);

		// Trigger init of charts inside bootstrap tabs
		$('a[data-toggle="pill"]').on("shown.bs.tab", function (event) {
			$(".ct-chart").each(function (i, e) {
				setTimeout(function () {
					e.__chartist__.update();
				}, 50);
			});
		});

		// Sessions By Channel Donut Chart
		var a = [{
			label: "Organic Search",
			fontFamily: "IBM Plex Sans, sans-serif",
			foreColor: "#6780B1",
			data: [
				[1, 50]
			],
			color: "#66a4fb"
		}, {
			label: "Email Campaign",
			data: [
				[1, 40]
			],
			color: "#e4eaff"
		}, {
			label: "Referral Visitor",
			data: [
				[1, 90]
			],
			color: "#65e0e0"
		}, {
			label: "Social Media",
			data: [
				[1, 70]
			],
			color: "#EE8CE5"
		}];
		$.plot("#sessionsChannelDonut", a, {
			series: {
				pie: {
					show: true,
					radius: 1,
					innerRadius: 0,
					label: {
						show: true,
						radius: 2 / 3,
						formatter: c,
						threshold: 0.0
					}
				}
			},
			grid: {
				hoverable: false,
				clickable: false
			}
		});

		function c(e, f) {
			return "<div style='font-size:6pt; text-align:center; padding:2px; color:white;'>" + e + "<br/>" + Math.round(f.percent) + "%</div>"
		}


		//	Float Bar Chat
		var flotChartOption1 = {
			series: {
				shadowSize: 0,
				bars: {
					show: true,
					lineWidth: 0,
					barWidth: .3,
					fill: 1
				}
			},
			grid: {
				aboveData: true,
				color: '#e5e9f2',
				borderWidth: 0,
				labelMargin: 0
			},
			yaxis: {
				show: false,
				min: 0,
				max: 20
			},
			xaxis: {
				show: false
			}
		};

		$.plot('#flotChart1', [{
			data: data5,
			color: '#65E0E0'
		}, {
			data: data6,
			color: '#66a4fb'
		}], flotChartOption1);


		$.plot('#flotChart2', [{
			data: data5,
			color: '#65E0E0'
		}, {
			data: data7,
			color: '#DC3545'
		}], flotChartOption1);

		$.plot('#flotChart3', [{
			data: data5,
			color: '#65E0E0'
		}, {
			data: data8,
			color: '#23BF08'
		}], flotChartOption1);


		// Real Time Chart
		var data = [],
			totalPoints = 300;

		function getRandomData() {

			if (data.length > 0)
				data = data.slice(1);

			while (data.length < totalPoints) {

				var prev = data.length > 0 ? data[data.length - 1] : 50,
					y = prev + Math.random() * 10 - 5;

				if (y < 0) {
					y = 0;
				} else if (y > 100) {
					y = 100;
				}

				data.push(y);
			}


			var res = [];
			for (var i = 0; i < data.length; ++i) {
				res.push([i, data[i]])
			}

			return res;
		}
		var updateInterval = 300;

		var plotRealtime = $.plot('#flotRealTimeVisitor', [getRandomData()], {
			colors: ['#5D78FF'],
			series: {
				lines: {
					show: true,
					lineWidth: 1
				},
				shadowSize: 0
			},
			grid: {
				borderColor: '#ddd',
				borderWidth: 1,
				labelMargin: 5
			},
			xaxis: {
				color: '#eee',
				font: {
					size: 10,
					color: '#999'
				}
			},
			yaxis: {
				min: 0,
				max: 100,
				color: '#eee',
				font: {
					size: 10,
					color: '#999'
				}
			}
		});

		function update_plotRealtime() {
			plotRealtime.setData([getRandomData()]);
			plotRealtime.draw();
			setTimeout(update_plotRealtime, updateInterval);
		}

		update_plotRealtime();


		// Behavior Chart
		$.plot('#flotChartBehavior', [{
			data: data1,
			color: '#e83e8c',
			lines: {
				lineWidth: 1
			}
		}, {
			data: data2,
			color: '#69b2f8',
			lines: {
				lineWidth: 1
			}
		}, {
			data: data3,
			color: '#23BF08',
			lines: {
				lineWidth: 1
			}
		}], {
			series: {
				stack: 0,
				shadowSize: 0,
				lines: {
					show: true,
					lineWidth: 1.7,
					fill: true,
					fillColor: {
						colors: [{
							opacity: 0
						}, {
							opacity: 0.5
						}]
					}
				}
			},
			grid: {
				borderWidth: 0,
				labelMargin: 5,
				hoverable: true
			},
			yaxis: {
				show: true,
				color: 'rgba(72, 94, 144, .1)',
				min: 0,
				max: 160,
				font: {
					size: 10,
					color: '#8392a5'
				}
			},
			xaxis: {
				show: true,
				color: 'rgba(72, 94, 144, .1)',
				ticks: [
					[0, '08:00'],
					[20, '09:00'],
					[40, '10:00'],
					[60, '11:00'],
					[80, '12:00'],
					[100, '13:00'],
					[120, '14:00'],
					[140, '15:00']
				],
				font: {
					size: 10,
					family: 'IBM Plex Sans", sans-serif',
					color: '#8392a5'
				},
				reserveSpace: false
			}
		});

	});
})(window, document, window.jQuery);