// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"durazno-department","repository":"america","path":"uruguay/durazno-department","depth":2,"parent":"uruguay","children":["durazno"]});
export const childModules = Object.freeze({"durazno":"./durazno/durazno.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
