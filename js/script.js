const nav=document.querySelector('.nav');
const reveals=document.querySelectorAll('section,.card,.work');
window.addEventListener('scroll',()=>{nav.classList.toggle('scrolled',window.scrollY>30)});
const observer=new IntersectionObserver(entries=>{entries.forEach((entry,i)=>{if(entry.isIntersecting){entry.target.classList.add('reveal','show');observer.unobserve(entry.target)}})},{threshold:.12});
reveals.forEach(el=>observer.observe(el));
const hero=document.querySelector('.hero');
const orb=document.querySelector('.orb');
hero?.addEventListener('pointermove',e=>{const x=(e.clientX/window.innerWidth-.5)*2;const y=(e.clientY/window.innerHeight-.5)*2;if(orb)orb.style.transform=`translate(${x*18}px,${y*12}px) scale(1.02)`});
hero?.addEventListener('pointerleave',()=>{if(orb)orb.style.transform=''});
