// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"catamarca","repository":"america","path":"argentina/catamarca","depth":2,"parent":"argentina","children":["belen","santa-maria"]});
export const childModules = Object.freeze({"belen":"./belen/belen.js","santa-maria":"./santa-maria/santa-maria.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
