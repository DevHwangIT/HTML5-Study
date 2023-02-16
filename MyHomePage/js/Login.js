/*
HTML에서 JavaScript 연결 테스트
*/

//call this function after page load

window.onload = function () {
    var logBtn = document.getElementById('InputArea_Log-In_button');
    logBtn.addEventListener('click', function () {
        alert('Try Log-In');
    })
    var cancelBtn = document.getElementById('InputArea_Cancel_button');
    cancelBtn.addEventListener('click', function () {
        alert('Cancel!!');
    })

    //Start Timer
    StartTimer();
}

let timer;

function StartTimer() {
    function clock() {
        const div = document.getElementById('nowTime');
        div.innerText = new Date();
    }
    timer = setInterval(clock, 1000);
}

// '종료' 버튼을 누르면 실행된다.

function StopTimer() {
    clearInterval(timer);
}