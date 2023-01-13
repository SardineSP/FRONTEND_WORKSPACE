function test(){
    window.alert("external 테스트");
}

let lastBtn = document.getElementById("lastBtn");

lastBtn.onclick = test;
// 위에서부터 순차적으로 읽으며 진행되는데, 스크립트 파일을 맨 위에 놓으면 일부 파일이 읽히지 않을 수 있어 null값으로 대입됨
