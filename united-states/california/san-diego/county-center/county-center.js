// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"county-center","repository":"america","path":"united-states/california/san-diego/county-center","depth":4,"parent":"united-states/california/san-diego","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
