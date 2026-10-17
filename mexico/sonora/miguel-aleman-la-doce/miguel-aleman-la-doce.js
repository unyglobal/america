// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"miguel-aleman-la-doce","repository":"america","path":"mexico/sonora/miguel-aleman-la-doce","depth":3,"parent":"mexico/sonora","children":["sector-a"]});
export const childModules = Object.freeze({"sector-a":"./sector-a/sector-a.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
