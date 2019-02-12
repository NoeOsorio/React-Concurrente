var sender = ["", ""];

module.exports.storeProblem = function(value){
    sender[0]=value;
    console.log(sender)
}

module.exports.storeAlg = function(value){
    sender[1]=value;
    console.log(sender)
}

module.exports.getSender = function(){
    return sender
}