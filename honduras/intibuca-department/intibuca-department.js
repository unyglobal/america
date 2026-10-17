// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"intibuca-department","repository":"america","path":"honduras/intibuca-department","depth":2,"parent":"honduras","children":["colomoncagua","yamaranguila"]});
export const childModules = Object.freeze({"colomoncagua":"./colomoncagua/colomoncagua.js","yamaranguila":"./yamaranguila/yamaranguila.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
