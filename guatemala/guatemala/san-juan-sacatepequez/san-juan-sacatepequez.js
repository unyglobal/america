// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"san-juan-sacatepequez","repository":"america","path":"guatemala/guatemala/san-juan-sacatepequez","depth":3,"parent":"guatemala/guatemala","children":["pocajay"]});
export const childModules = Object.freeze({"pocajay":"./pocajay/pocajay.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
