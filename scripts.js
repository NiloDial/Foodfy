const modalOverlay = document.querySelector(".modal-overlay");
const cards = document.querySelectorAll('.receita');


for (let receita of cards) {
    receita.addEventListener("click", function(){
        modalOverlay.classList.add('active')

        const imagemId = receita.getAttribute("id")
        const modalTitulo = receita.querySelector("h1").textContent
        const modalAutor = receita.querySelector("p").textContent

        modalOverlay.querySelector("img").src = `/image-receitas/${imagemId}`
        modalOverlay.querySelector("#modal-titulo").textContent = modalTitulo
        modalOverlay.querySelector("#modal-autor").textContent = modalAutor

    })
};

closeModal = document.querySelector(".close-modal").addEventListener("click", function() {
    modalOverlay.classList.remove("active")
});

