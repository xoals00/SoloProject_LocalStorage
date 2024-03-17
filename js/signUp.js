var idch = false;

// 중복 아이디 체크
$('#joinIdCh').click(function () {
    let duplicateId = document.getElementById('joinId').value;
    if (duplicateId == "") {
        // 아이디 공란 체크
        alert('아이디를 입력해주세요.')
        $('#joinId').focus();
        return false;
    }

    let localInfo = localStorage.getItem(duplicateId)
    // 로컬스토리지에 정보가 있는지 체크
    if (localInfo == null) {
        idch = true
        alert('아이디 사용 가능!')
    } else {
        alert('아이디가 중복됩니다.')
        $('#joinId').focus();
    }
})

// 비밀번호 일치 체크
$('#checkPw').keyup(function () {
    let pw = document.getElementById('joinPw').value;
    let chPw = document.getElementById('checkPw').value;
    if (pw == "") {
        $('#chPwP').html('비밀번호를 입력해주세요.');
    } else if (pw != chPw) {
        $('#chPwP').html('비밀번호가 일치하지 않습니다.');
    } else {
        $('#chPwP').html('비밀번호 일치');
    }
})
// 비밀번호 재입력부터 값이 채워져있을 경우
$('#joinPw').keyup(function () {
    let pw = document.getElementById('joinPw').value;
    let chPw = document.getElementById('checkPw').value;
    if (chPw != "" && chPw != pw) {
        $('#chPwP').html('비밀번호가 일치하지 않습니다.');
    } else if (chPw != "" && chPw == pw) {
        $('#chPwP').html('비밀번호 일치');
    }
})

// 칸 전부 값이 채워지면 색 입히고 값 빠지면 다시 색 빼기
$('#join').keyup(function () {
    let id = document.getElementById('joinId').value;
    let name = document.getElementById('joinName').value;
    let Tel = document.getElementById('joinTel').value;
    let pw = document.getElementById('joinPw').value;
    let chPw = document.getElementById('checkPw').value;
    if (id != "" && name != "" && pw != "" && chPw != "" && Tel != "") {
        $('#joinButton').css('background-color', '#6A24FE').css('color', '#fff')
    } else {
        $('#joinButton').css('background-color', '#F8F8F8').css('color', '#000')
    }
})

$('.newWin').hover(function () {
    $(this).css('background-color', '#6A24FE').css('color', '#ffffff')
}, function () {
    $(this).css('background-color', '#F8F8F8').css('color', '#000000')
})

// 회원가입
$('#joinButton').click(function () {
    let id = document.getElementById('joinId').value;
    let name = document.getElementById('joinName').value;
    let Tel = document.getElementById('joinTel').value;
    let localTel = localStorage.getItem(Tel); // 로컬에 전화번호 검색
    let pw = document.getElementById('joinPw').value;
    let chPw = document.getElementById('checkPw').value;
    if (id == "") {
        // 아이디 공란 체크
        alert('아이디를 입력해주세요.')
        $('#joinId').focus();
        return false;
    } else if (idch == false) {
        // 아이디 중복 체크
        alert('아이디 중복 체크를 해주세요.')
        $('#joinIdch').focus();
        return false;
    } else if (name == "") {
        // 이름 공란 체크
        alert('이름을 입력해주세요.')
        $('#joinName').focus();
        return false;
    } else if (Tel == "") {
        // 전화번호 공란 체크
        alert('전화번호를 입력해주세요.')
        $('#joinTel').focus();
        return false;
    } else if (Tel.length != 11) {
        // 전화번호 숫자 체크
        alert('전화번호는 11개의 숫자로 입력해주세요.')
        $('#joinTel').focus();
        return false;
    } else if (localTel != null) {
        // 전화번호 중복 체크
        alert('이미 가입된 전화번호입니다.')
        $('#joinTel').focus();
        return false;
    } else if (pw == "") {
        // 비밀번호 공란 체크
        alert('비밀번호를 입력해주세요.')
        $('#joinPw').focus();
        return false;
    } else if (chPw == "") {
        // 비밀번호 재입력 공란 체크
        alert('비밀번호 재입력을 확인해주세요.')
        $('#checkPw').focus();
        return false;
    } else if (pw == chPw) {
        // 비밀번호 일치 체크
        $('#chPwP').html('비밀번호가 일치하지 않습니다.');
    }

    let userInfo = {
        id: id,
        name: name,
        Tel: Tel,
        pw: pw
    }
    let userIT = {
        id: id,
        Tel: Tel
    }
    localStorage.setItem(id, JSON.stringify(userInfo))
    localStorage.setItem(Tel, JSON.stringify(userIT))
    alert('회원가입 성공!')
});