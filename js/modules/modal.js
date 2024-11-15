export default class Modal {
    constructor(botaoAbrir, botaoFechar, containerModal) {
        this.botaoAbrir = document.querySelector(botaoAbrir)
        this.botaoFechar = document.querySelector(botaoFechar)
        this.containerModal = document.querySelector(containerModal)
    }

    toggleModal(event) {
        event.preventDefault()
        this.containerModal.classList.toggle('ativo')
    }

    eventToggleModal(event) {
        console.log(this)
        event.preventDefault()
        this.toggleModal()
    }
    clickForaModal(event) {
        if(event.target === this) {
            this.toggleModal(event)
        }
    }

    addModalEvents() {
        this.botaoAbrir.addEventListener('click', this.eventToggleModal)
        this.botaoFechar.addEventListener('click', this.eventToggleModal)
        this.containerModal.addEventListener('click', this.clickForaModal)
    }

    init() {
        if(this.botaoAbrir && this.botaoFechar && this.containerModal) {
            this.addModalEvents()
        }
    }
}







