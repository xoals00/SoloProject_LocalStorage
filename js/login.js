var idEle = document.getElementById('userId');
var pwEle = document.getElementById('userPassword');
var loginForm = document.getElementById('login-form');
var rememberCheckbox = document.getElementById('remember-check');

// 페이지 로드 시 저장된 아이디가 있는지 확인하고 있다면 입력란에 채워넣기
var storedUserId = localStorage.getItem('rememberedUserId');
if (storedUserId) {
    idEle.value = storedUserId;
    rememberCheckbox.checked = true;
}

loginForm.addEventListener('submit', (event) => {
    event.preventDefault(); // 폼 제출 기본 동작 방지

    var userId = idEle.value;
    var userPw = pwEle.value;

    // 쿠키에 ID를 등록해 아이디 기억하기 기능을 구현
    if (rememberCheckbox.checked) {
        // 아이디 저장하기 체크된 경우 쿠키에 아이디 저장
        document.cookie = 'rememberedUserId=' + userId + '; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/';

        // 아이디를 localStorage에도 저장
        localStorage.setItem('rememberedUserId', userId);
    } else {
        // 아이디 저장하기 체크 해제된 경우 쿠키 삭제
        document.cookie = 'rememberedUserId=; expires=Thu, 01 Jan 1970 00:00:00 GMT';

        // localStorage에 저장된 아이디 제거
        localStorage.removeItem('rememberedUserId');
    }

    // 저장된 회원가입 정보 가져오기
    var storedUserInfo = localStorage.getItem(userId);

    if (storedUserInfo) {
        // 회원가입 정보가 존재하는 경우 JSON형식을 JS형식으로 변환
        storedUserInfo = JSON.parse(storedUserInfo);

        if (userPw === storedUserInfo.pw) {
            // 비밀번호 일치하는 경우 로그인 성공
            alert('로그인 성공');

            // 로그인 후 사용자 정보를 "userInfo" 키로 저장 (JSON형식으로 저장)
            localStorage.setItem('userInfo', JSON.stringify(storedUserInfo));

            location.href = 'main.html';
        } else {
            // 비밀번호 불일치하는 경우 로그인 실패
            alert('비밀번호가 올바르지 않습니다.');
        }
    } else {
        // 회원가입 정보가 없는 경우 로그인 실패
        alert('아이디가 올바르지 않습니다.');
    }
});
