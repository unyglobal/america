// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"solola","repository":"america","path":"guatemala/solola","depth":2,"parent":"guatemala","children":["nahuala","santiago-atitlan"]});
export const childModules = Object.freeze({"nahuala":"./nahuala/nahuala.js","santiago-atitlan":"./santiago-atitlan/santiago-atitlan.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
