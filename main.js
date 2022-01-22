const navslide = () => {
    const nitin = document.querySelector('.nitin');
    const nav = document.querySelector('.navbar');
    const navlinks = document.querySelectorAll('.navbar li ');
    nitin.addEventListener('click',() => {
        nav.classList.toggle('nav-active');
        navlinks.forEach((link,index) => {
      if(link.style.animation){
        link.style.animation = '';
      }else{
        link.style.animation = 'navlinkfade 0.5s ease forward  ${index / 7 + 1.5}s';
      }
        })
    
    });
    
}
navslide()