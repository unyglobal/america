// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"nuevo-casas-grandes","repository":"america","path":"mexico/chihuahua/nuevo-casas-grandes","depth":3,"parent":"mexico/chihuahua","children":["centro"]});
export const childModules = Object.freeze({"centro":"./centro/centro.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
