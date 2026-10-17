// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"cocle","repository":"america","path":"panama/cocle","depth":2,"parent":"panama","children":["penonome"]});
export const childModules = Object.freeze({"penonome":"./penonome/penonome.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
