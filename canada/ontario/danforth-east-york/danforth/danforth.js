// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"danforth","repository":"america","path":"canada/ontario/danforth-east-york/danforth","depth":4,"parent":"canada/ontario/danforth-east-york","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
