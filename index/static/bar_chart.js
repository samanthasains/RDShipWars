var bar_chart = c3.generate({
    bindto: '#bar_chart',
    data: {
        columns: [
            ['RBA', 30, 200, 100, 400, 150, 250],
            ['textBlob', 130, 100, 140, 200, 150, 50],
            ['Vader NLTK', 130, 150, 200, 300, 200, 100]
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

// setTimeout(function () {
//     bar_chart.load({
//         columns: [
//             ['data3', 130, -150, 200, 300, -200, 100]
//         ]
//     });
// }, 1000);
