// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"choluteca-department","repository":"america","path":"honduras/choluteca-department","depth":2,"parent":"honduras","children":["ciudad-choluteca","marcovia"]});
export const childModules = Object.freeze({"ciudad-choluteca":"./ciudad-choluteca/ciudad-choluteca.js","marcovia":"./marcovia/marcovia.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
