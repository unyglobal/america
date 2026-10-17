// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ananindeua","repository":"america","path":"brazil/para/ananindeua","depth":3,"parent":"brazil/para","children":["abolicao"]});
export const childModules = Object.freeze({"abolicao":"./abolicao/abolicao.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
