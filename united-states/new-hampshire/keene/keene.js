// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"keene","repository":"america","path":"united-states/new-hampshire/keene","depth":3,"parent":"united-states/new-hampshire","children":["harper-acres"]});
export const childModules = Object.freeze({"harper-acres":"./harper-acres/harper-acres.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
