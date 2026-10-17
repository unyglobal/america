// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"downtown-charlottetown","repository":"america","path":"canada/prince-edward-island/charlottetown/downtown-charlottetown","depth":4,"parent":"canada/prince-edward-island/charlottetown","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
