const ratio = .1
  const options = { root:null, rootMargin:'0px', threshold:ratio }
  const toobserve = function(entries,observer) { entries.forEach(function(entry) {
     if (entry.intersectionRatio > ratio) {
        entry.target.classList.add('reveal-visible')
        let i=0;let x=0;let y=0;let xy=0
        setInterval(()=>{if (i<36) {document.querySelector('.js-35').innerHTML=i;i++;}},200)
        setInterval(()=>{if (x<13) {document.querySelector('.js-12').innerHTML=x;x++;}},200)
        setInterval(()=>{if (y<201) {document.querySelector('.js-200').innerHTML=y;y++;}},20)
        setInterval(()=>{if (xy<1201) {document.querySelector('.js-1200').innerHTML=xy;xy++;}},10)
          slides.forEach((elmt)=>{
            elmt.style.transform = `translateX(-100%)`;elmt.classList.add('transs');
          })
      }else{ entry.target.classList.remove('reveal-visible'); slides.forEach((elmt)=>{
        elmt.style.transform = `translateX(0)`
      }) } });
     }
 const observer = new IntersectionObserver(toobserve,options)
 document.querySelectorAll('.reveal').forEach(function(r) { observer.observe(r) })

document.querySelector('.plusmoins').addEventListener('click',()=>{
  let isVisible = document.querySelector('.menu-li').style.display;
  let ul_link = document.querySelector('.menu-li')
  if ((isVisible == "") || (isVisible == "none")) {
    ul_link.style.display = "block"; document.querySelector('.plusmoins').classList.add('fa-minus')
  } else {
    ul_link.style.display = 'none'; document.querySelector('.plusmoins').classList.remove('fa-minus')
  }
})
document.addEventListener('click',(ev)=>{
  target = ev.target
  if ((target == onglet_btn) || (ev.path[2] == onglet_btn ) || (target == plusmoins)) {
    menu_outed.classList.add('dblockI')
  } else {
    menu_outed.classList.remove('dblockI')
  }
})
