var menu = document.querySelector('.fixedpanel')
var touch = document.querySelector('.top')
  var scrollY = function scrll() {
    var supportPageOffset = window.pageXOffset !== undefined;
    var isCSS1Compat = ((document.compatMode || "") === "CSS1Compat");
    return supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop; };
    var rectMenu =  menu.getBoundingClientRect().top + scrollY();
var onscroll = function defil() {
if (scrollY() > rectMenu) {menu.classList.add('fixd');menu.style.width = '100%';menu.style.top = '0px';touch.classList.remove('dnone')
     }else {menu.classList.remove('fixd');touch.classList.add('dnone')}}

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


    var ii = 0;let index = 0
    var slides = document.querySelectorAll('.slideshow-slide')
    document.querySelector('.next-btn').addEventListener('click',()=>{
        if (index<slides.length-2) {slides.forEach((elmts)=>{elmts.style.transform = `translateX(${-ii}%)`;elmts.classList.add('transs')});ii+=100;;index++;} else {ii=0;index=0}})
    document.querySelector('.prev-btn').addEventListener('click',()=>{
      ii-=100;
      if (index>1) {slides.forEach((elmts)=>{elmts.style.transform = `translateX(${-ii}%)`});index--;} else {index=0;ii=0}})

      var compteur = 0;let ind = 0;
      var slide = document.querySelectorAll('.slideshow-slide')
      document.querySelectorAll('.slideshow-slide img').forEach((item)=>{
        item.addEventListener('dragenter',(events)=>{
          if (ind<slide.length-1) {slide.forEach((elmts)=>{elmts.style.transform = `translateX(${-compteur}%)`;elmts.classList.add('transs')});compteur+=100;;ind++;} else {compteur=0;ind=1}})
          item.addEventListener('drag',(events)=>{
          if (events.offsetX<1) {slide.forEach((elmts)=>{elmts.style.transform = `translateX(${-compteur}%)`});ind--;} else {ind=0;compteur=0}
      })  })
