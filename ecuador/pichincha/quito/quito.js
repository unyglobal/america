// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"quito","repository":"america","path":"ecuador/pichincha/quito","depth":3,"parent":"ecuador/pichincha","children":["la-libertad"]});
export const childModules = Object.freeze({"la-libertad":"./la-libertad/la-libertad.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
