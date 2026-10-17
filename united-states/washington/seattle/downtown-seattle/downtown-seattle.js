// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"downtown-seattle","repository":"america","path":"united-states/washington/seattle/downtown-seattle","depth":4,"parent":"united-states/washington/seattle","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
