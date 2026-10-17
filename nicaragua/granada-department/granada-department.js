// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"granada-department","repository":"america","path":"nicaragua/granada-department","depth":2,"parent":"nicaragua","children":["granada","nandaime"]});
export const childModules = Object.freeze({"granada":"./granada/granada.js","nandaime":"./nandaime/nandaime.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
