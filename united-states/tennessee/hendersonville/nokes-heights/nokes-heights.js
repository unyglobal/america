// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"nokes-heights","repository":"america","path":"united-states/tennessee/hendersonville/nokes-heights","depth":4,"parent":"united-states/tennessee/hendersonville","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
