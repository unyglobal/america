// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"azua-province","repository":"america","path":"dominican-republic/azua-province","depth":2,"parent":"dominican-republic","children":["azua"]});
export const childModules = Object.freeze({"azua":"./azua/azua.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
