// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"evanston","repository":"america","path":"canada/alberta/evanston","depth":3,"parent":"canada/alberta","children":["kincora"]});
export const childModules = Object.freeze({"kincora":"./kincora/kincora.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
