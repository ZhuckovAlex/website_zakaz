const iconMenu=document.querySelector('.header__menu-icon');
	const menuBody=document.querySelector('.header__menu');
	if(iconMenu){      
		iconMenu.addEventListener("click",function(e){
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	});
	}
/*---------------------------------*/
const architecturalBureau = document.querySelector('.architectural-bureau');
const services = document.querySelector('.services');
const projects = document.querySelector('.projects');
const advantages = document.querySelector('.advantages');

const scrollItems = document.querySelectorAll('section,footer');

const scrollAnimation = () => {
    let windowCenter = /*(window.innerHeight / 6) +*/ window.scrollY + 200;
  
    scrollItems.forEach(el => {
    	
    	let scrolloffset = el.offsetTop;/*+ (el.offsetHeight /6)*/
    	
    	if(windowCenter >= scrolloffset){
    		el.classList.add('animation-class');
    	} else {
    		el.classList.remove('animation-class');
    	}
    });

}
scrollAnimation();
window.addEventListener('scroll',() => {
	scrollAnimation();
});

/*---------анимация иконок и заголовков-------*/

const servicesItem = document.querySelectorAll('.services__item');


let iconAnimation = () => {
let windowCenter = window.scrollY + 100;	

servicesItem.forEach(el => {
	    let servicesImg = el.querySelector('.services__svg');
	    let servicesTitle = el.querySelector('.services__item-title');
		let scrolloffset = el.offsetTop;
   	  
    	if(windowCenter >= scrolloffset){
            servicesTitle.classList.add('animation-class');
    		servicesImg.classList.add('animation-class');
    	} else {
    		servicesTitle.classList.remove('animation-class');
    		servicesImg.classList.remove('animation-class');
    	}
});
}
iconAnimation();
window.addEventListener('scroll',() => {
	iconAnimation();
});
/*-------анимация квадрата-------------*/
const cube = document.querySelectorAll('.rect');
const time = 4000;
const step = 100;

function outNum(num, elem){
	
	let l = document.querySelector('.' + elem);
	let n = 0; 
	let t = Math.round(time/(num/step));
	let interval = setInterval(() => {
		n = n + step;
		if (n == num){
			clearInterval(interval);
		}
		l.innerHTML = n;
	},
t);
}
let cubeAnimation = () => {
let windowCenter = window.scrollY + 300;
let scrolloffset = advantages.offsetTop;

        if(windowCenter >= scrolloffset ){
        	outNum(1000, 'number1');
             outNum(500, 'number2');
             outNum(400, 'number3'); 
           cube.forEach(el => {
          
                el.classList.add('animation-class');
                
           }); 

        } else {
    		 cube.forEach(el => {
              el.classList.remove('animation-class');
           	
           });
        
}
}

cubeAnimation();
window.addEventListener('scroll',() => {
	cubeAnimation();

});

/*-------------------------------------*/

const modal = document.querySelector('.consultation__popup');
const consultationPopupBtn = modal.querySelector('.consultation__popup-btn');
const popupButton = modal.querySelector('.consultation__popup-button');
const consultationButton = document.querySelector('.consultation__button');
const body = document.querySelector('body');

//ф-ия открытия модального окна:
const openModal = () => {
    setTimeout(() => {
        modal.classList.remove('popup-exit');
        modal.classList.add('popup-enter');
        body.classList.add('overflow');

    }, 100);
}

//ф-ия закрытия модального окна:
const closeModal = () => {
	 setTimeout(() => {
    modal.classList.remove('popup-enter');
    modal.classList.add('popup-exit');
     body.classList.remove('overflow');
      }, 100);
}
//Открытие:
consultationButton.addEventListener('click', () => {
    openModal();
});


/*--закрытие--*/
consultationPopupBtn.addEventListener('click', (e) =>  {
e.preventDefault();	
	closeModal();
});


popupButton.addEventListener('click', (e) => {
  
    closeModal();
});