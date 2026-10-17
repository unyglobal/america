// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"puntarenas","repository":"america","path":"costa-rica/puntarenas-province/puntarenas","depth":3,"parent":"costa-rica/puntarenas-province","children":["carmen"]});
export const childModules = Object.freeze({"carmen":"./carmen/carmen.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
