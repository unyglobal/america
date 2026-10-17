// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"maspeth","repository":"america","path":"united-states/new-york/maspeth","depth":3,"parent":"united-states/new-york","children":["haberman"]});
export const childModules = Object.freeze({"haberman":"./haberman/haberman.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
