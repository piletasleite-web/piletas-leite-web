// Número extraído de tu perfil de Instagram (54 + 9 + 1130750728)
const TELEFONO_WHATSAPP = "5491130750728"; 

function consultarWhatsApp(servicio) {
  let mensaje = "";
  
  if (servicio === 'General') {
    mensaje = encodeURIComponent("¡Hola Piletas Leite! Quisiera hacer una consulta y pedir un presupuesto para mi pileta en Pilar / Buenos Aires.");
  } else {
    mensaje = encodeURIComponent(`¡Hola Piletas Leite! Quisiera pedir un presupuesto para el revestimiento: ${servicio}.`);
  }

  window.open(`https://wa.me/${TELEFONO_WHATSAPP}?text=${mensaje}`, '_blank');
}