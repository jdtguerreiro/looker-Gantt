// Load the Google Charts library
google.charts.load('current', { 'packages': ['gantt'] });

// Set a callback function to draw the chart
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  const data = new google.visualization.DataTable();
  data.addColumn('string', 'Task ID');
  data.addColumn('string', 'Task Name');
  data.addColumn('string', 'Resource');
  data.addColumn('date', 'Start Date');
  data.addColumn('date', 'End Date');
  data.addColumn('number', 'Duration');
  data.addColumn('number', 'Percent Complete');
  data.addColumn('string', 'Dependencies');

  data.addRows([
    ['1', 'Main Task', 'Resource', new Date(2024, 8, 1), new Date(2024, 8, 10), null, 100, null],
    ['2', 'Subtask 1', 'Resource', new Date(2024, 8, 1), new Date(2024, 8, 5), null, 50, null],
    ['3', 'Subtask 2', 'Resource', new Date(2024, 8, 6), new Date(2024, 8, 10), null, 20, '2']
  ]);

  const options = {
    height: 400,
    gantt: {
      trackHeight: 30,
      percentEnabled: true
    }
  };

  const chart = new google.visualization.Gantt(document.getElementById('gantt_chart_div'));
  chart.draw(data, options);
}
