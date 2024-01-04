
function typeWriter(elemento){
    const textoArray = elemento.innerHTML.split("");
    elemento.innerHTML = "";
    textoArray.forEach((letra, i) => {
        setTimeout(function(){
            elemento.innerHTML += letra;
        }, 100 * i);
    });
}

const titulo = document.getElementById('header_wellcome_h3');
typeWriter(titulo);



//date footer
const dateNow = new Date();
const yearFooter = `SIFAFRAMJR &copy ${dateNow.getFullYear()} - Todos os direitos reservados.`;
document.getElementById("footer_year").innerHTML = yearFooter;
