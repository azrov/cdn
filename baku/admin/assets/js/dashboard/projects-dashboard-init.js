$(function () {
	'use strict'

	// flotChartProjectBar
	$.plot('#flotChartProjectBar', [{
		data: data2,
		color: '#E83E8C'
	}, {
		data: data3,
		color: '#5556FD'
	}, {
		data: data1,
		color: '#0168fa',
		lines: {
			show: true,
			lineWidth: 1.5
		},
		bars: {
			show: true
		}
	}], {
		series: {
			shadowSize: 0,
			bars: {
				show: true,
				lineWidth: 0,
				barWidth: .5,
				fill: 1
			}
		},
		grid: {
			color: '#c0ccda',
			borderWidth: 0,
			labelMargin: 10
		},
		yaxis: {
			show: true,
			max: 100,
			tickSize: 15
		},
		xaxis: {
			color: 'transparent',
			show: true,
			max: 37,
			ticks: [
				[0, 'Mar 10'],
				[5, 'Mar 11'],
				[10, 'Mar 12'],
				[15, 'Mar 13'],
				[20, 'Mar 14'],
				[25, 'Mar 15'],
				[30, 'Mar 16'],
				[35, 'Mar 17']
			]
		}
	});


	//flotChart1
	$.plot('#flotChart1', [{
		data: data1,
		color: '#1BB4A4',
		lines: {
			lineWidth: 1
		}
	}, {
		data: data2,
		color: '#E25D6A'
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


	// flotChart2
	$.plot('#flotChart2', [{
		data: data1,
		color: '#1BB4A4',
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
			max: 70,
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


})