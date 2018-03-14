jQuery.get('data/counts_manu.txt', function(count_data) {
  // 1. create chart object
  Highcharts.chart('tweet-counts', {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false
    },
    title: {
      text: 'Counts of Tweets Containing Keywords Over Time'
    },
    yAxis: {
      title: {
        text: 'Tweet Count'
      }
    },
    xAxis: {
      title: {
        text: 'Minute (Relative to Kick-Off)'
      },
      tickInterval: 5
    },
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle'
    },
    plotOptions: {
      series: {
        pointStart: -5,
        pointInterval: 5
      }
    },
    series: eval(count_data)
  });
});
