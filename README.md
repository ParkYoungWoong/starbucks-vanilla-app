[스타벅스 예제](https://heropcode.github.io/Starbucks/)

# STARBUCKS

## 연습 준비하기

스타벅스 예제를 작업하기 위해 초기 설정 단계의 저장소로 이동하여 프로젝트 구조를 준비하십시오.

[초기 설정 단계 저장소로 이동](https://github.com/HeropCode/Starbucks/tree/initialization)

## 단계별 작업 확인

### 웹 폰트

'Early Access'를 이용하여 '나눔고딕' 웹 폰트 사용을 선언하세요.

[Google Fonts Early Access](https://fonts.google.com/earlyaccess)

> 'Google Fonts Early Access'는 구글의 정식 지원이 아닌 웹 폰트들(나라별, 한글 폰트 등)을 제공하기 위한 서비스입니다. 

### TOP CARD

#### 상단 카드 영역 토글하기

버튼(`.toggle-top-card`)을 클릭하여 '상단 카드' 영역을 슬라이드 형태로 토글하세요.

#### 토글 버튼에 애니메이션 추가하기

토글 버튼에 마우스 오버 했을 경우, `TweenMax` 라이브러리를 이용하여 애니메이션을 추가하세요.

[GSAP(GreenSock Animation Platform)](https://greensock.com/)

아래의 `CDN Link`를 사용하세요.

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.2/TweenMax.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.2/plugins/ScrollToPlugin.min.js"></script>
```

> `CDN`(Content Delivery Network)이란 접속자가 인터넷상에서 가장 가까운 곳의 서버로 콘텐츠를 전송 받아 트래픽이 특정 서버에 집중되지 않고 각 서버로 분산되도록 하는 기술입니다. 

### HEADER

#### 검색하기

1. 검색 영역에 `focus`, `blur` 이벤트를 적용하세요.
1. 사용자가 단어를 검색하면, 콘솔 창에 '검색어'를 보여줄 수 있도록 하세요.

#### 각 메뉴의 서브 메뉴(MegaMenu) 드롭다운

1. 헤더의 각 메인 메뉴에 마우스를 올렸을 때 서브 메뉴들이 나타날 수 있도록 작업하세요.
1. 각 서브 메뉴 영역의 높이를 알아내어 나타나는 메뉴 영역의 크기를 변경합니다.

### VISUAL

페이지가 준비되면 영역 내 이미지들이 순서대로 한 장씩 나타납니다.(`Fade In`)

### NOTICE LINE

슬라이드를 적용하기 위해, `BXSlider(jQuery)` 플러그인을 사용하세요.

[BXSlider](http://bxslider.com)

1. 각 공지사항이 수직으로 슬라이드 되도록 작업
1. 스타벅스 프로모션의 우측 버튼(토글 버튼)을 사용하여 '프로모션' 섹션을 토글
1. 토글 버튼은 반복적으로 확대/축소되며 '프로모션' 섹션이 나타나면 180도 회전하며 확대/축소가 정지

#### html

아래의 코드를 삽입하세요.

```html
<ul>
    <li><a href="#">크리스마스 & 연말연시 스타벅스 매장 영업시간 변경 안내</a></li>
    <li><a href="#">[당첨자 발표] 2017 스타벅스 플래너 영수증 이벤트</a></li>
    <li><a href="#">스타벅스커피 코리아 애플리케이션 버전 업데이트 안내</a></li>
    <li><a href="#">[당첨자 발표] 뉴이어 전자영수증 이벤트</a></li>
</ul>
```

### PROMOTION

각 프로모션 이미지가 수평으로 슬라이드 되도록 작업합니다.

1. 가운데 이미지를 제외한 나머지 이미지들이 '비활성화'상태로 보이도록 반투명효과를 적용
1. 슬라이드의 내장 기능을 이용하여 일시정지/재생 버튼과 페이지 번호(Pager)를 작업
1. 플러그인의 ['BXSlider Public Methods'](http://bxslider.com/options)를 이용하여 `PREV`, `NEXT` 버튼에 슬라이드 제어 기능을 연결 
1. '프로모션' 섹션이 토글되면서 슬라이드 기능이 오작동할 수 있으니 섹션이 나타날 때, 슬라이드를 새롭게 로딩

#### html

아래의 코드를 삽입하세요.

```html

<ul>
  <li class="first">
    <img src="images/promotion/promotion_slide1.jpg" alt="2017 뉴이어, 스타벅스와 함께 즐겁고 활기차게 시작하세요!">
    <a href="#" class="btn">자세히 보기</a>
  </li>
  <li>
    <img src="images/promotion/promotion_slide2.jpg" alt="기간 내 스타벅스 카드 e-Gift를 3만원 이상 선물 시, 아메리카노 e-쿠폰을 드립니다.">
    <a href="#" class="btn">자세히 보기</a>
  </li>
  <li>
    <img src="images/promotion/promotion_slide3.jpg" alt="뉴이어 푸드와 제조 음료를 세트로 구매 시, 뉴이어 음료 BOGO(1+1) 쿠폰을 드립니다.">
    <a href="#" class="btn">자세히 보기</a>
  </li>
  <li>
    <img src="images/promotion/promotion_slide4.jpg" alt="신년 MD 상품 포함 3만원 이상 구매 고객께 아메리카노(톨사이즈) 쿠폰을 드립니다.">
    <a href="#" class="btn">자세히 보기</a>
  </li>
  <li>
    <img src="images/promotion/promotion_slide5.jpg" alt="2017 DIGITAL LUCKY DRAW 100% 당첨의 행운을 드립니다!">
    <a href="#" class="btn">자세히 보기</a>
  </li>
</ul>
```

### BEANS

1. 아이콘들이 **랜덤**하게 둥둥 떠있도록 작업합니다.
1. 대상에 적용하기 쉽도록 해당 작업을 '함수(function)'으로 선언합니다.

#### 랜덤(Random) 함수

원하는 최소와 최대 값 사이의 랜덤한 수를 반환하는 함수를 작성합니다.(소수점 2자리까지 적용합니다)

```js
function random(min, max) {
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}
```

### SEASON PRODUCT

사이트의 스크롤이 해당 섹션에 도착했을 경우, 섹션의 내용이 애니메이션되도록 작업합니다.

1. 사이트의 스크롤이 어느 위치에 있는지 체크
1. 해당 섹션의 위치와 스크롤 위치를 비교
  - 필요한 각 섹션에 클래스 `section`을 추가하여 체크(`promotion` 섹션은 체크하지 않음)
1. 스크롤의 위치가 섹션 범위 내부일 경우 명령이 반복되지 않도록 조치
1. 스크롤에 따라 현재 섹션이 변경되면 실행할 함수를 작성
1. 각 애니메이션 대상의 출발하는 위치가 다르기 때문에 한번에 제어 가능하도록 조치
1. 'RESERVE', 'PICK YOUR FAVORITE', 'FIND THE STORE' 섹션에서 같은 동작을 사용하기 때문에 동일한 명령을 수행하는 함수로 작업

### RESERVE

### PICK YOUR FAVORITE

### VIEW THE STORE

마우스 오버 시 메달이 수평으로 회전합니다.

1. 메달의 앞/뒤를 구분
1. `backface-visibility`속성으로 요소의 뒷면 숨김
1. `transition` + `transform`속성으로 회전

### FIND THE STORE

### AWARD

요소가 수평으로 슬라이드 됩니다.

1. 총 10개의 이미지 중 5개를 보여주고 1개씩 슬라이드
1. `PREV`, `NEXT` 버튼을 이용하여 좌우 슬라이드 제어

#### html

아래의 코드를 삽입하세요.

```html

<ul>
  <li><a href="#"><img src="images/rest/award_slide1.jpg" alt=""></a></li>
  <li><a href="#"><img src="images/rest/award_slide2.jpg" alt=""></a></li>
  <li><a href="#"><img src="images/rest/award_slide3.jpg" alt=""></a></li>
  <li><a href="#"><img src="images/rest/award_slide4.jpg" alt=""></a></li>
  <li><a href="#"><img src="images/rest/award_slide5.jpg" alt=""></a></li>
  <li><a href="#"><img src="images/rest/award_slide6.jpg" alt=""></a></li>
  <li><a href="#"><img src="images/rest/award_slide7.jpg" alt=""></a></li>
  <li><a href="#"><img src="images/rest/award_slide8.jpg" alt=""></a></li>
  <li><a href="#"><img src="images/rest/award_slide9.jpg" alt=""></a></li>
  <li><a href="#"><img src="images/rest/award_slide10.jpg" alt=""></a></li>
</ul>
```

### FOOTER

### 공통

#### Move to top

`TweenMax`의 `scrollTo` 플러그인을 이용하여 '상단으로 이동' 버튼을 완성하세요.

```js
TweenMax.to(window, .7, { scrollTo: 0 });
```

#### Set scroll

화면 스크롤을 제어하기 위해 `NiceScroll(jQuery)` 플러그인을 사용하세요.

[NiceScroll](https://github.com/inuyaksa/jquery.nicescroll)

```js
$('html').niceScroll({
  cursorcolor: 'rgba(0,0,0,.7)',
  cursorwidth: 10,
  cursorborder: 'none',
  cursorborderradius: 0,
  background: 'none',
  scrollspeed: 60,
  mousescrollstep: 40,
  autohidemode: false,
  zindex: 9999
});
```

