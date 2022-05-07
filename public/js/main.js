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
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [Math.floor(generateRandom()), Math.floor(generateRandom()), Math.floor(generateRandom()), Math.floor(generateRandom()), Math.floor(generateRandom()), Math.floor(generateRandom()), Math.floor(generateRandom())],
    },

    {
      label: 'Blue',
      backgroundColor: 'rgb(54, 162, 235)',
      borderColor: 'rgb(54, 162, 235)',
      data: [Math.floor(generateRandom()), Math.floor(generateRandom()), Math.floor(generateRandom()), Math.floor(generateRandom()), Math.floor(generateRandom()), Math.floor(generateRandom()), Math.floor(generateRandom())],
    },

    {
      label: 'Green',
      backgroundColor: 'rgb(0,255,0)',
      borderColor: 'rgb(0,255,0)',
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