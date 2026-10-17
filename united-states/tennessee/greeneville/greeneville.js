// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"greeneville","repository":"america","path":"united-states/tennessee/greeneville","depth":3,"parent":"united-states/tennessee","children":["highland-hills"]});
export const childModules = Object.freeze({"highland-hills":"./highland-hills/highland-hills.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
