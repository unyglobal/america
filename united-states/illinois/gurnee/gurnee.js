// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"gurnee","repository":"america","path":"united-states/illinois/gurnee","depth":3,"parent":"united-states/illinois","children":["chittenden"]});
export const childModules = Object.freeze({"chittenden":"./chittenden/chittenden.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
