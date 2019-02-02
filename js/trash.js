const elements = document.querySelectorAll('.contains-slide')
const dots = document.querySelectorAll('.dot')
function prevnext(nbr) {
  if ( (nbr<elements.length-1 ) && (nbr != 3)) {
    elements[nbr].classList.add('dnone');elements[nbr+1].classList.remove('dnone');dots[nbr+1].style.border = '2px solid white';dots[nbr].style.border = 'none'
   }else if (nbr = 3) {
    elements.forEach((vis)=>{vis.classList.remove('dnone')});dots[0].style.border = '2px solid white';dots[nbr].style.border = 'none'
    }}

    let i = 0
    setInterval(()=>{
      if (i<elements.length-1) {
        elements[i].classList.add('dnone');i++;dots[i].style.border = '2px solid white';dots[i-1].style.border = 'none'
      } else {
        elements.forEach((vis)=>{vis.classList.remove('dnone')});i=0;dots.forEach((dot)=>{dot.style.border='none'})
      }
    },10000)
