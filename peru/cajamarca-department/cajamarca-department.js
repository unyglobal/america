// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"cajamarca-department","repository":"america","path":"peru/cajamarca-department","depth":2,"parent":"peru","children":["cajamarca","jaen"]});
export const childModules = Object.freeze({"cajamarca":"./cajamarca/cajamarca.js","jaen":"./jaen/jaen.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
