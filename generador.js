   
    const CARD_OWNER = "Felix de Jesus Carrillo Celerino";
    const CARD_NUMBER = "4152314110957118";

function formatearNumero(numero) {

      return numero
        .replace(/\D/g, '')
        .replace(/(.{4})/g, '$1 ')
        .trim();

    }


    document.getElementById("titular").textContent =
      CARD_OWNER;


    document.getElementById("numero").textContent =
      formatearNumero(CARD_NUMBER);

 async function copiarDato(elemento, boton, mensaje) {

  let texto;

  if (elemento === "titular") {
    texto = CARD_OWNER;
  } else {
    texto = CARD_NUMBER;
  }

  try {

    await navigator.clipboard.writeText(texto);

  } catch (error) {

    const textarea = document.createElement("textarea");

    textarea.value = texto;

    document.body.appendChild(textarea);

    textarea.select();

    document.execCommand("copy");

    textarea.remove();
  }


  // =========================
  // ANIMACIÓN
  // =========================

  const botonElemento =
    document.getElementById(boton);

  botonElemento.classList.add("animando");

  setTimeout(() => {

    botonElemento.classList.remove("animando");

  }, 600);


  // Estado "Copiado"

  botonElemento.classList.add("copiado");

  const textoOriginal =
    botonElemento.innerHTML;

  botonElemento.innerHTML =
    "✓ ¡Copiado!";


  document.getElementById("mensaje").textContent =
    mensaje;


  // Regresar después de 1.8 segundos

  setTimeout(() => {

    botonElemento.classList.remove("copiado");

    botonElemento.innerHTML =
      textoOriginal;

    document.getElementById("mensaje").textContent =
      "";

  }, 1800);

}


    // ==================================================
    // GENERAR QR
    // ==================================================

    const paginaActual =  CARD_NUMBER ;


    const qrURL =
      "https://api.qrserver.com/v1/create-qr-code/?size=300x300&data="
      + encodeURIComponent(paginaActual);


    document.getElementById("qrImagen").src =
      qrURL;