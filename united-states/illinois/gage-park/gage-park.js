// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"gage-park","repository":"america","path":"united-states/illinois/gage-park","depth":3,"parent":"united-states/illinois","children":["mexico"]});
export const childModules = Object.freeze({"mexico":"./mexico/mexico.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
