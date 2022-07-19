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

$(window)
  .scroll(function () {
    var $window = $(window),
      $body = $('body'),
      $panel = $('.panel')
    var scroll = $window.scrollTop() + $window.height() / 4

    $panel.each(function () {
      var $this = $(this)
      if (
        $this.position().top <= scroll &&
        $this.position().top + $this.height() > scroll
      ) {
        $body.removeClass(function (index, css) {
          return (css.match(/(^|\s)color-\S+/g) || []).join('')
        })
        $body.addClass('color-' + $(this).data('color'))
      }
    })
  })
  .scroll()

const root = document.documentElement
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue(
  '--marquee-elements-displayed'
)
const marqueeContent = document.querySelector('ul.marquee-content')

root.style.setProperty('--marquee-elements', marqueeContent.children.length)

for (let i = 0; i < marqueeElementsDisplayed; i++) {
  marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true))
}
