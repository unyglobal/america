// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"les-rivieres","repository":"america","path":"canada/quebec/les-rivieres","depth":3,"parent":"canada/quebec","children":["vanier"]});
export const childModules = Object.freeze({"vanier":"./vanier/vanier.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
