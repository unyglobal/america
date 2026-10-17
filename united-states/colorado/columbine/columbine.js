// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"columbine","repository":"america","path":"united-states/colorado/columbine","depth":3,"parent":"united-states/colorado","children":["normandy-estates"]});
export const childModules = Object.freeze({"normandy-estates":"./normandy-estates/normandy-estates.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
