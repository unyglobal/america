// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"jaen","repository":"america","path":"peru/cajamarca-department/jaen","depth":3,"parent":"peru/cajamarca-department","children":["miraflores"]});
export const childModules = Object.freeze({"miraflores":"./miraflores/miraflores.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
