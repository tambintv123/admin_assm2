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
        label: "Iphone",
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
        label: "Samsung",
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
        label: "Xiaomi",
        backgroundColor: "transparent",
        borderColor: "#036a8f",
        data: [30, 20, 80, 30, 40, 67, 50, 30, 80, 90, 70, 101],
        lineTension: 0,
        pointRadius: 4,
        pointBackgroundColor: "rgba(3,106,142,1)",
        pointHoverBackgroundColor: "rgba(255,255,255,0.6)",
        pointHoverRadius: 8,
        pointHitRadius: 30,
        pointBorderWidth: 0.3,
        pointStyle: "rectRounded",
      },
      {
        label: "OPPO",
        backgroundColor: "transparent",
        borderColor: "red",
        data: [10, 40, 25, 65, 89, 110, 70, 95, 100, 121, 140, 160],
        lineTension: 0,
        pointRadius: 4,
        pointBackgroundColor: "rgba(254,2,0,1)",
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
