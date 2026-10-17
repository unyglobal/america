// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"vila-pinto-coelho","repository":"america","path":"brazil/minas-gerais/lagoa-santa/vila-pinto-coelho","depth":4,"parent":"brazil/minas-gerais/lagoa-santa","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
