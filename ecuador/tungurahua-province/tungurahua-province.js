// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tungurahua-province","repository":"america","path":"ecuador/tungurahua-province","depth":2,"parent":"ecuador","children":["ambato","pelileo"]});
export const childModules = Object.freeze({"ambato":"./ambato/ambato.js","pelileo":"./pelileo/pelileo.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
