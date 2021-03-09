var rbaPosAvg = 0;
var rbaNegAvg = 0;
var rbaNeuAvg = 0;
var textBlobPosAvg = 0.00;
var textBlobNegAvg = 0.00;
var textBlobNeuAvg = 0.00;
var vaderPosAvg = 0.00;
var vaderNegAvg = 0.00;
var vaderNeuAvg = 0.00;
var totalCount = 0;

function fetchData(fileLocation, analysisType) {
  d3.csv(fileLocation).then(function(data) {
    data.filter(function(d, i) {
      //console.log(d.pos);
      if(isNaN(d.pos) == false) {
        var posVal = d.pos;
        posVal = posVal.toFixed(2);
        if (analysisType == 'rba') {
          rbaPosAvg = rbaPosAvg + posVal;
        }
      }

      // switch(analysisType) {
      //   case "rba":
      //     //console.log(typeof d.pos);
      //     //console.log(d.neg);
      //     //console.log(d.neu);
      //     rbaPosAvg = parseFloat(d.pos)+1;
      //     rbaNegAvg = rbaNegAvg + parseFloat(d.neg);
      //     rbaNeuAvg = rbaNeuAvg + parseFloat(d.neu);
      //     break;
      //   case "textBlob":
      //     break;
      //   case "vader":
      //     break;
      // }
      totalCount = totalCount+1;
    });
  }).then(function(data) {
    console.log('totalCount is: '+totalCount);
    console.log(rbaPosAvg);
  });
}

function init(ship) {
  rbaFile = "../rba files/"+ship+"_rba.csv";
  fetchData(rbaFile, "rba");
  //rbaPosAvg = rbaPosAvg / totalCount;
  //rbaNegAvg = rbaNegAvg / totalCount;
  //rbaNeuAvg = rbaNeuAvg / totalCount;
  //console.log('totalCount is: '+totalCount);
  //console.log('rbaAvg: '+rbaPosAvg+' rbaNegAvg: '+rbaNegAvg+' rbaNeuAvg: '+rbaNeuAvg);
  textBlobFile = "";
  //fetchData(textBlobFile, "textBlob");
  vaderFile = "";
  //fetchData(vaderFile, "vader");
}
