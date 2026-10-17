// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sainte-foy","repository":"america","path":"canada/quebec/sainte-foy","depth":3,"parent":"canada/quebec","children":["cite-universitaire"]});
export const childModules = Object.freeze({"cite-universitaire":"./cite-universitaire/cite-universitaire.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
