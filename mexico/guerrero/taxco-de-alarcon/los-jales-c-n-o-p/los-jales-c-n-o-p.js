// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"los-jales-c-n-o-p","repository":"america","path":"mexico/guerrero/taxco-de-alarcon/los-jales-c-n-o-p","depth":4,"parent":"mexico/guerrero/taxco-de-alarcon","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
