// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ayacucho","repository":"america","path":"peru/ayacucho","depth":2,"parent":"peru","children":["huanta"]});
export const childModules = Object.freeze({"huanta":"./huanta/huanta.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
