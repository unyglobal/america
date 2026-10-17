// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"rivas-department","repository":"america","path":"nicaragua/rivas-department","depth":2,"parent":"nicaragua","children":["rivas"]});
export const childModules = Object.freeze({"rivas":"./rivas/rivas.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
