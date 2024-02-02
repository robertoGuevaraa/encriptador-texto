function encriptar(){
    let texto = document.getElementById("campo-texto").value;
    let textoEncriptado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/o/gi, "ober").replace(/u/gi,"ufat");
    document.getElementById('textoEncriptado').innerHTML = textoEncriptado;
    
    console.log(textoEncriptado);
    reemplazarImagen();
}

function desencriptar(){
    let texto = document.getElementById("campo-texto").value;
    let textoEncriptado = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ober/gi, "o").replace(/ufat/gi,"u");
    document.getElementById('textoEncriptado').innerHTML = textoEncriptado;
    
    console.log(textoEncriptado);
    reemplazarImagen();
}


function copiarAlPortapapeles() {
    var valorLabel = document.getElementById('textoEncriptado').textContent;
    var elementoTemporal = document.createElement('textarea');
    elementoTemporal.value = valorLabel;
    document.body.appendChild(elementoTemporal);
    elementoTemporal.select();
    elementoTemporal.setSelectionRange(0, 99999);
    document.execCommand('copy');
    document.body.removeChild(elementoTemporal);
    alert('Texto copiado al portapapeles');
}



function reemplazarImagen(){
    let texto = document.getElementById("campo-texto").value;
    if(texto!=""){
        document.getElementById('imagen2').style.display= 'none';
        document.getElementById('titulo').style.display= 'none';
        document.getElementById('texto').style.display= 'none';
    }else{
        alert("Introduce el texto que quieras encriptar");
    }
}