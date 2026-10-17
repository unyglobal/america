// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"toritama","repository":"america","path":"brazil/pernambuco/toritama","depth":3,"parent":"brazil/pernambuco","children":["cohab"]});
export const childModules = Object.freeze({"cohab":"./cohab/cohab.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
