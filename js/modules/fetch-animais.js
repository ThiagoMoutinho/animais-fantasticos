import AnimaNumeros from "./anima-numeros.js"

export default function fetchAnimais(url, target) {
    //Cria a div contendo informações com o total de animais
    function createAnimal(animal) {
        const div = document.createElement('div')
        div.classList.add('numero-animal')
        div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`
        return div
    }
    const numerosGrid = document.querySelector(target)
    function preencherAnimais(animal) {
        const divAnimal = createAnimal(animal)
        numerosGrid.appendChild(divAnimal)
    }


    //Puxa os animais através de um arquivo json e cria cada animal utilizando create animal
    async function criarAnimais() {
        try {
            const animaisResponse = await fetch(url)
            const animaisJson = await animaisResponse.json()

            //Após a tranformação de json, ativa as funções para preencher a anima os números.
            animaisJson.forEach(animal => preencherAnimais(animal))
            AnimaNumeros()
        } catch (err) {
            console.log(err)
        }
    }

    return criarAnimais();
}


