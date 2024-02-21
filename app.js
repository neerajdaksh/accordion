const container = document.querySelector(".container");


// get json data
const getData = async () => {
    try {
        const response = await fetch('./data.json');
        const data = await response.json();
        if (data) {
            createAccordion(data.questions);
        }
    } catch (error) {
        console.log(error);
    }

}






const createAccordion = (data) => {
    container.innerHTML = data.map(({ question_text, long_answer }) => `
    <div class="accordion-item">
            <div class="accordion-title">
              <h3>${question_text}</h3>
              <i class="ri-arrow-up-line"></i>
            </div>
            <div class="accordion-content">
              <p>${long_answer}</p>
            </div>
          </div>
     `).join(" ");

    getAllAccordionTitle(container.querySelectorAll(".accordion-title"));

}



// toggle active class function
function getAllAccordionTitle(allAccordionTitle) {

    allAccordionTitle.forEach((currentItem => {
        currentItem.addEventListener("click", () => {
            if (currentItem.classList.contains("active")) {
                currentItem.classList.remove("active");
            } else {

                const getAlreadyActiveClasses = container.querySelectorAll(".accordion-title");

                getAlreadyActiveClasses.forEach((currentActiveItem) => {
                    currentActiveItem.classList.remove("active");
                })

                currentItem.classList.add("active");
            }
        });

    }));

}











window.addEventListener("load", function () {
    getData();
})