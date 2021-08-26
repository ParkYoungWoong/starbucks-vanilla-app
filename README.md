[![Netlify Status](https://api.netlify.com/api/v1/badges/9f2f756f-e1fc-48d9-9c07-b7d7433d8aaa/deploy-status)](https://app.netlify.com/sites/flamboyant-lumiere-482a1e/deploys)

# ☕ STARBUCKS

스타벅스 랜딩 페이지(홈페이지)를 만드는 예제입니다. <br>
꼭 ⬇ 아래 내용 모두 읽어보시고, ⬆ 완성된 코드도 확인해 보세요!

[master 브랜치로 이동](https://github.com/ParkYoungWoong/starbucks-vanilla-app) <br/>
[signin 브랜치로 이동](https://github.com/ParkYoungWoong/starbucks-vanilla-app/tree/feature/signin)

[DEMO](https://flamboyant-lumiere-482a1e.netlify.app/) <br/>
[DEMO+signin](https://priceless-bhabha-83fc0d.netlify.app/)

![Starbucks](https://raw.githubusercontent.com/ParkYoungWoong/starbucks-vanilla-app/master/_assets/main_screenshot.jpg)

## 문자 인코딩(Character Encoding) 설정

문자가 인코딩되는 방식을 설정합니다.

```html
<meta charset="UTF-8"/>
```

- `UTF-8`: 초성, 중성, 종성으로 구분하여 문자를 작성(권장)
- `EUC-KR`: 하나의 완성된 글자를 인식

## 뷰포트(Viewport) 렌더링 방식 설정

웹페이지가 화면(Viewport)에 표현되는 방식을 설정합니다.<br>
모바일 환경에서 적용됩니다.

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

- `width=device-width`: 화면의 가로 너비를 각 디바이스(Device)의 가로 너비와 동일하게 적용
- `initial-scale=1.0`: 화면의 초기 화면 배율(확대 정도)을 설정
- `user-scalable=no`: 사용자가 디바이스 화면을 확대(`yes`)/축소(`no`)할 수 있는지 설정
- `maximum-scale=1`: 사용자가 화면을 확대할 수 있는 최댓값
- `minimum-scale=1`: 사용자가 화면을 축소할 수 있는 최솟값

## 오픈 그래프(The Open Graph protocol)

웹페이지가 소셜 미디어(페이스북 등)로 공유될 때 우선적으로 활용되는 정보를 지정합니다.

Slack -

![Slack Open Graph example](https://raw.githubusercontent.com/ParkYoungWoong/starbucks-vanilla-app/master/_assets/slack_message_og_example.jpg)

KakaoTalk -

![KakaoTalk Open Graph example](https://raw.githubusercontent.com/ParkYoungWoong/starbucks-vanilla-app/master/_assets/kakao_og_example.jpg)

[더 많은 오픈 그래프 속성 보기](https://ogp.me/)

```html
<meta property="og:type" content="website" />
<meta property="og:site_name" content="Starbucks" />
<meta property="og:title" content="Starbucks Coffee Korea" />
<meta property="og:description" content="스타벅스는 세계에서 가장 큰 다국적 커피 전문점으로, 64개국에서 총 23,187개의 매점을 운영하고 있습니다." />
<meta property="og:image" content="./images/starbucks_seo.jpg" />
<meta property="og:url" content="https://starbucks.co.kr" />
```

- `og:type`: 페이지의 유형(E.g, `website`, `video.movie`)
- `og:site_name`: 속한 사이트의 이름
- `og:title`: 페이지의 이름(제목)
- `og:description`: 페이지의 간단한 설명
- `og:image`: 페이지의 대표 이미지 주소(URL)
- `og:url`: 페이지 주소(URL)

## 트위터 카드(Twitter Cards)

웹페이지가 소셜 미디어(트위터)로 공유될 때 우선적으로 활용되는 정보를 지정합니다.

[더 많은 트위터 카드 보기](https://developer.twitter.com/en/docs/twitter-for-websites/cards/guides/getting-started)

```html
<meta property="twitter:card" content="summary" />
<meta property="twitter:site" content="Starbucks" />
<meta property="twitter:title" content="Starbucks Coffee Korea" />
<meta property="twitter:description" content="스타벅스는 세계에서 가장 큰 다국적 커피 전문점으로, 64개국에서 총 23,187개의 매점을 운영하고 있습니다." />
<meta property="twitter:image" content="./images/starbucks_seo.jpg" />
<meta property="twitter:url" content="https://starbucks.co.kr" />
```

- `twitter:card`: 페이지(카드)의 유형(E.g. `summary`, `player`)
- `twitter:site`: 속한 사이트의 이름
- `twitter:title`: 페이지의 이름(제목)
- `twitter:description`: 페이지의 간단한 설명
- `twitter:image`: 페이지의 대표 이미지 주소(URL)
- `twitter:url`: 페이지 주소(URL)

## Favicon(파비콘, favorites icon)

웹페이지를 나타내는 아이콘, 웹페이지의 로고를 설정합니다.<br>
대부분의 경우 루트 경로에 `favicon.ico` 파일을 위치하면 자동으로 로딩하기 때문에 `<link />` 를 작성할 필요가 없습니다.
`favicon.png` 파일을 사용하려면 다음과 같이 `<link />`를 작성하세요.

> 파비콘 이미지는 루트 경로에 있어야 합니다!

```html
<!--<link rel="shortcut icon" href="favicon.ico" />-->
<link rel="icon" href="./favicon.png" />
```

- `favicon.ico` 64 x 64 (px) 또는 32 x 32 또는 16 x 16
- `favicon.png` 500 x 500 (px)

<img src="https://raw.githubusercontent.com/ParkYoungWoong/starbucks-vanilla-app/master/favicon.png" alt="Starbucks" width="16" />
<img src="https://raw.githubusercontent.com/ParkYoungWoong/starbucks-vanilla-app/master/favicon.png" alt="Starbucks" width="200" />

### .ico 파일 제작

이미지를 업로드하면 손쉽게 `.ico` 파일을 제작할 수 있습니다.

[iconifier.net](https://iconifier.net/)

## Reset.css

각 브라우저의 기본 스타일을 초기화합니다.

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reset-css@5.0.1/reset.min.css" />
```

## Google Fonts

페이지에서 사용할 '나눔고딕' 폰트를 지정합니다.

> 폰트 라이선스를 꼭 확인해야 합니다!

[Google Fonts](https://fonts.google.com/)에서 고른 폰트 파일을 가져옵니다.

```html
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link href="https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700&display=swap" rel="stylesheet" />
```

페이지에 폰트를 적용(CSS 상속)합니다.

```css
body {
    font-family: 'Nanum Gothic', sans-serif;
}
```

## Google Material Icons

[구글에서 제공하는 머터리얼 아이콘](https://material.io/resources/icons/?style=baseline)을 무료로 사용할 수 있습니다.

[Getting started for web](https://material.io/develop/web/getting-started)

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
```

다음과 같이 사용할 수 있습니다.

```html
<div class="material-icons">upload</div>
```

## GSAP & ScrollToPlugin

[GSAP(The GreenSock Animation Platform)](https://greensock.com/gsap/)은 자바스크립트로 제어하는 타임라인 기반의 애니메이션 라이브러리입니다.
[ScrollToPlugin](https://greensock.com/scrolltoplugin/)은 스크롤 애니메이션을 지원하는 GSAP 플러그인입니다.

> 자바스크립트 지식이 뛰어나지 않아도 충분히 사용할 수 있습니다!

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/gsap.min.js" integrity="sha512-IQLehpLoVS4fNzl7IfH8Iowfm5+RiMGtHykgZJl9AWMgqx0AmJ6cRWcB+GaGVtIsnC4voMfm8f2vwtY+6oPjpQ==" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/ScrollToPlugin.min.js" integrity="sha512-nTHzMQK7lwWt8nL4KF6DhwLHluv6dVq/hNnj2PBN0xMl2KaMm1PM02csx57mmToPAodHmPsipoERRNn4pG7f+Q==" crossorigin="anonymous"></script>
```

[.to() 사용법](https://greensock.com/docs/v3/GSAP/gsap.to())
[GSAP Easing](https://greensock.com/docs/v2/Easing)

```js
gsap.to(요소, 시간, 옵션)
// 또는
TweenMax.to(요소, 시간, 옵션)
```

```js
gsap.to(window, .7, {
  scrollTo: 0
});
```

## Swiper

[Swiper](https://swiperjs.com/)는 하드웨어 가속 전환과 여러 기본 동작을 갖춘 현대적인 슬라이드 라이브러리입니다.

[Getting Started With Swiper](https://swiperjs.com/get-started)

> [2021.08.26 Updated]
> Swiper 6버전을 사용합니다.
> 7버전과의 사용법이 다르기 때문에 6버전을 유지합니다.

```html
<!-- in HEAD -->
<link rel="stylesheet" href="https://unpkg.com/swiper@6.8.4/swiper-bundle.min.css" />
<script src="https://unpkg.com/swiper@6.8.4/swiper-bundle.min.js"></script>

<!-- in BODY -->
<div class="swiper-container">
  <div class="swiper-wrapper">
    <div class="swiper-slide">1</div>
    <div class="swiper-slide">2</div>
    <div class="swiper-slide">3</div>
  </div>
</div>
```

[Swiper API](https://swiperjs.com/swiper-api)(옵션)을 확인하세요!

```js
new Swiper(요소, 옵션);
```

```js
new Swiper('.swiper-container', {
  direction: 'vertical', // 수직 슬라이드
  autoplay: true, // 자동 재생 여부
  loop: true // 반복 재생 여부
});
```

## Youtube API

[IFrame Player API](https://developers.google.com/youtube/iframe_api_reference?hl=ko)를 통해 YouTube 동영상을 제어할 수 있습니다.

유튜브 영상이 출력될 위치에 요소를 지정(생성)합니다.

```html
<!-- in HEAD -->
<script defer src="./js/youtube.js"></script>

<!-- in BODY -->
<div id="player"></div>
```

`onYouTubePlayerAPIReady` 함수 이름은 Youtube IFrame Player API에서 사용하는 이름이기 때문에 다르게 지정하면 동작하지 않습니다!<br>
그리고 함수는 전역(Global) 등록해야 합니다!

[플레이어 매개변수(playerVars)](https://developers.google.com/youtube/player_parameters.html?playerVersion=HTML5&hl=ko#Parameters)에서 더 많은 옵션을 확인할 수 있습니다.

```js
// Youtube IFrame API를 비동기로 로드합니다.
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubePlayerAPIReady() {
  // <div id="player"></div>
  new YT.Player('player', {
    videoId: 'An6LvWQuj_8', // 재생할 유튜브 영상 ID
    playerVars: {
      autoplay: true, // 자동 재생 유무
      loop: true, // 반복 재생 유무
      playlist: 'An6LvWQuj_8' // 반복 재생할 유튜브 영상 ID 목록
    },
    events: {
      // 영상이 준비되었을 때,
      onReady: function (event) {
        event.target.mute(); // 음소거!
      }
    }
  });
}
```

## ScrollMagic

[ScrollMagic](https://github.com/janpaepke/ScrollMagic)은 스크롤과 요소의 상호 작용을 위한 자바스크립트 라이브러리입니다.<br>
대표적으로 어떤 요소가 현재 화면에 보이는 상태인지를 확인할 때 사용합니다.

[ScrollMagic API](http://scrollmagic.io/docs/)

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.8/ScrollMagic.min.js"></script>
```

```js
new ScrollMagic
  .Scene({ // 감시할 장면(Scene)을 추가
    triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
    triggerHook: .8 // 화면의 80% 지점에서 보여짐 여부 감시
  })
  .setClassToggle(spyEl, 'show') // 요소가 화면에 보이면 show 클래스 추가
  .addTo(new ScrollMagic.Controller()) // 컨트롤러에 장면을 할당(필수!)
```

## Lodash

[Lodash](https://lodash.com/)는 다양한 유틸리티 기능을 제공하는 자바스크립트 라이브러리입니다.

[Lodash API](https://lodash.com/docs/4.17.15) <br>
[Lodash throttle](https://lodash.com/docs/4.17.15#throttle)

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.20/lodash.min.js" integrity="sha512-90vH1Z83AJY9DmlWa8WkjkV79yfS2n2Oxhsi2dZbIv0nC4E6m5AbH8Nh156kkM7JePmqD6tcZsfad1ueoaovww==" crossorigin="anonymous"></script>
```

## JS Strict Mode

JavaScript를 '엄격 모드'로 사용합니다.<br>
파일 혹은 함수의 최상단에 작성해야 합니다.

```javascript
'use strict';
```

> 'Strict Mode'는 ECMAScript 5 버전에 있는 새로운 기능으로써, 프로그램 또는 함수를 엄격한 운용 콘텍스트 안에서 실행시킬 수 있게끔 합니다. 이 엄격한 콘텍스트는 몇가지 액션들을 실행할 수 없도록 하며, 좀 더 많은 예외를 발생시킵니다.

### 엄격 모드의 장점

- 일반적인 코딩 실수에서 예외 처리
- 안전하지 않은 액션에 대한 예외 처리 (ex: 전역 객체로 접근)
- 혼란스럽거나 제대로 고려되지 않는 기능들을 비활성화

## 랜덤한 숫자를 생성하는 함수

```js
// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}
```

## Main menu in Header

```html
<ul class="main-menu">
  <li class="item">
    <div class="item__name">COFFEE</div>
    <div class="item__contents">
      <div class="contents__menu">
        <ul class="inner">
          <li>
            <h4>커피</h4>
            <ul>
              <li>스타벅스 원두</li>
              <li>스타벅스 비아</li>
              <li>스타벅스 오리가미</li>
            </ul>
          </li>
          <li>
            <h4>에스프레소 음료</h4>
            <ul>
              <li>도피오</li>
              <li>에스프레소 마키아또</li>
              <li>아메리카노</li>
              <li>마키아또</li>
              <li>카푸치노</li>
              <li>라떼</li>
              <li>모카</li>
              <li>리스트레또 비안코</li>
            </ul>
          </li>
          <li>
            <h4>커피 이야기</h4>
            <ul>
              <li>스타벅스 로스트 스팩트럼</li>
              <li>최상의 아라비카 원두</li>
              <li>한 잔의 커피가 완성되기까지</li>
              <li>클로버® 커피 추출 시스템</li>
            </ul>
          </li>
          <li>
            <h4>최상의 커피를 즐기는 법</h4>
            <ul>
              <li>커피 프레스</li>
              <li>푸어 오버</li>
              <li>아이스 푸어 오버</li>
              <li>커피 메이커</li>
              <li>리저브를 매장에서 다양하게 즐기는 법</li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="contents__texture">
        <div class="inner">
          <h4>나와 어울리는 커피 찾기</h4>
          <p>스타벅스가 여러분에게 어울리는 커피를 찾아드립니다.</p>
          <h4>최상의 커피를 즐기는 법</h4>
          <p>여러가지 방법을 통해 다양한 풍미의 커피를 즐겨보세요.</p>
        </div>
      </div>
    </div>
  </li>
  <li class="item">
    <div class="item__name">MENU</div>
    <div class="item__contents">
      <div class="contents__menu">
        <ul class="inner">
          <li>
            <h4>음료</h4>
            <ul>
              <li>콜드 브루</li>
              <li>브루드 커피</li>
              <li>에스프레소</li>
              <li>프라푸치노</li>
              <li>블렌디드 음료</li>
              <li>스타벅스 피지오</li>
              <li>티(티바나)</li>
              <li>기타 제조 음료</li>
              <li>스타벅스 주스(병음료)</li>
            </ul>
          </li>
          <li>
            <h4>푸드</h4>
            <ul>
              <li>베이커리</li>
              <li>케익</li>
              <li>샌드위치 & 샐러드</li>
              <li>따뜻한 푸드</li>
              <li>과일 & 요거트</li>
              <li>스낵 & 미니 디저트</li>
              <li>아이스크림</li>
            </ul>
          </li>
          <li>
            <h4>상품</h4>
            <ul>
              <li>머그</li>
              <li>글라스</li>
              <li>플라스틱 텀블러</li>
              <li>스테인리스 텀블러</li>
              <li>보온병</li>
              <li>액세서리</li>
              <li>커피 용품</li>
              <li>패키지 티(티바나)</li>
            </ul>
          </li>
          <li>
            <h4>카드</h4>
            <ul>
              <li>실물카드</li>
              <li>e-Gift 카드</li>
            </ul>
          </li>
          <li>
            <h4>메뉴 이야기</h4>
            <ul>
              <li>콜드 브루</li>
              <li>스타벅스 티바나</li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="contents__texture">
        <div class="inner">
          <h4 class="new">스타벅스 티바나</h4>
          <p>다양한 찻잎과 향신료 등 개성있는 재료로 새로운 맛과 향의 티를 선보입니다.</p>
        </div>
      </div>
    </div>
  </li>
  <li class="item">
    <div class="item__name">STORE</div>
    <div class="item__contents">
      <div class="contents__menu">
        <ul class="inner">
          <li>
            <h4>매장 찾기</h4>
            <ul>
              <li>퀵 검색</li>
              <li>지역 검색</li>
              <li>My 매장</li>
            </ul>
          </li>
          <li>
            <h4>매장 이야기</h4>
            <ul>
              <li>청담스타</li>
              <li>티바나 인스파이어드 매장</li>
              <li>파미에파크</li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="contents__texture">
        <div class="inner">
          <h4>매장 찾기</h4>
          <p>보다 빠르게 매장을 찾아보세요.</p>
          <h4 class="new">청담스타</h4>
          <p>스타벅스 1,000호점인 청담스타점을 만나보세요.</p>
        </div>
      </div>
    </div>
  </li>
  <li class="item">
    <div class="item__name">RESPONSIBILITY</div>
    <div class="item__contents">
      <div class="contents__menu">
        <ul class="inner">
          <li>
            <h4>지역 사회 참여 활동</h4>
            <ul>
              <li>회망배달 캠페인</li>
              <li>재능기부 카페 소식</li>
              <li>커뮤니티 스토어</li>
              <li>청년인재 양성</li>
              <li>우리 농산물 사랑 캠페인</li>
              <li>우리 문화 지키기</li>
            </ul>
          </li>
          <li>
            <h4>환경보호 활동</h4>
            <ul>
              <li>환경 발자국 줄이기</li>
              <li>일회용 컵 없는 매장</li>
              <li>커피 원두 재활용</li>
            </ul>
          </li>
          <li>
            <h4>윤리 구매</h4>
            <ul>
              <li>윤리적 원두 구매</li>
              <li>공정무역 인증</li>
              <li>커피 농가 지원 활동</li>
            </ul>
          </li>
          <li>
            <h4>글로벌 사회 공헌</h4>
            <ul>
              <li>윤리경영 보고서</li>
              <li>스타벅스 재단</li>
              <li>지구촌 봉사의 달</li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="contents__texture">
        <div class="inner">
          <h4>커피원두 재활용</h4>
          <p>스타벅스 커피 원두를 재활용 해보세요.</p>
        </div>
      </div>
    </div>
  </li>
  <li class="item">
    <div class="item__name">MY STARBUCKS REWARDS</div>
    <div class="item__contents">
      <div class="contents__menu">
        <ul class="inner">
          <li>
            <h4>마이 스타벅스 리워드</h4>
            <ul>
              <li>마이 스타벅스 리워드 소개</li>
              <li>등급 및 혜택</li>
              <li>스타벅스 별</li>
              <li>자주하는 질문</li>
            </ul>
          </li>
          <li>
            <h4>스타벅스 카드</h4>
            <ul>
              <li>스타벅스 카드 소개</li>
              <li>스타벅스 카드 갤러리</li>
              <li>등록 및 조회</li>
              <li>충전 및 이용안내</li>
              <li>분실신고/환불신청</li>
              <li>자주하는 질문</li>
            </ul>
          </li>
          <li>
            <h4>스타벅스 카드 e-Gift</h4>
            <ul>
              <li>스타벅스 카드 e-Gift 소개</li>
              <li>이용안내</li>
              <li>선물하기</li>
              <li>자주하는 질문</li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="contents__texture">
        <div class="inner">
          <h4>스타벅스 카드 등록하기</h4>
          <p>카드 등록 후 리워드 서비스를 누리고 사용내역도 조회해보세요.</p>
        </div>
      </div>
    </div>
  </li>
  <li class="item">
    <div class="item__name">WHAT'S NEW</div>
    <div class="item__contents">
      <div class="contents__menu">
        <ul class="inner">
          <li>
            <h4>프로모션 & 이벤트</h4>
            <ul>
              <li>전체</li>
              <li>스타벅스 카드</li>
              <li>마이 스타벅스 리워드</li>
              <li>온라인</li>
              <li>2017 스타벅스 플래너</li>
            </ul>
          </li>
          <li>
            <h4>새소식</h4>
            <ul>
              <li>전체</li>
              <li>상품 출시</li>
              <li>스타벅스의 문화</li>
              <li>스타벅스 사회공헌</li>
              <li>스타벅스 카드출시</li>
            </ul>
          </li>
          <li>
            <h4>매장별 이벤트</h4>
            <ul>
              <li>일반 매장</li>
              <li>신규 매장</li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="contents__texture">
        <div class="inner">
          <h4>매장별 이벤트</h4>
          <p>스타벅스의 매장 이벤트 정보를 확인 하실 수 있습니다.</p>
          <h4>소셜 스타벅스</h4>
          <p>다양한 스타벅스 SNS 채널을 통해 스타벅스를 만나보세요!</p>
        </div>
      </div>
    </div>
  </li>
</ul>
```
