$("#joinname").focusout(function () {

    if ($('#joinname').val() == "") {
        $('#check').text('이름을 입력해주세요.');
        $('#check').css('color', 'red');

    } else {
        $('#check').hide();
    }
});
$("#jointel").focusout(function () {

    if ($('#jointel').val() == "") {
        $('#check').text('전화번호를 입력해주세요.');
        $('#check').css('color', 'red');

    } else {
        $('#check').hide();
    }
});

$(document).ready(()=>{
    $("#btn-Yes").click(function (event) {
        event.preventDefault();
        const findTel = $('#jointel').val()
        const findName = $('#joinname').val()
        const userInfo = getUserInfo(findTel)
        if (userInfo && userInfo.Tel === findTel) {
            alert('아이디는 ' + userInfo.id + ' 입니다.');
            location.href = 'login.html';
        } else {
            alert('존재하지 않는 정보입니다.');

        }
    })

    function getUserInfo(Tel) {
        const localInfo = localStorage.getItem(Tel);

        if (localInfo) {
            return JSON.parse(localInfo);
        } else {
            return null;
        }
    };
})