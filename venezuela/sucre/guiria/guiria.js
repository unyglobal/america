// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"guiria","repository":"america","path":"venezuela/sucre/guiria","depth":3,"parent":"venezuela/sucre","children":["kennedy"]});
export const childModules = Object.freeze({"kennedy":"./kennedy/kennedy.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
