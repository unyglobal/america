// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"buenavista","repository":"america","path":"mexico/mexico/buenavista","depth":3,"parent":"mexico/mexico","children":["ciudad-labor"]});
export const childModules = Object.freeze({"ciudad-labor":"./ciudad-labor/ciudad-labor.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
