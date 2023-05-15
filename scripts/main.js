let miImage=document.querySelector('img');
miImage.onclick=function(){
    let miSrc=miImage.getAttribute('src');
    if(miSrc==='images/Mozilla_Firefox_logo_2013.svg'){
        miImage.setAttribute('src','images/Firefox_brand_logo,_2019.svg');
    } else {
        miImage.setAttribute('src','images/Mozilla_Firefox_logo_2013.svg');
    }
}
let miBoton = document.querySelector('button');
let miTitulo = document.querySelector('h1');
function estableceNombreUsuario(){
    let miNombre=prompt('Por favor, ingresa tu nombre.');
    localStorage.setItem('nombre', miNombre);
    miTitulo.textContent='Mozilla es genial,' + miNombre;
}
if (!localStorage.getItem('nombre')) {
    estableceNombreUsuario();
}
else {
    let nombreAlmacenado = localStorage.getItem('nombre');
    miTitulo.textContent = 'Mozilla es genial,' + nombreAlmacenado;
}
miBoton.onclick = function() {
    estableceNombreUsuario();
}