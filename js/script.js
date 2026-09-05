const nav=document.querySelector('.nav');
const reveals=document.querySelectorAll('section,.card,.work');
window.addEventListener('scroll',()=>{nav.classList.toggle('scrolled',window.scrollY>30)});
const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('reveal','show');observer.unobserve(entry.target)}})},{threshold:.12});
reveals.forEach(el=>observer.observe(el));
const hero=document.querySelector('.hero');
const orb=document.querySelector('.orb');
hero?.addEventListener('pointermove',e=>{const x=(e.clientX/window.innerWidth-.5)*2;const y=(e.clientY/window.innerHeight-.5)*2;if(orb)orb.style.transform=`translate(${x*18}px,${y*12}px) scale(1.02)`});
hero?.addEventListener('pointerleave',()=>{if(orb)orb.style.transform=''});

// Windows 11 navigation: force all five buttons and labels to remain visible.
document.addEventListener('DOMContentLoaded',()=>{
  const links=document.querySelectorAll('.nav .links a');
  const labels=['About','Expertise','Portfolio','My Books','Contact Me'];
  links.forEach((link,i)=>{
    link.style.setProperty('display','inline-flex','important');
    link.style.setProperty('align-items','center','important');
    link.style.setProperty('justify-content','center','important');
    link.style.setProperty('gap','6px','important');
    link.style.setProperty('white-space','nowrap','important');
    link.style.setProperty('font-size','11px','important');
    link.style.setProperty('padding','9px 13px','important');
    let span=link.querySelector('span');
    if(!span){span=document.createElement('span');link.appendChild(span)}
    span.textContent=labels[i]||'';
    span.style.setProperty('display','inline','important');
    span.style.setProperty('font-size','11px','important');
  });
});
