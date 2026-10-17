// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"valera","repository":"america","path":"venezuela/trujillo/valera","depth":3,"parent":"venezuela/trujillo","children":["la-plata","moron"]});
export const childModules = Object.freeze({"la-plata":"./la-plata/la-plata.js","moron":"./moron/moron.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
