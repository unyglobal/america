// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"la-virgen-del-pilar","repository":"america","path":"guatemala/chimaltenango/zaragoza/la-virgen-del-pilar","depth":4,"parent":"guatemala/chimaltenango/zaragoza","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
