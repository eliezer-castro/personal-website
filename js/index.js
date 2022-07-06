const txts = document.querySelector('.animate-text').children,
  txtsLen = txts.length
let index = 0
const textInTimer = 3000,
  textOutTimer = 2800

function animateText() {
  for (let i = 0; i < txtsLen; i++) {
    txts[i].classList.remove('text-in', 'text-out')
  }
  txts[index].classList.add('text-in')

  setTimeout(function () {
    txts[index].classList.add('text-out')
  }, textOutTimer)

  setTimeout(function () {
    if (index == txtsLen - 1) {
      index = 0
    } else {
      index++
    }
    animateText()
  }, textInTimer)
}

window.onload = animateText

$(document).scroll(function () {
  var scroll = $(window).scrollTop() - 400
  var amount = -160 + scroll * 0.8
  if (amount < 10) {
    $('.letter').css({ left: amount + 'px' })
  }
})

const text_01 = document.querySelector('.text-01'),
  text_02 = document.querySelector('.text-02'),
  text_03 = document.querySelector('.text-03'),
  img_01 = document.querySelector('.img-01'),
  img_02 = document.querySelector('.img-02'),
  img_03 = document.querySelector('.img-03')

window.addEventListener('mousemove', e => {
  let x = e.offsetX,
    y = e.offsetY

  if (e.target.classList.toString().indexOf('img-01')) {
    img_01.style.left = `${x}px`
    img_01.style.top = `${y}px`
  }
  if (e.target.classList.toString().indexOf('img-02')) {
    img_02.style.left = `${x}px`
    img_02.style.top = `${y}px`
  }
  if (e.target.classList.toString().indexOf('img-03')) {
    img_03.style.left = `${x}px`
    img_03.style.top = `${y}px`
  }
})

text_01.addEventListener('mouseover', () => {
  img_01.style.display = 'block'
})

text_01.addEventListener('mouseleave', () => {
  img_01.style.display = ''
})

text_02.addEventListener('mouseover', () => {
  img_02.style.display = 'block'
})

text_02.addEventListener('mouseleave', () => {
  img_02.style.display = ''
})
text_03.addEventListener('mouseover', () => {
  img_03.style.display = 'block'
})

text_03.addEventListener('mouseleave', () => {
  img_03.style.display = ''
})

// Cursor Animation

const cursor = document.querySelector('#cursor')

let mouse = { x: -100, y: -100 } // place it outside
let pos = { x: 0, y: 0 }
const speed = 0.1

const updateCoordinates = e => {
  mouse.x = e.clientX
  mouse.y = e.clientY
}

window.addEventListener('mousemove', updateCoordinates)

const updatePosition = () => {
  pos.x += (mouse.x - pos.x) * speed
  pos.y += (mouse.y - pos.y) * speed
  cursor.style.transform = 'translate3d(' + pos.x + 'px ,' + pos.y + 'px, 0)'
}

function loop() {
  updatePosition()
  requestAnimationFrame(loop)
}

requestAnimationFrame(loop)

const cursorModifiers = document.querySelectorAll('[cursor-class]')

cursorModifiers.forEach(curosrModifier => {
  curosrModifier.addEventListener('mouseenter', function () {
    const attribute = this.getAttribute('cursor-class')
    cursor.classList.add(attribute)
  })

  curosrModifier.addEventListener('mouseleave', function () {
    const attribute = this.getAttribute('cursor-class')
    cursor.classList.remove(attribute)
  })
})

// Text Animation

// Variables
const el = document.querySelector('.title')

// Variables ~ Widths
let elWidth = el.offsetWidth
let windowWidth = window.innerWidth

// Variables ~ Mouse
let mouseX = 0
let prevMouseX = 0

// Target: value we want to animate to
let skewTarget = 0
let translateTarget = 0

// WithEasing: value we use to animate
let skewWithEasing = 0
let translateWithEasing = 0

// EasingFactor: determines how quick the animation/interpolation goes
let skewEasingFactor = 0.1
let translateEasingFactor = 0.05

// Events
window.addEventListener('mousemove', handleMouseMove)
window.addEventListener('resize', handleWindowResize)

// Functions
function handleMouseMove(e) {
  mouseX = e.pageX
}

function handleWindowResize(e) {
  elWidth = el.offsetWidth
  windowWidth = window.innerWidth
}

function lerp(start, end, factor) {
  return (1 - factor) * start + factor * end
}

function animateMe() {
  // Get difference between current and previous mouse position
  skewTarget = mouseX - prevMouseX
  prevMouseX = mouseX

  // Calc how much we need to translate our el
  translateTarget = ((elWidth - windowWidth) / windowWidth) * mouseX * -1

  // Ease between start and target values (skew)
  skewWithEasing = lerp(skewWithEasing, skewTarget, skewEasingFactor)

  // Limit our skew to a range of 75 degrees so it doesn't "over-skew"
  skewWithEasing = Math.min(Math.max(parseInt(skewWithEasing), -75), 75)

  // Ease between start and target values (translate)
  translateWithEasing = lerp(
    translateWithEasing,
    translateTarget,
    translateEasingFactor
  )

  el.style.transform = `
    translateX(${translateWithEasing}px)
    skewX(${skewWithEasing}deg)
  `

  // RAF
  window.requestAnimationFrame(animateMe)
}

window.requestAnimationFrame(animateMe)

// Color transition white

window.addEventListener('scroll', changeBg)

function changeBg() {
  if (this.scrollY > this.innerHeight / 0.6) {
    document.body.classList.add('transiton')
  } else {
    document.body.classList.remove('transiton')
  }
}
