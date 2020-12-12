"use strict";
$(function () {

    google.charts.load('current', { 'packages': ['corechart'] });
    google.charts.setOnLoadCallback(drawChart);


    // Draw the chart and set the chart values
    function drawChart() {
        var exp_data = $('#txt_data').val(), idx = 0;
        console.log(exp_data);
        var tdata = [['Description', 'Expenditure']];
        exp_data = JSON.parse(exp_data);
        for (idx = 0; idx < exp_data.length; idx++) {
            tmp_data = JSON.parse(exp_data[idx]);
            for (const [key, value] of Object.entries(tmp_data)) {
                tdata.push([key, value]);
            };
        };

        var data = google.visualization.arrayToDataTable(tdata);

        // Optional; add a title and set the width and height of the chart
        var options = { 'title': 'Household Expenditure in 2019', 'width': 550, 'height': 400 };

        // Display the chart inside the <div> element with id="piechart"
        var chart = new google.visualization.PieChart(document.getElementById('piechart'));
        chart.draw(data, options);
    }

    // your code goes here
    $('#tb').click(function () {
        console.log("hello");
        $.ajax({
            url: '/get_data', success: function (result) {
                console.log(result)
                $('#my_table').children().remove()
                $('#my_table').append(result);
            }
        });
        return false;
    });

    $('a.js-toggle-trigger').click(function (event) {
        console.log(event.currentTarget.hash);
        if (event.currentTarget.hash === '#page1') {
            $('#page1').show();
            $('#page2').hide();
        } else if (event.currentTarget.hash === '#page2') {
            $('#page2').show();
            $('#page1').hide();
        }
        // $(event.currentTarget.hash).hide();
    });

});