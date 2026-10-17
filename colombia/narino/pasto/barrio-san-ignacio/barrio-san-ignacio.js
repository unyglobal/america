// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"barrio-san-ignacio","repository":"america","path":"colombia/narino/pasto/barrio-san-ignacio","depth":4,"parent":"colombia/narino/pasto","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
