document.querySelectorAll('[data-modal]').forEach(btn=>{
  btn.addEventListener('click',()=>{
    const id=btn.getAttribute('data-modal');
    const el=document.getElementById(id);
    if(el) el.classList.add('open');
  });
});
document.querySelectorAll('.modal').forEach(m=>{
  m.addEventListener('click',e=>{ if(e.target===m) m.classList.remove('open'); });
});
document.querySelectorAll('[data-close]').forEach(b=>{
  b.addEventListener('click',()=> b.closest('.modal')?.classList.remove('open'));
});