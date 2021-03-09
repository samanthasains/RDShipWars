
function fetchData(fileLocation) {
  // d3.csv("../rba files/varchie_rba.csv").then(function(data) {
  //   console.log(data[0]);
  // });
  d3.csv(fileLocation).then(function(data) {
    console.log(data[0]);
  });
}

function init(ship) {
  rbaFile = "../rba files/"+ship+"_rba.csv";
  fetchData(rbaFile);
}
