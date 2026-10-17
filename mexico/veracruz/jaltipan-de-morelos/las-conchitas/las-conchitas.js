// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"las-conchitas","repository":"america","path":"mexico/veracruz/jaltipan-de-morelos/las-conchitas","depth":4,"parent":"mexico/veracruz/jaltipan-de-morelos","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
