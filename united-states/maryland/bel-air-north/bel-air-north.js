// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bel-air-north","repository":"america","path":"united-states/maryland/bel-air-north","depth":3,"parent":"united-states/maryland","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
