// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"mocoa","repository":"america","path":"colombia/putumayo-department/mocoa","depth":3,"parent":"colombia/putumayo-department","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
