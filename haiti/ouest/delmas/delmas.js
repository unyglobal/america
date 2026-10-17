// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"delmas","repository":"america","path":"haiti/ouest/delmas","depth":3,"parent":"haiti/ouest","children":["cite-saint-georges","delmas-32"]});
export const childModules = Object.freeze({"cite-saint-georges":"./cite-saint-georges/cite-saint-georges.js","delmas-32":"./delmas-32/delmas-32.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
