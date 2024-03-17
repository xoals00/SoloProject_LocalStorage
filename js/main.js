document.addEventListener('DOMContentLoaded', () => {
    // 웹 페이지가 모든 HTML 콘텐츠를 로드하고 해석했을 때 발생하는 이벤트
    // localStorage에 저장한 userInfo중 로그인한 userInfo를 가져옴
    var userInfoString = localStorage.getItem('userInfo');
    console.log(userInfoString);

    // userInfo가 있다면 사용자 정보를 표시
    if (userInfoString) {
        // 가져온 userInfo를 JSON형식에서 JS형식으로 변환
        var userInfo = JSON.parse(userInfoString);
        // HTML에 있는 태그의 ID값을 가져온다.
        var userInfoElement = document.getElementById('user-info');

        userInfoElement.innerHTML = 'Welcome, ' + userInfo.name + '!';

        hideLoginLink();
    } else {
        showLoginLink();
    }
});


$(document).ready(() => {
    // HTML에 있는 태그의 ID값을 가져온다.
    var logoutLink = $('#logout');

    logoutLink.click(function (event) {
        // 이벤트가 기본 동작을 취소할 수 있게 하는 형식
        event.preventDefault();

        // 확인 창 띄우기 (사용자에게 확인 대화상자를 표시하는 함수 (확인 : true, 취소 : false))
        var confirmLogout = confirm('로그아웃 하시겠습니까?');

        if (confirmLogout) {
            // 로그아웃 시 로컬 스토리지의 사용자 정보 제거
            localStorage.removeItem('userInfo');

            // 알림창으로 로그아웃 메시지 표시
            alert('로그아웃 되었습니다.');

            // 로그아웃 후 로그인 페이지로 이동
            window.location.href = '../Project/main.html';
        }
    });
});

// 페이지 로드 후 이미지 슬라이더 시작
$(document).ready(() => {
    startImageSlider();
});

function hideLoginLink() {
    var loginLink = $('#authentication a[href="../Project/login.html"]');
    loginLink.hide();
}

function showLoginLink() {
    var loginLink = $('#authentication a[href="../Project/login.html"]');
    loginLink.show();
}

function startImageSlider() {
    // 이미지 컨테이너 선택
    const sliderContainer = $('#additional-info');

    // 동적으로 이미지 요소 추가
    const imageSources = [
        '../Project/img/LOL1.jpg',
        '../Project/img/LOL2.jpg',
        '../Project/img/LOL3.jpg',
        '../Project/img/LOL4.jpg',
        '../Project/img/LOL5.jpg',
        '../Project/img/faker.jpg',
        '../Project/img/faker2.jpg',
    ];

    // 이미지 엘리먼트들을 저장할 배열
    const images = imageSources.map((source, index) => {
        // 이미지 엘리먼트 생성
        const imgElement = $('<img>', {
            src: source,
            alt: `LOL${index + 1}`,
            class: 'additional-info'
        });

        sliderContainer.append(imgElement);
        return imgElement;
    });

    let currentIndex = 0;

    function showImage(index) {
        // 이미지 숨김
        images.forEach((image) => {
            image.removeClass('slide-in').hide();
        });

        // 현재 이미지 표시
        currentIndex = index;
        images[currentIndex].show().addClass('slide-in');
    }

    // 처음에는 첫 번째 이미지만 표시
    showImage(currentIndex);

    // 일정 시간마다 다음 이미지 표시
    setInterval(() => {
        const nextIndex = (currentIndex + 1) % imageSources.length;
        showImage(nextIndex);
    }, 3000); // 이미지 변경 간격 (3초)
}


