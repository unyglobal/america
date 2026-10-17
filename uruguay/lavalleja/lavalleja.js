// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"lavalleja","repository":"america","path":"uruguay/lavalleja","depth":2,"parent":"uruguay","children":["minas"]});
export const childModules = Object.freeze({"minas":"./minas/minas.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
