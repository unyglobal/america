// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"josemaria-escriva-de-balaguer","repository":"america","path":"mexico/jalisco/encarnacion-de-diaz/josemaria-escriva-de-balaguer","depth":4,"parent":"mexico/jalisco/encarnacion-de-diaz","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
