let scrollToTop = document.getElementById('btn')
window.addEventListener( 'scroll' , scroll_event );
function scroll_event(){
    if(window.pageYOffset > 392){
        scrollToTop.classList.add('active')
    }else	if(window.pageYOffset < 392){
        scrollToTop.classList.remove('active')
    }
}