const tabs = document.querySelectorAll(".tabs-title");
const tabsContent = document.querySelectorAll(".tabs-content > div");
const button = document.querySelector(".load-more-of-amazing-work");
const imgWrapper = document.querySelector(".wrraper-img-of-amazing-work");
const list = document.querySelector(".wrraper-button-of-amazing-work");
var listContent = document.querySelectorAll(".img-of-amazing-work");
const listItems = document.querySelectorAll(".button-of-amazing-work");

tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {

        tabsContent.forEach(content => content.classList.add("hidden"));
        tabs.forEach(tab => tab.classList.remove("active"));

        tabsContent[index].classList.remove("hidden");
        tabs[index].classList.add("active");
    });
});




function filter() {
    list.addEventListener("click", event => {
        const targetId = event.target.dataset.id
        const target = event.target

        if (target.classList.contains("button-of-amazing-work")){
            listItems.forEach(listItem => listItem.classList.remove("active"))
            target.classList.add("active")
        }

        switch(targetId){
            case "all":
                getContent("img-of-amazing-work")
                break
            case "Graphic-Design":
                getContent(targetId)
                break 
            case "Web-Design":
                getContent(targetId)
                break
            case "Landing-Pages":
                getContent(targetId)
                break
            case "Wordpress":
                getContent(targetId)
                break
        }
    })
}

filter()

function getContent(className) {
    listContent = document.querySelectorAll(".img-of-amazing-work");

    for (let i = 0; i < imgWrapper.children.length;i++ ){
        if(imgWrapper.children[i].classList.contains(className)){
            imgWrapper.children[i].style.display = "block"
        } else {
            imgWrapper.children[i].style.display = "none"
        }
    }
}


let newImage = [
    "./image/Layer 27.png",
    "./image/Layer 24.png",
    "./image/Layer 25.png",
    "./image/Layer 26.png",
    "./image/Layer 27.png",
    "./image/Layer 28.png",
    "./image/Layer 29.png",
    "./image/Layer 30.png",
    "./image/Layer 31.png",
    "./image/Layer 32.png",
    "./image/Layer 34.png",
    "./image/Layer 24.png",
]

let classForArray = [
    "Graphic-Design",
    "Web-Design",
    "Landing-Pages",
    "Wordpress"
]

function addNewImage() {
    for (let i = 0; i < 12; i++){
        if(newImage.length > 0){
            const img = document.createElement("img")
            img.classList.add("img-of-amazing-work",classForArray[Math.floor(0 + Math.random() * (3 + 1 - 0))])
            img.style.display = "block"
            img.src = newImage.pop()
            imgWrapper.appendChild(img)
        } 
    }
    button.style.display = "none"
}
button.addEventListener("click", addNewImage)

  


$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: true,
  centerMode: true,
  focusOnSelect: true
});

