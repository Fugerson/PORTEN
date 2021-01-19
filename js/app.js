this.burgerMenuBox = document.querySelector('.bottom-header__burger-box');
this.burgerMenuList = document.querySelector('.headerBottom__right');
this.burgerMenuListBox = document.querySelector('.headerBottom__right-menu');
this.closePopup = document.querySelector('.headerBottom-closePopup');

if(document.documentElement.clientWidth < 950){

    this.closePopup.style.display = "block";
    this.burgerMenuBox.style.display = "block";
    this.burgerMenuList.style.display = "none";
    this.burgerMenuList.classList.add("headerPopup-show");
    this.burgerMenuListBox.classList.add("headerPopup-showUl");

} else {
    this.burgerMenuBox.style.display = "none";
    this.burgerMenuList.style.display = "flex";
    this.burgerMenuList.classList.remove("headerPopup-show");
}
class Main {
    constructor() {
        this.body = document.querySelector('body');

        this.burgerMenuBox = document.querySelector('.bottom-header__burger-box');
        this.burgerMenuList = document.querySelector('.headerBottom__right');
        this.burgerMenuLink = document.querySelectorAll('.menuItemJS');
        this.burgerMenuListBox = document.querySelector('.headerBottom__right-menu');

        this.closePopup = document.querySelector('.headerBottom-closePopup');

        this.showAndHoverPopup = this.showAndHoverPopup.bind(this);

        this.checkPopupMenuHead = true;


        this.attachEvents();
    }


// menu burger
        attachWatchburger = () =>{
            
        }

        showMenuBurger = () => {
            console.log(this.checkPopupMenuHead)
            if(this.checkPopupMenuHead){
                this.burgerMenuList.style.display = "block";
                this.checkPopupMenuHead = false;
            } else {
                this.burgerMenuList.style.display = "none";
                this.checkPopupMenuHead = true;
            }

            
        }

    showAndHoverPopup(ev) {

        // if ( ev.target === document.querySelector('.bottom-header__menu-burger') ) {
        //     this.popup.style.display = "none";
        //     this.burgerMenuBox.style.display = "none";
        // }
        if(document.documentElement.clientWidth < 950){

            console.log(document.documentElement.clientWidth)
            this.closePopup.style.display = "block";
            this.burgerMenuBox.style.display = "flex";
            this.burgerMenuList.style.display = "none";
            this.burgerMenuList.classList.add("headerPopup-show");
            this.burgerMenuListBox.classList.add("headerPopup-showUl");

        } else {
            this.closePopup.style.display = "none";
            this.burgerMenuBox.style.display = "none";
            this.burgerMenuList.style.display = "flex";
            this.burgerMenuList.classList.remove("headerPopup-show");
            this.burgerMenuListBox.classList.remove("headerPopup-showUl");
        }
    }
    eventBurgerButton(e){
        if(document.documentElement.clientWidth < 950){
            this.burgerMenuList.style.display = "none";
            this.checkPopupMenuHead = true;
        }
    }

    attachEvents() {
        window.addEventListener('resize', (ev) => this.showAndHoverPopup(ev));
        this.closePopup.addEventListener('click',  this.showMenuBurger);
        this.burgerMenuBox.addEventListener('click',  this.showMenuBurger);

        for(let i = 0;i < this.burgerMenuLink.length; i++){
            this.burgerMenuLink[i].addEventListener('click', (ev) => this.eventBurgerButton(ev))
        }
    }
}
window.addEventListener('load', () => {
    new Main();
})
