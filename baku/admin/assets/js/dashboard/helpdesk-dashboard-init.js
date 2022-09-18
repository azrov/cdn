$(function () {
	'use strict';

	// flotChart1 Chart
	$.plot('#flotChart1', [{
		data: data1,
		color: '#e1e5ed',
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
		color: '#0168fa'
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
						opacity: 0.2
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
			max: 150,
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

	function flotOption(min, max) {
		return {
			series: {
				stack: 0,
				shadowSize: 0,
				lines: {
					show: true,
					lineWidth: 1.5,
					fill: true,
					fillColor: {
						colors: [{
							opacity: 0
						}, {
							opacity: 0.2
						}]
					}
				}
			},
			grid: {
				borderWidth: 0
			},
			yaxis: {
				show: false
			},
			xaxis: {
				show: false,
				min: min,
				max: max
			}
		}
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

	$.plot('#flotBarChart1', [{
		data: data5,
		color: '#e5e9f2'
	}, {
		data: data7,
		color: '#66a4fb'
	}], flotChartOption1);


	// flotChartSupport  Chart
	$.plot('#flotChartSupport', [{
		data: data1,
		color: '#007BFF',
		lines: {
			lineWidth: 1
		}
	}, {
		data: data2,
		color: '#F27510',
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
						opacity: 0.2
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
			max: 120,
			font: {
				size: 10,
				color: '#8392a5'
			}
		},
		xaxis: {
			show: false,
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

	function flotOption(min, max) {
		return {
			series: {
				stack: 0,
				shadowSize: 0,
				lines: {
					show: true,
					lineWidth: 1.5,
					fill: true,
					fillColor: {
						colors: [{
							opacity: 0
						}, {
							opacity: 0.2
						}]
					}
				}
			},
			grid: {
				borderWidth: 0
			},
			yaxis: {
				show: false
			},
			xaxis: {
				show: false,
				min: min,
				max: max
			}
		}
	}


});