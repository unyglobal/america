// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"nicholasville","repository":"america","path":"united-states/kentucky/nicholasville","depth":3,"parent":"united-states/kentucky","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
