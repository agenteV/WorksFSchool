const bnt1 = document.querySelector('button')
const listaFilmes = document.querySelector('#listaFilmes')

bnt1.addEventListener('click',function clicar(){
    const campoUsuario = document.querySelector('#filmeInput').value
    const itemLista= document.createElement('li')
    listaFilmes.append(itemLista)
    itemLista.innerHTML= campoUsuario
    itemLista.style.backgroundColor = 'green'
    itemLista.classList.add('ativo')
    itemLista.classList.toggle('ativo')
})


