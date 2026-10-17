// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"alcalde-diaz","repository":"america","path":"panama/panama/alcalde-diaz","depth":3,"parent":"panama/panama","children":["villa-victoria"]});
export const childModules = Object.freeze({"villa-victoria":"./villa-victoria/villa-victoria.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
