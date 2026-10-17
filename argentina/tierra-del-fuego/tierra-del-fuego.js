// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tierra-del-fuego","repository":"america","path":"argentina/tierra-del-fuego","depth":2,"parent":"argentina","children":["rio-grande","ushuaia"]});
export const childModules = Object.freeze({"rio-grande":"./rio-grande/rio-grande.js","ushuaia":"./ushuaia/ushuaia.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
