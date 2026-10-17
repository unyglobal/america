// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"santiago-del-estero","repository":"america","path":"argentina/santiago-del-estero","depth":2,"parent":"argentina","children":["anatuya","termas-de-rio-hondo"]});
export const childModules = Object.freeze({"anatuya":"./anatuya/anatuya.js","termas-de-rio-hondo":"./termas-de-rio-hondo/termas-de-rio-hondo.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
