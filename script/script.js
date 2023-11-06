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





