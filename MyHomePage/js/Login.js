/*
HTML에서 JavaScript 연결 테스트
*/

//call this function after page load

window.onload = function () {
    var logBtn = document.getElementById("InputArea_Log-In_button");
    logBtn.addEventListener('click', function () {
        const id = document
            .getElementById("id_Input_Field")
            .value;
        const pw = document
            .getElementById("pw_Input_Field")
            .value;

        if (id == 'Manager' && pw == '') {
            alert('성공적으로 아이디나 비밀번호를 입력하셨습니다.!!');
            //새로운 페이지가 아닌 현재 페이지를 변경시키기
            location.href = 'NoticeBoard.html';
            
            //새로운 페이지 열기 방법
//             var mainUrl = "NoticeBoard.html";
//             var popOption = "top=10, left=10, width=500, height=600, status=no, menubar = no,resizable = no";
//  window.open(mainUrl, popOption);
//         } else {
//             alert('잘못된 아이디나 비밀번호를 입력하셨습니다.!!');
        }
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