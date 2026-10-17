// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kingsland","repository":"america","path":"united-states/georgia/kingsland","depth":3,"parent":"united-states/georgia","children":["creekwood"]});
export const childModules = Object.freeze({"creekwood":"./creekwood/creekwood.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
