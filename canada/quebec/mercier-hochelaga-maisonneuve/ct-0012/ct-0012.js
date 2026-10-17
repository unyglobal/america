// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ct-0012","repository":"america","path":"canada/quebec/mercier-hochelaga-maisonneuve/ct-0012","depth":4,"parent":"canada/quebec/mercier-hochelaga-maisonneuve","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
