// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"jalapa","repository":"america","path":"guatemala/jalapa","depth":2,"parent":"guatemala","children":["san-luis-jilotepeque"]});
export const childModules = Object.freeze({"san-luis-jilotepeque":"./san-luis-jilotepeque/san-luis-jilotepeque.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
