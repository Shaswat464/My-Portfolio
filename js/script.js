// Typing automation
var typed=new Typed(".typing",{
    strings:["Data scientist","Data Analyst","Software Developer","Web Developer"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})

// Aside 
const nav=document.querySelector(".nav"),
    navList=nav.querySelectorAll("li"),
    totalNavList=navList.length,
    allSection=document.querySelectorAll(".section"),
    totalSection=allSection.length;
    for(let i=0;i<totalNavList;i++){
        const a=navList[i].querySelector("a");
        a.addEventListener("click",function(){
            removeBackSection();
            for(let j=0;j<totalNavList;j++){
                if(navList[j].querySelector("a").classList.contains("active")){
                    addBackSection(j);
                }
                navList[j].querySelector("a").classList.remove("active");
            }
            this.classList.add("active")
            showSection(this);
            if(window.innerWidth<1024){
                asideSectionTogglerBtn();
            }
        })
    }
    function removeBackSection(){
        for(let i=0;i<totalNavList;i++){
            allSection[i].classList.remove("back-section");
        }
    }
    function addBackSection(n){
        allSection[n].classList.add("back-section");
    }
    function showSection(element){
        for(let i=0;i<totalNavList;i++){
            allSection[i].classList.remove("active");
        }
        const target=element.getAttribute("href").split("#")[1];
        document.querySelector("#"+target).classList.add("active")

    }
    function updateNav(element){
        for(let i=0;i<totalNavList;i++){
            navList[i].querySelector("a").classList.remove("active");
            const target=element.getAttribute("href").split("#")[1];
            if(target===navList[i].querySelector("a").getAttribute("href").split("#")[1]){
                navList[i].querySelector("a").classList.add("active");
            }
        }
    }
    document.querySelector(".hire-me").addEventListener("click",function(){
        const sectionIndex=this.getAttribute("data-section-index");
        showSection(this);
        updateNav(this);
        removeBackSection();
        addBackSection(sectionIndex);
    })
    const navTogglerBtn=document.querySelector(".nav-toggler"),
        aside=document.querySelector(".aside");
        navTogglerBtn.addEventListener("click",()=>{
            asideSectionTogglerBtn();
        })
        function asideSectionTogglerBtn(){
            aside.classList.toggle("open");
            navTogglerBtn.classList.toggle("open");
            for(let i=0;i<totalSection;i++){
                allSection[i].classList.toggle("open");
            }
        }

// Submit form

    const scriptURL = 'https://script.google.com/macros/s/AKfycbyJJLsCVoAA5g1uceZxGSwnRLbzqbLdbgSvSls-7rJG-x_n4FVxSayLBqVjiQmJXde6/exec'; // Replace this with the deployed web app URL
    const form = document.forms['submit-to-google-sheet'];
    const msg = document.getElementById("msg");
  
    form.addEventListener('submit', e => {
        e.preventDefault();
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => {
                msg.innerHTML = "Message sent successfully";
                msg.style.color = 'green';
                setTimeout(() => msg.innerHTML = "", 5000);
                form.reset();
            })
            .catch(error => {
                msg.innerHTML = "Error sending message. Please try again!";
                msg.style.color = 'red';
                console.error('Error!', error.message);
            });
    });



