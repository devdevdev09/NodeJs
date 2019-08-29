// // Blocking Code Example
// var fs = require("fs");

// var data = fs.readFileSync("input.txt");

// console.log(data.toString());
// console.log("Program has ended");

//////////////////////////////////////////////////////////

// // Non-Block Code Example
// var fs = require("fs");

// fs.readFile("input.txt", function(err, data){
//     if (err) return console.error(err);
//     console.log(data.toString());
// });

// console.log("Program has ended");

//////////////////////////////////////////////////////////

// // events 모듈 사용
var events = require("events");

// EventEmitter 객체 생성
var eventEmitter = new events.EventEmitter();

// EventHandler 함수 생성
var connectHandler = function connected(){
    console.log("Connnection Succesful");

    // data_received 이벤트를 발생시키기
    eventEmitter.emit("data_received");
}

// connection 이벤트와 connectHandler 이벤트 핸들러를 연동
eventEmitter.on('connection', connectHandler);

// data_received 이벤트와 익명 함수와 연동
// 함수를 변수안에 담는 대신에,  on() 메소드의 인자로 직접 함수를 전달
eventEmitter.on('data_received', function(){
    console.log('Data Received');
});

// connection 이벤트 발생시키기
eventEmitter.emit("connection");

console.log("Program has ended");