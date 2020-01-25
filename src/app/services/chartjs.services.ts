export class chartjsServices {
  lineChartData = 
    {
      labels: [1, 2, 3, 4, 5,6],
      dataValue: [
        { 
        data: [1, 22, 4, 25, 8, 5],
        label: "Africa",
        borderColor: "#3e95cd",
        borderWidth: 1,
        fill: true
        }, 
        { 
        data: [17, 7, 58, 4, 24, 5],
        label: "Asia",
        borderColor: "#8e5ea2",
        borderWidth: 1,
        fill: false
        }
    ],
    options: {
      title: {
      display: false,
      responsive: true,
      maintainAspectRatio: false,
      showLines: true,
      text: 'Revenue per region (in millions)'
      }
    }
  };
}