// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"cadereyta-jimenez","repository":"america","path":"mexico/nuevo-leon/cadereyta-jimenez","depth":3,"parent":"mexico/nuevo-leon","children":["zona-centro"]});
export const childModules = Object.freeze({"zona-centro":"./zona-centro/zona-centro.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
