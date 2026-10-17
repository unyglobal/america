// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ciudad-del-carmen","repository":"america","path":"mexico/campeche/ciudad-del-carmen","depth":3,"parent":"mexico/campeche","children":["centro"]});
export const childModules = Object.freeze({"centro":"./centro/centro.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
