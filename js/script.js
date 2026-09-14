const projectsGrid=document.querySelector('#projects .expertise-grid');
if(projectsGrid && !projectsGrid.querySelector('a[href="https://saaeiddev.github.io/car-diagnostic/"]')){
  const carDiagnosticProject=document.createElement('a');
  carDiagnosticProject.className='feature-card';
  carDiagnosticProject.href='https://saaeiddev.github.io/car-diagnostic/';
  carDiagnosticProject.target='_blank';
  carDiagnosticProject.rel='noopener noreferrer';
  carDiagnosticProject.innerHTML='<span class="feature-icon">🚗</span><h3>AutoScan 3D — Car Diagnostic Simulator</h3><p>Interactive 3D Car Diagnostic Experience ↗</p>';
  projectsGrid.appendChild(carDiagnosticProject);
}

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

// Restore Amir's profile photo using the stable GitHub profile image.
const stableProfilePhoto='https://avatars.githubusercontent.com/u/108151841?v=4';
document.querySelectorAll('.profile-avatar img,.profile-photo').forEach(img=>{
  img.src=stableProfilePhoto;
  img.referrerPolicy='no-referrer';
});
