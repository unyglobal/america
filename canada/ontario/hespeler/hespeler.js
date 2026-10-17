// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"hespeler","repository":"america","path":"canada/ontario/hespeler","depth":3,"parent":"canada/ontario","children":["silver-heights"]});
export const childModules = Object.freeze({"silver-heights":"./silver-heights/silver-heights.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
