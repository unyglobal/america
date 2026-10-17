// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"battle-ground","repository":"america","path":"united-states/washington/battle-ground","depth":3,"parent":"united-states/washington","children":["battle-ground-west"]});
export const childModules = Object.freeze({"battle-ground-west":"./battle-ground-west/battle-ground-west.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
