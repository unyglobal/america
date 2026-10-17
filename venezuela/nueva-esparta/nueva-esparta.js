// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"nueva-esparta","repository":"america","path":"venezuela/nueva-esparta","depth":2,"parent":"venezuela","children":["juan-griego","la-asuncion","la-guardia","pampatar","porlamar","punta-de-piedras","san-juan-bautista"]});
export const childModules = Object.freeze({"juan-griego":"./juan-griego/juan-griego.js","la-asuncion":"./la-asuncion/la-asuncion.js","la-guardia":"./la-guardia/la-guardia.js","pampatar":"./pampatar/pampatar.js","porlamar":"./porlamar/porlamar.js","punta-de-piedras":"./punta-de-piedras/punta-de-piedras.js","san-juan-bautista":"./san-juan-bautista/san-juan-bautista.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
