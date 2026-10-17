// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"termas-de-rio-hondo","repository":"america","path":"argentina/santiago-del-estero/termas-de-rio-hondo","depth":3,"parent":"argentina/santiago-del-estero","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
