const textElement = document.querySelector('.text')
const svgElement = document.querySelector('svg')

textElement.style.width = window.innerWidth - svgElement.clientWidth + 'px'
if (window.innerWidth <= 768) {
  textElement.style.height = window.innerHeight - svgElement.clientHeight + 'px'
  textElement.style.alignItems = 'center'
}

window.addEventListener('resize', () => {
  textElement.style.width = window.innerWidth - svgElement.clientWidth + 'px'

  if (window.innerWidth <= 768) {
    textElement.style.height =
      window.innerHeight - svgElement.clientHeight + 'px'
    textElement.style.alignItems = 'center'
  } else {
    textElement.style.height = '100px'
    textElement.style.alignItems = 'flex-end'
  }
})
