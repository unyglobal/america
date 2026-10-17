// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"villa-hidalgo","repository":"america","path":"mexico/jalisco/villa-hidalgo","depth":3,"parent":"mexico/jalisco","children":["buenos-aires","camino-real","centro","club-de-leones","el-bajio","el-estanque","la-villita","las-palmas","los-cedros","los-galavices","los-pinos","norte","olimpica","primavera","santa-teresa","villa-alborada","villa-textil"]});
export const childModules = Object.freeze({"buenos-aires":"./buenos-aires/buenos-aires.js","camino-real":"./camino-real/camino-real.js","centro":"./centro/centro.js","club-de-leones":"./club-de-leones/club-de-leones.js","el-bajio":"./el-bajio/el-bajio.js","el-estanque":"./el-estanque/el-estanque.js","la-villita":"./la-villita/la-villita.js","las-palmas":"./las-palmas/las-palmas.js","los-cedros":"./los-cedros/los-cedros.js","los-galavices":"./los-galavices/los-galavices.js","los-pinos":"./los-pinos/los-pinos.js","norte":"./norte/norte.js","olimpica":"./olimpica/olimpica.js","primavera":"./primavera/primavera.js","santa-teresa":"./santa-teresa/santa-teresa.js","villa-alborada":"./villa-alborada/villa-alborada.js","villa-textil":"./villa-textil/villa-textil.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
