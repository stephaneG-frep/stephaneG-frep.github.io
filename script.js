(function(){
  var b=document.querySelector('.burger'),m=document.querySelector('.nav ul');
  if(b&&m){b.addEventListener('click',function(){var o=m.classList.toggle('open');b.setAttribute('aria-expanded',o)});
    m.addEventListener('click',function(e){if(e.target.tagName==='A'){m.classList.remove('open');b.setAttribute('aria-expanded','false')}})}
  var els=document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}})},{threshold:0,rootMargin:'0px 0px -40px 0px'});els.forEach(function(e){io.observe(e)})}
  else{els.forEach(function(e){e.classList.add('visible')})}
})();
