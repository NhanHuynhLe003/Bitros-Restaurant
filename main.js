
const logo = document.querySelector('.bistros-logo');
const iconLogo = document.querySelector('.bistros-logo i')
const navSelector = document.querySelector('nav')
const navListContainerAnchor = document.querySelectorAll('.nav-list-container ul li a');
const iconOfPages = document.querySelector('.nav-list-container ul li i');
const moonIcon = document.querySelector('.nav-list-container > i');
const inputNav = document.querySelector('.search-bar input');

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