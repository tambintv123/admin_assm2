var activity = document.getElementById("activity");

var chart = new Chart(activity, {
  // The type of chart we want to create
  type: "line",

  // The data for our dataset
  data: {
    labels: [
      "Jan",
      "Feb",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Bearbrick",
        backgroundColor: "transparent",
        borderColor: "rgb(82, 136, 255)",
        data: [100, 70, 90, 115, 98, 165, 135, 150, 160, 170, 190, 180],
        lineTension: 0,
        pointRadius: 4,
        pointBackgroundColor: "rgba(82,136,255,1)",
        pointHoverBackgroundColor: "rgba(255,255,255,0.6)",
        pointHoverRadius: 8,
        pointHitRadius: 30,
        pointBorderWidth: 2,
        pointStyle: "rectRounded",
      },
      {
        label: "Lego",
        backgroundColor: "transparent",
        borderColor: "#49dc7c",
        data: [85, 55, 100, 87, 130, 144, 110, 94, 130, 180, 155, 110],
        lineTension: 0,
        pointRadius: 4,
        pointBackgroundColor: "rgba(91,223,135,1)",
        pointHoverBackgroundColor: "rgba(255,255,255,0.6)",
        pointHoverRadius: 8,
        pointHitRadius: 30,
        pointBorderWidth: 0.3,
        pointStyle: "rectRounded",
      },
      {
        label: "Car",
        backgroundColor: "transparent",
        borderColor: "red",
        data: [30, 20, 80, 30, 40, 67, 50, 30, 80, 90, 70, 101],
        lineTension: 0,
        pointRadius: 4,
        pointBackgroundColor: "red",
        pointHoverBackgroundColor: "rgba(255,255,255,0.6)",
        pointHoverRadius: 8,
        pointHitRadius: 30,
        pointBorderWidth: 0.3,
        pointStyle: "rectRounded",
      },
    ],
  },

  // Configuration options go here
  options: {
    legend: {
      display: false,
    },
    scales: {
      xAxes: [
        {
          gridLines: {
            display: false,
          },
        },
      ],
      yAxes: [
        {
          gridLines: {
            display: true,
          },
          ticks: {},
        },
      ],
    },
    tooltips: {},
  },
});
