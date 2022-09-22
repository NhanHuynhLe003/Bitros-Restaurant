
const logo = document.querySelector('.bistros-logo');
const iconLogo = document.querySelector('.bistros-logo i')
const navSelector = document.querySelector('nav')
const navListContainerAnchor = document.querySelectorAll('.nav-list-container ul li a');
const iconOfPages = document.querySelector('.nav-list-container ul li i');
const moonIcon = document.querySelector('.nav-list-container > i');
const inputNav = document.querySelector('.search-bar input');

const textAppear = document.querySelector('.sub-heading1');

/**xu li thanh cuon */
const scrollBarPosition = window.addEventListener('scroll', () => {
    const pst = window.scrollY;
    
    if(pst >= 70){
        logo.className = 'bistros-logo-2';
        iconLogo.className = 'fa-solid fa-utensils icon-logo-2'
        // navListContainerAnchor.style = 'color: #000'
        
        navSelector.style="background-color: #fff;"
        
        navListContainerAnchor.forEach((anchor) => {
            
            anchor.style = 'color: var(--dark)'
            anchor.addEventListener('mouseover', (e) => e.target.style = 'color: var(--orange); border-bottom: 2px solid var(--orange)')
            anchor.addEventListener('mouseout', (e) => e.target.style = 'color: var(--dark)');
            
        })
        iconOfPages.style = 'color: var(--dark)'
        moonIcon.className = 'fa-regular fa-moon dark-color'
        inputNav.style = 'border: 1px solid #eee '
    }
    else {
        logo.className = 'bistros-logo';
        
        navListContainerAnchor.forEach((anchor) => {
            anchor.style = '';
            anchor.addEventListener('mouseover', (e) => e.target.style = 'color: #fff; border-bottom: 2px solid #fff')
            anchor.addEventListener('mouseout', (e) => e.target.style = 'color: #fff')
            
        })

        navSelector.style=''
        iconOfPages.style = ''
        moonIcon.className = 'fa-regular fa-moon'
        inputNav.style = ''
    }
    
});

/**xu li xuat hien chu*/

const textJs = 'Fresh Meals!'

function sleep(ms){
    return new Promise(function(resolve){
        setTimeout(resolve, ms);
    })
}

    sleep(1000)
        .then(function(){
            textAppear.querySelector(`.letter-1`).innerText = textJs[0];
            return sleep(300);
        })
        .then(function(){
            textAppear.querySelector(`.letter-2`).innerText = textJs[1];
            return sleep(300);
        })
        .then(function(){
            textAppear.querySelector(`.letter-3`).innerText = textJs[2];
            return sleep(300);
        })
        .then(function(){
            textAppear.querySelector(`.letter-4`).innerText = textJs[3];
            return sleep(300);
        })
        .then(function(){
            textAppear.querySelector(`.letter-5`).innerText = textJs[4];
            return sleep(300);
        })
        .then(function(){
            textAppear.querySelector(`.letter-6`).innerText = textJs[5];
            return sleep(300);
        })
        .then(function(){
            textAppear.querySelector(`.letter-7`).innerText = textJs[6];
            return sleep(300);
        })
        .then(function(){
            textAppear.querySelector(`.letter-8`).innerText = textJs[7];
            return sleep(300);
        })
        .then(function(){
            textAppear.querySelector(`.letter-9`).innerText = textJs[8];
            return sleep(300);
        })
        .then(function(){
            textAppear.querySelector(`.letter-10`).innerText = textJs[9];
            return sleep(300);
        })
        .then(function(){
            textAppear.querySelector(`.letter-11`).innerText = textJs[10];
            return sleep(300);
        })
        .then(function(){
            textAppear.querySelector(`.letter-12`).innerText = textJs[11];
            return sleep(300);
        })

    