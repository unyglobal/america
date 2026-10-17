// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"formosa","repository":"america","path":"argentina/formosa","depth":2,"parent":"argentina","children":["pirane"]});
export const childModules = Object.freeze({"pirane":"./pirane/pirane.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
