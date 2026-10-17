// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"west-town","repository":"america","path":"united-states/illinois/west-town","depth":3,"parent":"united-states/illinois","children":["east-village"]});
export const childModules = Object.freeze({"east-village":"./east-village/east-village.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
