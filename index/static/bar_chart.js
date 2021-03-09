function generateBarChart(rbaPosAvg, rbaNegAvg, rbaNeuAvg) {
  var bar_chart = c3.generate({
      bindto: '#bar_chart',
      data: {
          columns: [
              ['RBA', rbaPosAvg, rbaNegAvg, rbaNeuAvg],
              ['textBlob NLTK', rbaPosAvg, rbaNegAvg, rbaNeuAvg],
              ['Vader NLTK', rbaPosAvg, rbaNegAvg, rbaNeuAvg]
          ],
          type: 'bar'
      },
      bar: {
          width: {
              ratio: 0.5 // this makes bar width 50% of length between ticks
          }
          // or
          //width: 100 // this makes bar width 100px
      }
  });
}


// setTimeout(function () {
//     bar_chart.load({
//         columns: [
//             ['data3', 130, -150, 200, 300, -200, 100]
//         ]
//     });
// }, 1000);
