// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"lompoc","repository":"america","path":"united-states/california/lompoc","depth":3,"parent":"united-states/california","children":["lompoc-village"]});
export const childModules = Object.freeze({"lompoc-village":"./lompoc-village/lompoc-village.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
