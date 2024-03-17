$("#joinId").focusout(function () {
    if ($('#joinId').val() == "") {
        $('#checks').text('아이디를 입력해주세요.');
        $('#checks').css('color', 'red');
    }
});


$("#joinName").focusout(function () {
    if ($('#joinName').val() == "") {
        $('#checks').text('이름을 입력해주세요.');
        $('#checks').css('color', 'red');
    }
});


$(document).ready(() => {
    $('#btn-Yes').click((e) => {
        // 폼 서브밋 기본 동작 중지
        e.preventDefault();

        // 비밀번호 찾기의 아이디, 이름 가져오기
        const findId = $('#joinId').val();
        const findName = $('#joinName').val();

        // 비밀번호 찾기 로직 구현
        const userInfo = getUserInfo(findId);

        if (userInfo && userInfo.name === findName) {
            // 아이디와 이름이 같아면 비번을 찾아줌
            alert(`비밀번호를 찾았습니다! 찾은 비밀번호는 ${userInfo.pw} 입니다!`);
            location.href = 'login.html';
        } else {
            alert("아이디 또는 이름이 일치하지 않습니다.")
        }
    });

    // 회원 정보 가져오기
    function getUserInfo(id) {
        // localStorage에 있는 id(Key)를 가져옴 
        const localInfo = localStorage.getItem(id);

        if (localInfo) {
            return JSON.parse(localInfo);
        } else {
            return null;
        }
    }
});