// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"cadereyta","repository":"america","path":"mexico/nuevo-leon/cadereyta","depth":3,"parent":"mexico/nuevo-leon","children":["arboledas"]});
export const childModules = Object.freeze({"arboledas":"./arboledas/arboledas.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
