// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"coban","repository":"america","path":"guatemala/alta-verapaz/coban","depth":3,"parent":"guatemala/alta-verapaz","children":["residenciales-imperial"]});
export const childModules = Object.freeze({"residenciales-imperial":"./residenciales-imperial/residenciales-imperial.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
