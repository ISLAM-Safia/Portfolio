// ==========================toggle style switcher ===========================
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click" , ()=>{
    document.querySelector(".style-switcher").classList.toggle("open");
});

// ===============  hide style switcher on scroll  =====================
window.addEventListener("scroll" , () => {
    if(document.querySelector(".style-switcher").classList.contains("open")){
        document.querySelector(".style-switcher").classList.remove("open");
    }
})

// ===============Thems color ========================
const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color){
    alternateStyles.forEach((style) => {
        if(color === style.getAttribute("title")){
            style.removeAttribute("disabled");
        }else 
        {
            style.setAttribute("disabled" , "true");
        }
    })
}

// ======================== Theme Light and Dark Mood====================

const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click" , ()=>{
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})
window.addEventListener("load" , ()=>{
    if(document.body.classList.contains("dark")){
        dayNight.querySelector("i").classList.add("fa-sun");
    }else {
        dayNight.querySelector("i").classList.add("fa-moon");

    }
})

// const dayNight = document.querySelector(".day-night");

// function toggleDayNightMode() {
//     dayNight.querySelector("i").classList.toggle("fa-sun");
//     dayNight.querySelector("i").classList.toggle("fa-moon");
//     document.body.classList.toggle("dark");
// }

// dayNight.addEventListener("click", () => {
//     setTimeout(toggleDayNightMode, 500); // تأخير لمدة ثانية واحدة (1000 ميلي ثانية)
// });

// window.addEventListener("load", () => {
//     if (document.body.classList.contains("dark")) {
//         dayNight.querySelector("i").classList.add("fa-sun");
//     } else {
//         dayNight.querySelector("i").classList.add("fa-moon");
//     }
// });


// ============Typed Animation==================

// const typed = new Typed('.typing' ,{
//     strings : ['','digital Company' , 'Graphic Design' ,'Social Media', 'Software Development' , 'Online Training' ,
//       'Content Services' ,'Voiceover Services'],
//       typeSpeed : 100 ,
//       backSpeed : 60,
//       backDelay : 1000 ,
//       loop : true
//     });

    
const textArray = [
    'digital Company', 'Graphic Design', 'Social Media', 
    'Software Development', 'Online Training', 'Content Services', 'Voiceover Services'
  ];
  
  const imageArray = [
    'home.jpg', 'img2.jpg', 'image1.jpg', 
    'home.jpg', 'img2.jpg', 'image1.jpg', 'home.jpg',
    'home2.jpg', 'home3.jpg','home4.jpg' ,'home5.jpg'
  ];
  
  let currentImageIndex = 0;
  const homeImg = document.querySelector('.home-img img');
  
  const typed = new Typed('.typing', {
    strings: textArray,
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
    preStringTyped: (currentImageIndex, self) => {
    //   const imagePath = 'images/' + imageArray[arrayPos];
    const imagePath = 'images/' + imageArray[currentImageIndex];
      if (homeImg && imagePath) {
        homeImg.style.opacity = 0; // تقوم بتعديل الشفافية لجعل الصورة غير مرئية
        setTimeout(() => {
          homeImg.src = imagePath;
          homeImg.style.opacity = 1; // تقوم بتعديل الشفافية لجعل الصورة مرئية مرة أخرى بعد التغيير
        }, 800); 
        // تنتظر لبعض الوقت ثم تقوم بتغيير الصورة مع تأثير الانتقال
      }
    //   currentImageIndex++;

    }
  });

// =================Aside ==========================

const   nav = document.querySelector(".nav"),
        navList = nav.querySelectorAll("li"),
        totalNavList = navList.length,
        allSection = document.querySelectorAll(".section"),
        totalSection = allSection.length;
        for(let i =0 ; i < totalNavList ; i++){
            const a =navList[i].querySelector("a");
            a.addEventListener("click" , function(){
                // for(let i=0 ; i <totalSection ; i++){
                //     allSection[i].classList.remove("back-section");
                // }
                removeBackSection();
                for(let j = 0 ; j<totalNavList ; j++){
                    if(navList[j].querySelector("a").classList.contains("active")){
                        addBackSection(j);
                        // allSection[j].classList.add("back-section");
                    }
                    navList[j].querySelector("a").classList.remove("active");
                }
                this.classList.add("active");
                showSection(this);
                if(window.innerWidth < 1200){
                    asideSectionTogglerBtn();
                }
            })
        }
        function removeBackSection(){
                for(let i=0 ; i <totalSection ; i++){
                    allSection[i].classList.remove("back-section");
                }
        }
        function addBackSection(num){
            allSection[num].classList.add("back-section");

        }
        function showSection(element){
            for(let i=0 ; i <totalSection ; i++){
                allSection[i].classList.remove("active");
            }
            const target = element.getAttribute("href").split("#")[1];
            document.querySelector("#" + target).classList.add("active")
        }
        function updateNav(element){
            for(let i =0 ; i<totalNavList ; i++){
                navList[i].querySelector("a").classList.remove("active");
            const target = element.getAttribute("href").split("#")[1];
                if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1]){
                navList[i].querySelector("a").classList.add("active");
                }
            }

        }
        document.querySelector(".hire-me").addEventListener("click" , function(){
            const  sectionIndex = this.getAttribute("data-section-index");
            showSection(this);
            updateNav(this);
            removeBackSection();
            addBackSection(sectionIndex);
        })

        const navTogglerBtn = document.querySelector(".nav-toggler"),
                aside = document.querySelector(".aside");
                navTogglerBtn.addEventListener("click", ()=>{
                    asideSectionTogglerBtn();
                })
                function asideSectionTogglerBtn(){
                    aside.classList.toggle("open");
                    navTogglerBtn.classList.toggle("open");
                    for(let i = 0 ; i<totalSection ; i++){
                        allSection[i].classList.toggle("open");
                    }
                }


                