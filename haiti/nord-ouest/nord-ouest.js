// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"nord-ouest","repository":"america","path":"haiti/nord-ouest","depth":2,"parent":"haiti","children":["port-de-paix","ti-port-de-paix"]});
export const childModules = Object.freeze({"port-de-paix":"./port-de-paix/port-de-paix.js","ti-port-de-paix":"./ti-port-de-paix/ti-port-de-paix.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
