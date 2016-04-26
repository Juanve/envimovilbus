/**
* para pasar a Radianes
*/
function toRadians(numero) {
  return numero * Math.PI / 180;
}
/**
* Funcion para calcular la distancia entre dos puntos.
*
* @param lat1 = Latitud del punto de origen
* @param lat2 = Latitud del punto de destino
* @param lon1 = Longitud del punto de origen
* @param lon2 = Longitud del punto de destino
*/
function getDistance(lat1, lon1, lat2, lon2){
  var R = 6371; // Radio del planeta tierra en km
  var phi1 = toRadians(lat1);
  var phi2 = toRadians(lat2);
  var deltaphi = toRadians(lat2-lat1);
  var deltalambda = toRadians(lon2-lon1);

  var a = Math.sin(deltaphi/2) * Math.sin(deltaphi/2) +
  Math.cos(phi1) * Math.cos(phi2) *
  Math.sin(deltalambda/2) * Math.sin(deltalambda/2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

  var d = R * c
  return d;
}
