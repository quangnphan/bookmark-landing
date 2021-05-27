
document.querySelectorAll(".question").forEach((question)=>
    question.addEventListener("click", () => {
        if(question.parentNode.classList.contains("active")){
            question.parentNode.classList.toggle("active")
        }
        else{
            document.querySelectorAll(".question").forEach(question => question.parentNode.classList.remove("active"))
            question.parentNode.classList.add("active")
        }

}))
const simple = document.querySelector('.simple')
const speedy = document.querySelector('.speedy')
const easy = document.querySelector('.easy')
const tabImg = document.querySelector('.tab-img');
const tabHeader = document.querySelector('.tab-header');
const tabParagraph = document.querySelector('.tab-paragraph');

simple.addEventListener('click',(e)=>{
    simple.classList.add('current');
    speedy.classList.remove('current');
    easy.classList.remove('current');
    tabImg.src = "images/illustration-features-tab-1.svg";
    tabHeader.innerHTML = "Bookmark in one click";
    tabParagraph.innerHTML = "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.";
    e.preventDefault();
})
speedy.addEventListener('click',(e)=>{
    speedy.classList.add('current');
    simple.classList.remove('current');
    easy.classList.remove('current');
    tabImg.src = "images/illustration-features-tab-2.svg";
    tabHeader.innerHTML = "Intelligent search";
    tabParagraph.innerHTML ="Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks."
    e.preventDefault();
})
easy.addEventListener('click',(e)=>{
    easy.classList.add('current');
    speedy.classList.remove('current');
    simple.classList.remove('current');
    tabImg.src = "images/illustration-features-tab-3.svg";
    tabHeader.innerHTML = "Share your bookmarks";
    tabParagraph.innerHTML = "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button."
    e.preventDefault();
})

const hbg = document.querySelector('.hbg');
const closeicon = document.querySelector('.close');

hbg.addEventListener('click',()=>{
    hbg.parentNode.parentNode.classList.add('mob-active');
})
closeicon.addEventListener('click',()=>{
    hbg.parentNode.parentNode.classList.remove('mob-active');
})