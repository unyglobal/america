// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"masaya-department","repository":"america","path":"nicaragua/masaya-department","depth":2,"parent":"nicaragua","children":["masatepe","masaya"]});
export const childModules = Object.freeze({"masatepe":"./masatepe/masatepe.js","masaya":"./masaya/masaya.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
