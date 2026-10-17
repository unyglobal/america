// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"watsonville","repository":"america","path":"united-states/california/watsonville","depth":3,"parent":"united-states/california","children":["colache-town"]});
export const childModules = Object.freeze({"colache-town":"./colache-town/colache-town.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
