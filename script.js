function mostrarDatos(){
  let nombre = document.getElementById("nombre").value.trim();
  let edad = document.getElementById("edad").value.trim();
   let correo = document.getElementById("correo").value.trim();
  let grupo = document.getElementById("grupo").value.trim();
   let  telefono = document.getElementById("telefono").value.trim();
   let comentario= document.getElementById("comentario").value.trim();
  let resultado = document.getElementById("resultado");

  if(nombre === "" || edad === ""){
    resultado.innerHTML = "⚠️ Por favor completa todos los campos.";
    resultado.style.background = "#ffe0d6";
    resultado.style.border = "2px solid #e34f26";
  } else {
    resultado.innerHTML =
      "<strong>✅ Datos capturados correctamente:</strong><br><br>" +
      "Nombre: " + nombre + "<br>" +
      "Edad: " + edad + " años";
      "Correo" + correo + "<br>" +
      "Grupo: " + grupo + " grupo";
      "Telefono: " + telefono + " numeros ";
      "Comentario: " + comentario + "<br>" +

    resultado.style.background = "#e8ffe8";
    resultado.style.border = "2px solid #2ecc71";
  }
}
