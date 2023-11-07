const tabs = document.querySelectorAll(".tabs-title");
const tabsContent = document.querySelectorAll(".tabs-content > div");

tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {

        tabsContent.forEach(content => content.classList.add("hidden"));
        tabs.forEach(tab => tab.classList.remove("active"));

        tabsContent[index].classList.remove("hidden");
        tabs[index].classList.add("active");
    });
});

const list = document.querySelector(".wrraper-button-of-amazing-work");
const listContent = document.querySelectorAll(".img-of-amazing-work");
const listItems = document.querySelectorAll(".button-of-amazing-work");

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
    listContent.forEach(item => {
        if (item.classList.contains(className)){
            item.style.display = "block"
        } else {
            item.style.display = "none"
        }
    })
}