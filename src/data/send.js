
// var sender = {"problema":"PRODUCER_CONSUMER","algoritmo": "MUTEX"}
// var sender = { "problema": "PHILOSOPHERS_DINNER", "algoritmo": "MUTEX" }
var sender = { "problema": "READERS_WRITERS", "algoritmo": "MUTEX" }
// var sender = { "problema": "SLEEPING_BARBER", "algoritmo": "MUTEX" }
// var sender = { "problema": "SMOKERS", "algoritmo": "MUTEX" }


var res = []

//Headers
var hPC = ["Productor", "Consumidor"]
var hFilosofos = ["Filosofo 1", "Filosofo 2", "Filosofo 3", "Filosofo 4", "Filosofo 5"];
var hLE = ["Lector 1", "Lector 2", "Lector 3", "Lector 4","Lector 5", "Escritor 1", "Escritor 2", "Escritor 3"];
var hBarbero = ["Barbero", "Cliente 1", "Cliente 2", "Cliente 3", "Cliente 4", "Cliente 5"];
var hFumadores = ["Arbitro", "Fumador 1", "Fumador 2", "Fumador 3"]


var headers

module.exports.storeProblem = function (value) {
    // sender[0]=value;
    sender.problema = value
    console.log(sender)
}

module.exports.storeAlg = function (value) {
    // sender[1]=value;
    sender.algoritmo = value
    console.log(sender)
}

module.exports.getSender = function () {
    return sender
}

module.exports.storeRes = function (response) {

    res = response;
    switch (sender.problema) {
        case "PRODUCER_CONSUMER":
            headers = hPC;
            break;
        case "PHILOSOPHERS_DINNER":
            headers = hFilosofos;
            break;
        case "READERS_WRITERS":
            headers = hLE;
            break;
        case "SLEEPING_BARBER":
            headers = hBarbero;
            break;
        case "SMOKERS":
            headers = hFumadores;
            break;
        default:
            headers = ["Header"]
            break;
    }

    console.log("Headers:")
    console.log(headers)
    console.log("Response:")
    console.log(res)
    return res;
}

module.exports.getResponse = function () {
    return res
}

module.exports.getHeaders = function () {
    switch (sender.problema) {
        case "PRODUCER_CONSUMER":
            headers = hPC;
            break;
        case "PHILOSOPHERS_DINNER":
            headers = hFilosofos;
            break;
        case "READERS_WRITERS":
            headers = hLE;
            break;
        case "SLEEPING_BARBER":
            headers = hBarbero;
            break;
        case "SMOKERS":
            headers = hFumadores;
            break;
        default:
            headers = ["Header"]
            break;
    }

    return headers
}