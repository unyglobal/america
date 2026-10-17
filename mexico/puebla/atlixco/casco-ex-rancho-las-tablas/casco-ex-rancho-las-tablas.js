// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"casco-ex-rancho-las-tablas","repository":"america","path":"mexico/puebla/atlixco/casco-ex-rancho-las-tablas","depth":4,"parent":"mexico/puebla/atlixco","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
