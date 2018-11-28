// d3.selectAll("p").style("color", "white");
// d3.select("body").style("background-color", "black");

var data = [4, 8, 15, 16, 23, 42];

var makeChart = function() {
    // // Combined
    // d3.select("body")
    //     .selectAll("span")
    //     .data(data)
    //     .enter()
    //     .append("span")
    //     .text(function(d) {
    //         console.log("running for " + d);
    //         return "I'm number " + d + "!";
    //     });

    // Update
    var p = d3.select("body")
        .selectAll("span")
        .data(data)
        .text(function(d) {
            return "I'm number " + d + "!";
        });

    // Enter
    p.enter().append("span")
        .text(function(d) {
            return "**NEW**" + d + "**NEW**!";
        });

    // Exit
    p.exit().remove();
}

var count = 0;

document.getElementById("add-button").addEventListener("click", function() {
    // document.getElementsByTagName("body")[0].append(document.createElement("p"));
    // var newPoint = Math.ceil(Math.random() * 100 + 1000);
    var newPoint = count++;
    // console.log(newPoint);
    data.push(newPoint);
    // console.log(data);
    makeChart();
});

document.getElementById("remove-button").addEventListener("click", function() {
    // remove first point
    data.splice(0, 1);
    makeChart();
});

// initialize chart
makeChart();