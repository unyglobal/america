// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"cumbres-del-este-numero-dos","repository":"america","path":"panama/panama/la-cabima/cumbres-del-este-numero-dos","depth":4,"parent":"panama/panama/la-cabima","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
