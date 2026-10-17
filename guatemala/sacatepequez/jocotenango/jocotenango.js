// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"jocotenango","repository":"america","path":"guatemala/sacatepequez/jocotenango","depth":3,"parent":"guatemala/sacatepequez","children":["las-victorias","los-llanos"]});
export const childModules = Object.freeze({"las-victorias":"./las-victorias/las-victorias.js","los-llanos":"./los-llanos/los-llanos.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
