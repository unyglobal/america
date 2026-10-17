// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"vaupes","repository":"america","path":"colombia/vaupes","depth":2,"parent":"colombia","children":["mitu"]});
export const childModules = Object.freeze({"mitu":"./mitu/mitu.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
