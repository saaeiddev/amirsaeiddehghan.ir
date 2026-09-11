const revealTargets=document.querySelectorAll('.desktop-window,.feature-card,.work,.social-card');

if('IntersectionObserver' in window){
  const observer=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('reveal','show');
        observer.unobserve(entry.target);
      }
    });
  },{threshold:.08});

  revealTargets.forEach(el=>{
    el.classList.add('reveal');
    observer.observe(el);
  });
}else{
  revealTargets.forEach(el=>el.classList.add('show'));
}

const taskLinks=document.querySelectorAll('.task-icon[href^="#"]');
taskLinks.forEach(link=>{
  link.addEventListener('click',()=>{
    taskLinks.forEach(item=>item.classList.remove('active'));
    link.classList.add('active');
  });
});
