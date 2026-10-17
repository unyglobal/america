// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tracy","repository":"america","path":"united-states/california/tracy","depth":3,"parent":"united-states/california","children":["wainwright-village"]});
export const childModules = Object.freeze({"wainwright-village":"./wainwright-village/wainwright-village.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
