// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"overbrook","repository":"america","path":"united-states/pennsylvania/overbrook","depth":3,"parent":"united-states/pennsylvania","children":["wynnefield"]});
export const childModules = Object.freeze({"wynnefield":"./wynnefield/wynnefield.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
