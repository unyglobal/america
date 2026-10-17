// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"papalotla","repository":"america","path":"mexico/tlaxcala/papalotla","depth":3,"parent":"mexico/tlaxcala","children":["xilotzinco","xolalpa"]});
export const childModules = Object.freeze({"xilotzinco":"./xilotzinco/xilotzinco.js","xolalpa":"./xolalpa/xolalpa.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
