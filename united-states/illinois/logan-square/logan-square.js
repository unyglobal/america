// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"logan-square","repository":"america","path":"united-states/illinois/logan-square","depth":3,"parent":"united-states/illinois","children":["maplewood"]});
export const childModules = Object.freeze({"maplewood":"./maplewood/maplewood.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
