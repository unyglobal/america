// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sudbury","repository":"america","path":"united-states/massachusetts/sudbury","depth":3,"parent":"united-states/massachusetts","children":["musketamquid-village"]});
export const childModules = Object.freeze({"musketamquid-village":"./musketamquid-village/musketamquid-village.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
