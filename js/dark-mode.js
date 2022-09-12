const $html = document.querySelector('html')
const $a = document.querySelector('#switch')

$a.addEventListener('change', function(){
  $html.classList.toggle('dark-mode')
})