// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"co-op-city","repository":"america","path":"united-states/new-york/baychester/co-op-city","depth":4,"parent":"united-states/new-york/baychester","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
