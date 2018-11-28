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
        .data(data, function(d) {
            return d;
        }) // need the key function to know which elements to remove, otherwise the last element will get removed
        //NOTE: we don't need the text below anymore since it is set in enter
        // .text(function(d) {
        //     return "I'm number " + d + "!";
        // });

    // Enter
    p.enter().append("span")
        .text(function(d) {
            // return "**NEW**" + d + "**NEW**!";
            return d;
        });

    // Exit
    p.exit().remove();
}

var count = 100;

document.getElementById("add-button").addEventListener("click", function() {
    // document.getElementsByTagName("body")[0].append(document.createElement("p"));
    // var newPoint = Math.ceil(Math.random() * 100 + 1000);
    var newPoint = count++;
    // console.log(newPoint);
    data.push(newPoint);
    console.log(data);
    makeChart();
});

document.getElementById("remove-button").addEventListener("click", function() {
    // remove first point
    data.splice(0, 1);
    console.log(data);
    makeChart();
});

// initialize chart
makeChart();