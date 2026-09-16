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

if(projectsGrid && !projectsGrid.querySelector('a[href="https://saaeiddev.github.io/Electric-Car-Motor-/"]')){
  const electricCarMotorProject=document.createElement('a');
  electricCarMotorProject.className='feature-card';
  electricCarMotorProject.href='https://saaeiddev.github.io/Electric-Car-Motor-/';
  electricCarMotorProject.target='_blank';
  electricCarMotorProject.rel='noopener noreferrer';
  electricCarMotorProject.innerHTML='<span class="feature-icon">⚡</span><h3>Electric Car Motor — 3D Interactive Explorer</h3><p>Interactive 3D EV Motor Experience ↗</p>';
  projectsGrid.appendChild(electricCarMotorProject);
}

if(projectsGrid && !projectsGrid.querySelector('a[href="https://saaeiddev.github.io/Programming-Languages-/"]')){
  const programmingLanguagesProject=document.createElement('a');
  programmingLanguagesProject.className='feature-card';
  programmingLanguagesProject.href='https://saaeiddev.github.io/Programming-Languages-/';
  programmingLanguagesProject.target='_blank';
  programmingLanguagesProject.rel='noopener noreferrer';
  programmingLanguagesProject.innerHTML='<span class="feature-icon">☕</span><h3>Programming Languages Café</h3><p>Interactive 3D Programming Languages Experience ↗</p>';
  projectsGrid.appendChild(programmingLanguagesProject);
}

if(projectsGrid && !projectsGrid.querySelector('a[href="https://saaeiddev.github.io/Theater/"]')){
  const theaterProject=document.createElement('a');
  theaterProject.className='feature-card';
  theaterProject.href='https://saaeiddev.github.io/Theater/';
  theaterProject.target='_blank';
  theaterProject.rel='noopener noreferrer';
  theaterProject.innerHTML='<span class="feature-icon">🎭</span><h3>Theater — Interactive 3D Stage</h3><p>Interactive 3D Theater Experience ↗</p>';
  projectsGrid.appendChild(theaterProject);
}

if(projectsGrid && !projectsGrid.querySelector('a[href="https://saaeiddev.github.io/How-AI-Works-/"]')){
  const howAIWorksProject=document.createElement('a');
  howAIWorksProject.className='feature-card';
  howAIWorksProject.href='https://saaeiddev.github.io/How-AI-Works-/';
  howAIWorksProject.target='_blank';
  howAIWorksProject.rel='noopener noreferrer';
  howAIWorksProject.innerHTML='<span class="feature-icon">🤖</span><h3>HOW AI WORKS — Interactive 3D AI Lab</h3><p>Interactive 3D AI Education Experience ↗</p>';
  projectsGrid.appendChild(howAIWorksProject);
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

if(coursesGrid && !Array.from(coursesGrid.querySelectorAll('h3')).some(title=>title.textContent.trim()==='EF SET English Test')){
  const templateCard=Array.from(coursesGrid.querySelectorAll('.feature-card')).find(card=>card.querySelector('h3')?.textContent.trim()==='Applied AI Foundations');
  if(templateCard){
    const efSetCard=templateCard.cloneNode(true);
    efSetCard.querySelector('h3').textContent='EF SET English Test';
    efSetCard.querySelector('p').textContent='C2 Proficient';
    coursesGrid.appendChild(efSetCard);
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

// Add requested contact details to the existing Contact window only.
const contactBody=document.querySelector('#contact .contact-body');
if(contactBody && !contactBody.querySelector('.contact-details-added')){
  const contactDetails=document.createElement('div');
  contactDetails.className='contact-details-added';
  contactDetails.style.cssText='display:grid;gap:10px;justify-content:center;margin:24px auto 4px;max-width:520px;text-align:left';
  contactDetails.innerHTML=`
    <a class="win-button" href="tel:09016979635"><span>📱</span><span><strong>Personal Phone</strong><br>09016979635</span></a>
    <a class="win-button" href="tel:02186054785"><span>☎️</span><span><strong>Office Phone</strong><br>02186054785</span></a>
    <a class="win-button" href="https://wa.me/message/4JHSJN2GV6WVD1" target="_blank" rel="noopener noreferrer"><span>💬</span><span><strong>WhatsApp</strong></span></a>
    <a class="win-button" href="https://t.me/amirsaeiddehghan" target="_blank" rel="noopener noreferrer"><span>✈️</span><span><strong>Telegram</strong><br>t.me/@amirsaeiddehghan</span></a>
  `;
  const mailButton=contactBody.querySelector('.mail-button');
  contactBody.insertBefore(contactDetails,mailButton || null);
}

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
    coursesTask.title='Courses & Certifications';
    taskbarCenter.insertBefore(coursesTask,taskbarCenter.querySelector('a[href="#work"]'));
  }
}

// Add launchers for the existing Websites & Projects section only.
if(desktopShortcuts && !desktopShortcuts.querySelector('a[href="#projects"]')){
  const portfolioShortcut=desktopShortcuts.querySelector('a[href="#work"]');
  if(portfolioShortcut){
    const projectsShortcut=portfolioShortcut.cloneNode(true);
    projectsShortcut.href='#projects';
    projectsShortcut.title='Websites & Projects';
    const icon=projectsShortcut.querySelector('.icon-3d');
    if(icon){
      icon.className='icon-3d win11-icon';
      icon.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="100%" height="100%" aria-hidden="true"><defs><linearGradient id="projects-folder" x2="0" y2="1"><stop stop-color="#ffe792"/><stop offset="1" stop-color="#ffc33b"/></linearGradient></defs><path d="M5 16a4 4 0 0 1 4-4h16l6 6h24a4 4 0 0 1 4 4v30a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4Z" fill="url(#projects-folder)"/></svg>';
    }
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
    projectsTask.title='Websites & Projects';
    const glyph=projectsTask.querySelector('.task-glyph');
    if(glyph){
      glyph.className='task-glyph cyan-glyph';
      glyph.innerHTML='🌐';
    }
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