// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"rogers-park","repository":"america","path":"united-states/illinois/rogers-park","depth":3,"parent":"united-states/illinois","children":["birchwood"]});
export const childModules = Object.freeze({"birchwood":"./birchwood/birchwood.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
