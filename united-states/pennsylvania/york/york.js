// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"york","repository":"america","path":"united-states/pennsylvania/york","depth":3,"parent":"united-states/pennsylvania","children":["park-village"]});
export const childModules = Object.freeze({"park-village":"./park-village/park-village.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
