// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"manassas","repository":"america","path":"united-states/virginia/manassas","depth":3,"parent":"united-states/virginia","children":["georgetown-south"]});
export const childModules = Object.freeze({"georgetown-south":"./georgetown-south/georgetown-south.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
