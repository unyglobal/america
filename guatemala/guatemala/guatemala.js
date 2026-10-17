// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"guatemala","repository":"america","path":"guatemala/guatemala","depth":2,"parent":"guatemala","children":["amatitlan","chinautla","fraijanes","guatemala-city","mixco","palencia","petapa","san-jose-pinula","san-juan-sacatepequez","san-pedro-ayampuc","santa-catarina-pinula","villa-canales","villa-nueva"]});
export const childModules = Object.freeze({"amatitlan":"./amatitlan/amatitlan.js","chinautla":"./chinautla/chinautla.js","fraijanes":"./fraijanes/fraijanes.js","guatemala-city":"./guatemala-city/guatemala-city.js","mixco":"./mixco/mixco.js","palencia":"./palencia/palencia.js","petapa":"./petapa/petapa.js","san-jose-pinula":"./san-jose-pinula/san-jose-pinula.js","san-juan-sacatepequez":"./san-juan-sacatepequez/san-juan-sacatepequez.js","san-pedro-ayampuc":"./san-pedro-ayampuc/san-pedro-ayampuc.js","santa-catarina-pinula":"./santa-catarina-pinula/santa-catarina-pinula.js","villa-canales":"./villa-canales/villa-canales.js","villa-nueva":"./villa-nueva/villa-nueva.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
