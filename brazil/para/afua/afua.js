// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"afua","repository":"america","path":"brazil/para/afua","depth":3,"parent":"brazil/para","children":["capim-marinho"]});
export const childModules = Object.freeze({"capim-marinho":"./capim-marinho/capim-marinho.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
