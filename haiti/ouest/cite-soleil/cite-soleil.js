// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"cite-soleil","repository":"america","path":"haiti/ouest/cite-soleil","depth":3,"parent":"haiti/ouest","children":["drouillard"]});
export const childModules = Object.freeze({"drouillard":"./drouillard/drouillard.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
