var rbaPosAvg = 0;
var rbaNegAvg = 0;
var rbaNeuAvg = 0;
var textBlobPolarity = 0;
var textBlobSubjectivity = 0;
var vaderPosAvg = 0.00;
var vaderNegAvg = 0.00;
var vaderNeuAvg = 0.00;
var totalCount = 0;
var analysisType;

// function fetchData(fileLocation, analysisType) {
function fetchData(fileArr) {
  fileArr.forEach(function(fileLocation) {
    if (fileLocation.includes('rba')) {
      analysisType = 'rba';
    } else if (fileLocation.includes('textBlob')) {
      analysisType = 'textBlob';
    } else if (fileLocation.includes('vader')) {
      analysisType = 'vader';
    }
    d3.csv(fileLocation).then(function(data) {
      data.filter(function(d, i) {
          // posVal = posVal.toFixed(2);
          if (analysisType == 'rba') {
            rbaPosAvg = rbaPosAvg + parseFloat(d.pos);
            rbaNegAvg = rbaNegAvg + parseFloat(d.neg);
            rbaNeuAvg = rbaNeuAvg + parseFloat(d.neu);
          } else if (analysisType == 'textBlob') {
            textBlobPolarity = textBlobPolarity + parseFloat(d.polarity);
            textBlobSubjectivity = textBlobSubjectivity + parseFloat(d.subjectivity);
          } else if (analysisType == 'vader') {

          } else {
            // do nothing
          }
        totalCount = totalCount+1;
      });
    }).then(function(data) {
      // console.log('totalCount is: '+totalCount);
      // console.log('PosAvg is: '+rbaPosAvg/totalCount);
      // console.log('negAvg is: '+rbaNegAvg/totalCount);
      // console.log('neuAvg is: '+rbaNeuAvg/totalCount);
      // Get the averages
      if (analysisType == 'rba') {
        rbaPosAvg = rbaPosAvg/totalCount;
        rbaNegAvg = rbaNegAvg/totalCount;
        rbaNeuAvg = rbaNeuAvg/totalCount;
      } else if (analysisType == 'textBlob') {

      } else if (analysisType == 'vader') {

      } else {
        // do nothing
      }
      generateBarChart(rbaPosAvg, rbaNegAvg, rbaNeuAvg);
    });
  })

}

function init(ship) {
  rbaFile = "../rba files/"+ship+"_rba.csv";
  textBlobFile = "../"+ship+"Blob.csv";
  vaderFile = "../"+ship+"_vader.csv";
  var fileArr = [rbaFile, textBlobFile];
  fetchData(fileArr);
  // fetchData(rbaFile, "rba");
  // textBlobFile = "../"+ship+"Blob.csv";
  //fetchData(textBlobFile, "textBlob");
  vaderFile = "";
  //fetchData(vaderFile, "vader");
}
