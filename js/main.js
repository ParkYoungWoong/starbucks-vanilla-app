/**
 * 헤더(Header)의 검색 요소 제어.
 */
// 검색창 요소(.search) 찾기.
const searchEl = document.querySelector('.search')
const searchInputEl = searchEl.querySelector('input')
// 검색창 요소를 클릭하면 실행.
searchEl.addEventListener('click', function () {
  searchInputEl.focus()
})
// 검색창 요소 내부 실제 input 요소에 포커스되면 실행.
searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused')
  searchInputEl.setAttribute('placeholder', '통합검색')
})
// 검색창 요소 내부 실제 input 요소에서 포커스가 해제(블러)되면 실행.
searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused')
  searchInputEl.setAttribute('placeholder', '')
})


const badgeEl = document.querySelector('.badges')
const toTopEl = document.querySelector('#to-top')
window.addEventListener('scroll', _.throttle(function () {
  if (window.scrollY > 500) {
    // HIDE BADGES
    TweenMax.to(badgeEl, .6, {
      opacity: 0,
      onComplete: function () {
        badgeEl.style.display = 'none'
      }
    })
    // SHOW TO-TOP BUTTON
    TweenMax.to(toTopEl, .2, {
      x: 0,
      ease: Power0.easeNone
    })
  } else {
    // SHOW BADGES
    TweenMax.to(badgeEl, .6, {
      display: 'block',
      opacity: 1
    })
    // HIDE TO-TOP BUTTON
    TweenMax.to(toTopEl, .2, {
      x: 100,
      ease: Power0.easeNone
    })
  }
}, 300))

toTopEl.addEventListener('click', function () {
  TweenMax.to(window, .7, {
    scrollTo: 0
  })
})


/**
 * 페이지가 출력되면 이미지가 순서대로 하나씩 나타남.
 */
// 나타날 요소들(.fade-in) 찾기
const fadeEls = document.querySelectorAll('.fade-in')
// 나타날 요소들을 하나씩 반복해서 처리!
fadeEls.forEach(function (fadeEl, index) {
  TweenMax.to(fadeEl, 1, {
    delay: (index + 1) * .7,
    opacity: 1
  })
})


new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true,
  loop: true
})
new Swiper('.promotion .swiper-container', {
  direction: 'horizontal',
  autoplay: {
    delay: 5000
  },
  loop: true,
  spaceBetween: 10,
  slidesPerView: 3,
  centeredSlides: true,
  pagination: {
    el: '.promotion .swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.promotion .swiper-next',
    prevEl: '.promotion .swiper-prev'
  }
})


let showPromotion = true
const promotionEl = document.querySelector('.promotion')
const promotionToggleBtn = document.querySelector('.toggle-promotion')
promotionToggleBtn.addEventListener('click', function () {
  showPromotion = !showPromotion
  if (showPromotion) {
    promotionEl.classList.add('open')
    promotionToggleBtn.classList.add('open')
  } else {
    promotionEl.classList.remove('open')
    promotionToggleBtn.classList.remove('open')
  }
})


// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 '문자 데이터'를,
  // `parseFloat()`을 통해 소수점을 가지는 '숫자 데이터'로 변환
  return parseFloat(
    (Math.random() * (max - min) + min)
      .toFixed(2)
  )
}
// 부유하는(떠 다니는) 요소를 만드는 함수
function floatingObject(selector, minTime, maxTime, delay, size) {
  TweenMax.to(
    selector, // 선택자
    random(minTime, maxTime), // 애니메이션 동작 시간
    {
      delay: random(0, delay), // 얼마나 늦게 애니메이션을 시작할 것인지 지연 시간을 설정.
      y: size, // `transform: translateY(수치);`와 같음.
      repeat: -1, // 몇 번 반복하는지를 설정, `-1`은 무한 반복.
      yoyo: true, // 한번 재생된 애니메이션을 다시 뒤로 재생.
      ease: Power1.easeInOut // Easing 함수 적용.
    }
  )
}
floatingObject('.floating-1', 1.5, 2.5, 1, 15)
floatingObject('.floating-2', 1.5, 2.5, .5, 15)
floatingObject('.floating-3', 1.5, 2.5, 1.5, 20)


const spyEls = document.querySelectorAll('.section.scroll-spy')
spyEls.forEach(function (spyEl) {
  const scene = new ScrollMagic
    .Scene({
      triggerElement: spyEl,
      triggerHook: .8
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller())
})


new Swiper('.awards .swiper-container', {
  direction: 'horizontal',
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    nextEl: '.awards .swiper-next',
    prevEl: '.awards .swiper-prev'
  }
})


const thisYear = document.querySelector('.this-year')
thisYear.textContent = new Date().getFullYear()
