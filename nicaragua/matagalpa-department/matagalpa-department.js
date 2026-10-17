// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"matagalpa-department","repository":"america","path":"nicaragua/matagalpa-department","depth":2,"parent":"nicaragua","children":["matagalpa","rio-blanco"]});
export const childModules = Object.freeze({"matagalpa":"./matagalpa/matagalpa.js","rio-blanco":"./rio-blanco/rio-blanco.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
