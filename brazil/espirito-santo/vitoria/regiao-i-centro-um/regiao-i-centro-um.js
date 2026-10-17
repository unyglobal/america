// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"regiao-i-centro-um","repository":"america","path":"brazil/espirito-santo/vitoria/regiao-i-centro-um","depth":4,"parent":"brazil/espirito-santo/vitoria","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
