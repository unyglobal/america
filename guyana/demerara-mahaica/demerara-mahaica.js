// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"demerara-mahaica","repository":"america","path":"guyana/demerara-mahaica","depth":2,"parent":"guyana","children":["georgetown"]});
export const childModules = Object.freeze({"georgetown":"./georgetown/georgetown.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
