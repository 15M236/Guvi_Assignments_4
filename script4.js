var req = new XMLHttpRequest();

req.open("GET", "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json")

//req.open("GET","https://restcountries.eu/rest/v2/all")
req.send()

req.onload = function () {
    var data = JSON.parse(req.response)

    for (let i = 0; i < data.length; i++) {
        console.log("country name: " + data[i].name + " region: " + data[i].region + " sub region: " + data[i].subregion + " population: " + data[i].population)
    }
    for (let i = 0; i < data.length; i++) {
        console.log("country Flag: " + data[i].flag)
    }
}