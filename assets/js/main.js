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
      
        /*==================== CHANGE BACKGROUND HEADER ====================*/ 
            // function scrollHeader(){
            //   const nav = document.getElementById('header')
            //   // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
            //   if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
            // }
            // window.addEventListener('scroll', scrollHeader)
            /*==================== SHOW SCROLL UP ====================*/ 


                /*==================== DARK LIGHT THEME ====================*/ 

            const themeButton = document.getElementById('theme-button')
            const darkTheme = 'dark-theme'
            const iconTheme = 'uil-sun'

            // Previously selected topic (if user selected)
            const selectedTheme = localStorage.getItem('selected-theme')
            const selectedIcon = localStorage.getItem('selected-icon')

            // We obtain the current theme that the interface has by validating the dark-theme class
            const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
            const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

            // We validate if the user previously chose a topic
            if (selectedTheme) {
              // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
              document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
              themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
            }

            // Activate / deactivate the theme manually with the button
            themeButton.addEventListener('click', () => {
                // Add or remove the dark / icon theme
                document.body.classList.toggle(darkTheme)
                themeButton.classList.toggle(iconTheme)
                // We save the theme and the current icon that the user chose
                localStorage.setItem('selected-theme', getCurrentTheme())
                localStorage.setItem('selected-icon', getCurrentIcon())
            })




// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ To get senders messages in My email using emailjs @@@@@@@@@@2@@@@
            function sendEmail() {
              // event.preventDefault(); // Prevent form from reloading the page
          
              // document.getElementById("contact-form").addEventListener("submit", sendEmail);

              emailjs.init("rsLHqIAeGOohtsGrL"); // Initialize EmailJS with public key
          
              const serviceID = "service_v6ut09o";
              const templateID = "template_pobb32n";
          
              // Get form values
              const Params = {
                     name:document.getElementById('name').value,
                     email:document.getElementById('email').value,
                     message:document.getElementById('message').value,
              };
          
              // Send the email using EmailJS
              emailjs.send(serviceID, templateID, Params)
                      .then((response) => {
                        alert("Message sent successfully! ✅");
                        console.log("Success:", response);
                      })
                      .catch((error) => {
                        alert("Failed to send message. ❌");
                        console.error("Error:", error);
                      });
                  }
              // Clear the form fields after successful submission
            // Clear the form fields after sending
            // nameInput.value = "";
            // emailInput.value = "";
            // messageInput.value = "";
             
         