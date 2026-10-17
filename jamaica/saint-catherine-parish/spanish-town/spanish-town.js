// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"spanish-town","repository":"america","path":"jamaica/saint-catherine-parish/spanish-town","depth":3,"parent":"jamaica/saint-catherine-parish","children":["tawes-pen"]});
export const childModules = Object.freeze({"tawes-pen":"./tawes-pen/tawes-pen.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
