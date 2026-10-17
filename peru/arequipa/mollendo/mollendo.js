// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"mollendo","repository":"america","path":"peru/arequipa/mollendo","depth":3,"parent":"peru/arequipa","children":["inclan"]});
export const childModules = Object.freeze({"inclan":"./inclan/inclan.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
