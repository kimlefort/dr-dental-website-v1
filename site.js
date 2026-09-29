const root=document.documentElement;
root.classList.add('js');
const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('#main-navigation');
toggle.hidden=false;
function closeMenu(focus=false){toggle.setAttribute('aria-expanded','false');nav.classList.remove('is-open');if(focus)toggle.focus()}
toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')!=='true';toggle.setAttribute('aria-expanded',String(open));nav.classList.toggle('is-open',open)});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&toggle.getAttribute('aria-expanded')==='true')closeMenu(true)});
nav.addEventListener('click',e=>{const a=e.target.closest('a');if(!a)return;closeMenu();const section=document.querySelector(a.hash);section?.setAttribute('tabindex','-1');section?.focus({preventScroll:true})});
matchMedia('(min-width:761px)').addEventListener('change',()=>closeMenu());
const choices=[...document.querySelectorAll('.service-choice')];
const panels=[...document.querySelectorAll('.service-panel')];
const list=document.querySelector('.service-choices');
list.setAttribute('role','tablist');
choices.forEach((choice,i)=>{choice.setAttribute('role','tab');choice.setAttribute('aria-controls',panels[i].id);panels[i].setAttribute('role','tabpanel');panels[i].setAttribute('aria-labelledby',choice.id);panels[i].tabIndex=0;choice.addEventListener('click',e=>{e.preventDefault();select(i)});choice.addEventListener('keydown',e=>{let next=i;if(['ArrowRight','ArrowDown'].includes(e.key))next=(i+1)%choices.length;else if(['ArrowLeft','ArrowUp'].includes(e.key))next=(i-1+choices.length)%choices.length;else if(e.key==='Home')next=0;else if(e.key==='End')next=choices.length-1;else if(e.key===' '){e.preventDefault();select(i);return}else return;e.preventDefault();select(next);choices[next].focus()})});
function select(index){choices.forEach((choice,i)=>{choice.setAttribute('aria-selected',String(index===i));choice.tabIndex=index===i?0:-1;panels[i].hidden=index!==i;panels[i].classList.toggle('is-entering',index===i)})}select(0);
const reduced=matchMedia('(prefers-reduced-motion: reduce)');
const fine=matchMedia('(hover:hover) and (pointer:fine)');
const hero=document.querySelector('.hero'),stage=document.querySelector('.brand-stage');
hero.addEventListener('pointermove',e=>{if(reduced.matches||!fine.matches)return;const r=hero.getBoundingClientRect();stage.style.setProperty('--depth-x',`${(e.clientX/r.width-.5)*12}px`);stage.style.setProperty('--depth-y',`${((e.clientY-r.top)/r.height-.5)*10}px`)},{passive:true});
function resetDepth(){stage.style.removeProperty('--depth-x');stage.style.removeProperty('--depth-y')}
hero.addEventListener('pointerleave',resetDepth);reduced.addEventListener('change',resetDepth);
const dock=document.querySelector('.contact-dock'),slot=document.querySelector('.dock-slot'),locationSection=document.querySelector('.location');
let frame=0;
function positionDock(){frame=0;const slotTop=slot.getBoundingClientRect().top;const bottom=parseFloat(getComputedStyle(dock).bottom)||0;const base=innerHeight-bottom-dock.offsetHeight;const offset=Math.min(0,slotTop-base);dock.style.setProperty('--dock-offset',`${Math.round(offset)}px`);dock.dataset.docked=String(offset<0);if(!reduced.matches){const r=locationSection.getBoundingClientRect();const progress=Math.max(0,Math.min(1,(innerHeight-r.top)/(innerHeight*.7)));locationSection.style.setProperty('--marker-progress',progress);locationSection.style.setProperty('--marker-y',`${progress*35}px`)}}
function schedule(){if(!frame)frame=requestAnimationFrame(positionDock)}
addEventListener('scroll',schedule,{passive:true});addEventListener('resize',schedule);new ResizeObserver(schedule).observe(slot);document.fonts.ready.then(schedule);positionDock();
// Optional approved media can replace the brand stage without changing its layout.
// No remote social assets, invented clinic imagery, or fabricated booking states.
