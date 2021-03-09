function generatePieChart(positiveValue, negativeValue, field1, field2, pieChartName, titleName) {
  var pie_chart = c3.generate({
      bindto: '#'+pieChartName,
      data: {
          // iris data from R
          columns: [
              [field1, positiveValue],
              [field2, negativeValue],
          ],
          type : 'pie',
          //onclick: function (d, i) { console.log("onclick", d, i); },
          //onmouseover: function (d, i) { console.log("onmouseover", d, i); },
          //onmouseout: function (d, i) { console.log("onmouseout", d, i); }
      },
      pie: {
        label: {
            format: function (value, ratio, id) {
              return d3.format('%')(ratio);
            }
        }
      }
  });
}
