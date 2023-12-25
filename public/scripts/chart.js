let myChart = document.getElementById("myChart").getContext("2d");

Charts.default.global.defaultFontFamily = "Lato";
Charts.default.global.defaultFontSize = 18;
Charts.default.global.defaultFontColor = "#777";

const data = [
    {price: Math.floor(Math.random()*5000), interval: 1},
    {price: Math.floor(Math.random()*5000), interval: 2},
    {price: Math.floor(Math.random()*5000), interval: 3},
    {price: Math.floor(Math.random()*5000), interval: 4},
    {price: Math.floor(Math.random()*5000), interval: 5},
    {price: Math.floor(Math.random()*5000), interval: 6},
    {price: Math.floor(Math.random()*5000), interval: 7},
    {price: Math.floor(Math.random()*5000), interval: 8},
    {price: Math.floor(Math.random()*5000), interval: 9},
    {price: Math.floor(Math.random()*5000), interval: 10},
    {price: Math.floor(Math.random()*5000), interval: 11},
    {price: Math.floor(Math.random()*5000), interval: 12},
    {price: Math.floor(Math.random()*5000), interval: 13},
    {price: Math.floor(Math.random()*5000), interval: 14},
    {price: Math.floor(Math.random()*5000), interval: 15},
    {price: Math.floor(Math.random()*5000), interval: 16},
    {price: Math.floor(Math.random()*5000), interval: 17},
    {price: Math.floor(Math.random()*5000), interval: 18},
    {price: Math.floor(Math.random()*5000), interval: 19},
    {price: Math.floor(Math.random()*5000), interval: 20},
    {price: Math.floor(Math.random()*5000), interval: 21},
    {price: Math.floor(Math.random()*5000), interval: 22},
    {price: Math.floor(Math.random()*5000), interval: 23},
    {price: Math.floor(Math.random()*5000), interval: 24},

]

let priceChart = new Chart(myChart, {
    type: "bar",
    data: {
        labels: data.map(row => row.interval),
        datasets: [
            {
                label: "Sell Price",
                data: data.map(row => row.price)
            }
        ]
    }
});
