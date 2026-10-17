// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"la-piedad-de-cabadas","repository":"america","path":"mexico/michoacan/la-piedad-de-cabadas","depth":3,"parent":"mexico/michoacan","children":["las-colonias"]});
export const childModules = Object.freeze({"las-colonias":"./las-colonias/las-colonias.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
