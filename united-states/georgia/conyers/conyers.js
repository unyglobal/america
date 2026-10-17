// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"conyers","repository":"america","path":"united-states/georgia/conyers","depth":3,"parent":"united-states/georgia","children":["eastdale-mobile-home-park"]});
export const childModules = Object.freeze({"eastdale-mobile-home-park":"./eastdale-mobile-home-park/eastdale-mobile-home-park.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
