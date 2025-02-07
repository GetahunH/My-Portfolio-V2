// ==============Menu show y hidden
const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close');

// menu show

if(navToggle){
  navToggle.addEventListener('click',() => {
    navMenu.classList.add('show-menu');
  })
}

//Menu hidden

if(navClose){
  navClose.addEventListener('click',() => {
    navMenu.classList.remove('show-menu');
  })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

const skillsContent = document.getElementsByClassName('skills_content'),
      skillsHeader = document.querySelectorAll('.skills_header')

      function toggleSkills(){
        let itemClass = this.parentNode.className

        for(i=0;i < skillsContent.length;i++){
          skillsContent[i].className = 'skills_content skills_close'
        }
        if(itemClass === 'skills_content skills_close'){
          this.parentNode.className = 'skills_content skills_open'
        }
      }

      skillsHeader.forEach((el)=>{
        el.addEventListener('click',toggleSkills)
      });

      // ################## Services modal ##############3

      const modalViews = document.querySelectorAll('.services_modal')
            modalBtns = document.querySelectorAll('.services_button')
            modalCloses = document.querySelectorAll('.services_modal-close')

      let modal = function (modalClick){
         modalViews[modalClick].classList.add('active-modal')
      }

      //active modal
      modalBtns.forEach((modalBtn,i)=>{
        modalBtn.addEventListener('click',() =>{
          modal(i)
        })
      }) 

      modalCloses.forEach((modalClose)=>{
        modalClose.addEventListener('click',() =>{
          modalViews.forEach((modalView)=>{
            modalView.classList.remove('active-modal')
          })
        })
      }) 

      /*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
        const sections = document.querySelectorAll('section[id]')

        function scrollActive(){
            const scrollY = window.pageYOffset

            sections.forEach(current =>{
                const sectionHeight = current.offsetHeight
                const sectionTop = current.offsetTop - 50;
                sectionId = current.getAttribute('id')

                if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
                    document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
                }else{
                    document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
                }
            })
        }
        window.addEventListener('scroll', scrollActive)

        /*==================== CHANGE BACKGROUND HEADER ====================*/ 
            function scrollHeader(){
              const nav = document.getElementById('header')
              // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
              if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
            }
            window.addEventListener('scroll', scrollHeader)
            /*==================== SHOW SCROLL UP ====================*/ 
                function scrollup(){
                  const scrollup = document.getElementById('scroll-up');
                  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
                  if(window.scrollY >= 560) scrollup.classList.add('show-scroll'); else scrollup.classList.remove('show-scroll')
                }
                window.addEventListener('scroll', scrollup)


                