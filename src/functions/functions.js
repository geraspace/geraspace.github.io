export function CopiarEmail() {
    /* Seleccionar el valor de email */
    var copyText = document.getElementById("CopyEmail");
    /* Copiar email a clipboard*/
    navigator.clipboard.writeText(copyText.value);

    alert("Email copiado");

  }