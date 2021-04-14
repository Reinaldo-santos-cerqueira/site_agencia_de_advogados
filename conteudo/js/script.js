/*Função do efeito maquina de escrever*/
function typewriter(element){
    const textArray = element.innerHTML.split('');
    element.innerHTML = '';
    textArray.forEach((letra, i) => {
        setTimeout(() => element.innerHTML += letra, 150 * i);
    });
}
const title = document.querySelector('header #opacity_video h1');
typewriter(title);
/*Maquina de escrever acaba aqui */