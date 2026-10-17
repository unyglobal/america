// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"pedro-canario","repository":"america","path":"brazil/espirito-santo/pedro-canario","depth":3,"parent":"brazil/espirito-santo","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
