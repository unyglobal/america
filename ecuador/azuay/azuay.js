// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"azuay","repository":"america","path":"ecuador/azuay","depth":2,"parent":"ecuador","children":["cuenca","gualaceo"]});
export const childModules = Object.freeze({"cuenca":"./cuenca/cuenca.js","gualaceo":"./gualaceo/gualaceo.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
