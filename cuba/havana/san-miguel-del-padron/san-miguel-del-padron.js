// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"san-miguel-del-padron","repository":"america","path":"cuba/havana/san-miguel-del-padron","depth":3,"parent":"cuba/havana","children":["alturas-de-luyano","california","ciudamar","jacomino","luyano-moderno","reparto-afan"]});
export const childModules = Object.freeze({"alturas-de-luyano":"./alturas-de-luyano/alturas-de-luyano.js","california":"./california/california.js","ciudamar":"./ciudamar/ciudamar.js","jacomino":"./jacomino/jacomino.js","luyano-moderno":"./luyano-moderno/luyano-moderno.js","reparto-afan":"./reparto-afan/reparto-afan.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
