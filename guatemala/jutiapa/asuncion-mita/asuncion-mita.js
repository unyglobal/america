// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"asuncion-mita","repository":"america","path":"guatemala/jutiapa/asuncion-mita","depth":3,"parent":"guatemala/jutiapa","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
