const data1 = {
  labels: labels,
  datasets: [{
    label: 'Line chart',
    data: [Math.floor(generateRandom()), Math.floor(generateRandom()), Math.floor(generateRandom()), Math.floor(generateRandom()), Math.floor(generateRandom()), Math.floor(generateRandom()), Math.floor(generateRandom())],
    fill: false,
    borderColor: '#FF684D',
    tension: 0.1
  }]
};

const config1 = {
  type: 'line',
  data: data1,
};

const lineCart = new Chart(
  $('#lineChart'),
  config1
)