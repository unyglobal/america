// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"culpeper","repository":"america","path":"united-states/virginia/culpeper","depth":3,"parent":"united-states/virginia","children":["catalpa-hills"]});
export const childModules = Object.freeze({"catalpa-hills":"./catalpa-hills/catalpa-hills.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
