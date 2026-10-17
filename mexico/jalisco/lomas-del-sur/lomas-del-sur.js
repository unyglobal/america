// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"lomas-del-sur","repository":"america","path":"mexico/jalisco/lomas-del-sur","depth":3,"parent":"mexico/jalisco","children":["villas-terranova"]});
export const childModules = Object.freeze({"villas-terranova":"./villas-terranova/villas-terranova.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
