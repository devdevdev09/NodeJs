const test1 = function(){
    return "exam.test1";
}

const test2 = function(){
    return "exam.test2";
}

const test3 = function(){
    console.log("exam-test3 console.log()");
}

const test4 = function(msg){
    console.log("exam-test4 console.log( call : " + msg + ")");
}

module.exports = {
    test3,
    test4
}

module.exports.callTest1 = test1;
module.exports.callTest2 = test2;