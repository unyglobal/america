// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"baton-rouge","repository":"america","path":"united-states/louisiana/baton-rouge","depth":3,"parent":"united-states/louisiana","children":["swart"]});
export const childModules = Object.freeze({"swart":"./swart/swart.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
