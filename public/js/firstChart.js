const labels = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
];

function generateRandom(min = -100, max = 100) {

  // find diff
  let difference = max - min;

  // generate random number 
  let rand = Math.random();

  // multiply with difference 
  rand = Math.floor( rand * difference);

  // add with min value 
  rand = rand + min;

  return rand;
}

const data = {
  labels: labels,
  datasets: [
    {
      label: 'Red',
      backgroundColor: '#FF684D',
      borderColor: '#FF684D',
      data: [Math.floor(generateRandom()), Math.floor(generateRandom()), Math.floor(generateRandom()), Math.floor(generateRandom()), Math.floor(generateRandom()), Math.floor(generateRandom()), Math.floor(generateRandom())],
    },

    {
      label: 'Blue',
      backgroundColor: '#0E6EFF',
      borderColor: '#0E6EFF',
      data: [Math.floor(generateRandom()), Math.floor(generateRandom()), Math.floor(generateRandom()), Math.floor(generateRandom()), Math.floor(generateRandom()), Math.floor(generateRandom()), Math.floor(generateRandom())],
    },

    {
      label: 'Green',
      backgroundColor: '#00D171',
      borderColor: '#00D171',
      data: [Math.floor(generateRandom()), Math.floor(generateRandom()), Math.floor(generateRandom()), Math.floor(generateRandom()), Math.floor(generateRandom()), Math.floor(generateRandom()), Math.floor(generateRandom())],
    }
  ]
};

const config = {  
  type: 'bar',
  data: data,
  options: {
    responsive: true,
    maintainAspectRatio: true,
  }
};

const myChart = new Chart(
  $('#myChart'),
  config
);