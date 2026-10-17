// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"upper-demerara-berbice","repository":"america","path":"guyana/upper-demerara-berbice","depth":2,"parent":"guyana","children":["linden"]});
export const childModules = Object.freeze({"linden":"./linden/linden.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
