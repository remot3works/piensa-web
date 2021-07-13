$(window).scroll(function(){
	if( $(this).scrollTop() > 0){
		$('nav').addClass('nav2');
	} else {
		$('nav').removeClass('nav2');
	}
});

const navSlide = () => {
	const burger = document.querySelector('.burger');
	const nav = document.querySelector('.enlaces');
	const navLinks = document.querySelectorAll('.enlaces li');


	burger.addEventListener('click', () => {
        //toggle nav
        nav.classList.toggle('enlaces-active');
        
        //Animate links
        navLinks.forEach((link, index) =>{
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade .4s ease forwards ${index / 7 + 1}s`;
            }
        });
        burger.classList.toggle('toggle');
    });
}

navSlide();