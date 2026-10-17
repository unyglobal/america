// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ixtepec","repository":"america","path":"mexico/oaxaca/ixtepec","depth":3,"parent":"mexico/oaxaca","children":["raymundo-melendez","san-jeronimo","tito-enriquez"]});
export const childModules = Object.freeze({"raymundo-melendez":"./raymundo-melendez/raymundo-melendez.js","san-jeronimo":"./san-jeronimo/san-jeronimo.js","tito-enriquez":"./tito-enriquez/tito-enriquez.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
