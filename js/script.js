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

const coursesGrid=document.querySelector('#courses .expertise-grid');
if(coursesGrid && !Array.from(coursesGrid.querySelectorAll('h3')).some(title=>title.textContent.trim()==='Operating Systems Basics')){
  const templateCard=Array.from(coursesGrid.querySelectorAll('.feature-card')).find(card=>card.querySelector('h3')?.textContent.trim()==='Applied AI Foundations');
  if(templateCard){
    const operatingSystemsCard=templateCard.cloneNode(true);
    operatingSystemsCard.querySelector('h3').textContent='Operating Systems Basics';
    operatingSystemsCard.querySelector('p').textContent='Cisco Networking Academy';
    coursesGrid.appendChild(operatingSystemsCard);
  }
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

// Add launchers for the existing Courses & Certifications section only.
const desktopShortcuts=document.querySelector('.desktop-shortcuts');
if(desktopShortcuts && !desktopShortcuts.querySelector('a[href="#courses"]')){
  const booksShortcut=desktopShortcuts.querySelector('a[href="#books"]');
  if(booksShortcut){
    const coursesShortcut=booksShortcut.cloneNode(true);
    coursesShortcut.href='#courses';
    const label=coursesShortcut.querySelector(':scope > span:last-child');
    if(label) label.textContent='Courses & Certifications';
    desktopShortcuts.insertBefore(coursesShortcut,desktopShortcuts.querySelector('a[href="#contact"]'));
  }
}

const taskbarCenter=document.querySelector('.taskbar-center');
if(taskbarCenter && !taskbarCenter.querySelector('a[href="#courses"]')){
  const expertiseTask=taskbarCenter.querySelector('a[href="#expertise"]');
  if(expertiseTask){
    const coursesTask=expertiseTask.cloneNode(true);
    coursesTask.href='#courses';
    coursesTask.setAttribute('aria-label','Courses & Certifications');
    taskbarCenter.insertBefore(coursesTask,taskbarCenter.querySelector('a[href="#work"]'));
  }
}

// Add launchers for the existing Websites & Projects section only.
if(desktopShortcuts && !desktopShortcuts.querySelector('a[href="#projects"]')){
  const portfolioShortcut=desktopShortcuts.querySelector('a[href="#work"]');
  if(portfolioShortcut){
    const projectsShortcut=portfolioShortcut.cloneNode(true);
    projectsShortcut.href='#projects';
    const label=projectsShortcut.querySelector(':scope > span:last-child');
    if(label) label.textContent='Websites & Projects';
    desktopShortcuts.insertBefore(projectsShortcut,desktopShortcuts.querySelector('a[href="#books"]'));
  }
}

if(taskbarCenter && !taskbarCenter.querySelector('a[href="#projects"]')){
  const portfolioTask=taskbarCenter.querySelector('a[href="#work"]');
  if(portfolioTask){
    const projectsTask=portfolioTask.cloneNode(true);
    projectsTask.href='#projects';
    projectsTask.setAttribute('aria-label','Websites & Projects');
    taskbarCenter.insertBefore(projectsTask,taskbarCenter.querySelector('a[href="#books"]'));
  }
}

// Open each existing site section as a Windows-style window without changing its content or design.
const appSections=Array.from(document.querySelectorAll('.app-section'));

if(appSections.length){
  const modalStyle=document.createElement('style');
  modalStyle.textContent=`
    body.window-modal-open{overflow:hidden}
    .app-section.window-modal{
      display:none;
      position:fixed;
      inset:34px 24px 78px;
      z-index:9000;
      padding:0;
      align-items:center;
      justify-content:center;
      pointer-events:none;
    }
    .app-section.window-modal.is-window-open{
      display:flex;
      pointer-events:auto;
    }
    .app-section.window-modal>.content-window{
      width:min(1100px,calc(100vw - 48px));
      max-height:calc(100vh - 112px);
      min-height:0;
      margin:0;
      display:flex;
      flex-direction:column;
    }
    .app-section.window-modal .window-titlebar{
      flex:0 0 auto;
    }
    .app-section.window-modal .window-body{
      flex:1 1 auto;
      min-height:0;
      overflow-y:auto;
      overscroll-behavior:contain;
      -webkit-overflow-scrolling:touch;
    }
    .app-section.window-modal .window-controls span:last-child{
      cursor:pointer;
    }
    @media(max-width:760px){
      .app-section.window-modal{
        inset:8px 6px 66px;
      }
      .app-section.window-modal>.content-window{
        width:calc(100vw - 16px);
        max-height:calc(100vh - 82px);
      }
    }
  `;
  document.head.appendChild(modalStyle);

  appSections.forEach(section=>section.classList.add('window-modal'));

  const closeAllWindows=()=>{
    appSections.forEach(section=>section.classList.remove('is-window-open'));
    document.body.classList.remove('window-modal-open');
  };

  const openWindow=section=>{
    closeAllWindows();
    section.classList.add('is-window-open');
    document.body.classList.add('window-modal-open');
    const body=section.querySelector('.window-body');
    if(body) body.scrollTop=0;
    const windowEl=section.querySelector('.desktop-window');
    if(windowEl) windowEl.classList.add('show');
  };

  document.querySelectorAll('a[href^="#"]').forEach(link=>{
    const href=link.getAttribute('href');
    if(!href || href==='#') return;
    const target=document.querySelector(href);
    if(!target || !target.classList.contains('app-section')) return;

    link.addEventListener('click',event=>{
      event.preventDefault();
      openWindow(target);
    });
  });

  appSections.forEach(section=>{
    const closeButton=section.querySelector('.window-controls span:last-child');
    if(!closeButton) return;

    closeButton.setAttribute('role','button');
    closeButton.setAttribute('aria-label','Close window');
    closeButton.tabIndex=0;

    const closeThisWindow=()=>{
      section.classList.remove('is-window-open');
      if(!appSections.some(item=>item.classList.contains('is-window-open'))){
        document.body.classList.remove('window-modal-open');
      }
    };

    closeButton.addEventListener('click',closeThisWindow);
    closeButton.addEventListener('keydown',event=>{
      if(event.key==='Enter' || event.key===' '){
        event.preventDefault();
        closeThisWindow();
      }
    });
  });
}
