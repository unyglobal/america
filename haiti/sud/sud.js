// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sud","repository":"america","path":"haiti/sud","depth":2,"parent":"haiti","children":["les-cayes"]});
export const childModules = Object.freeze({"les-cayes":"./les-cayes/les-cayes.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
