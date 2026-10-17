// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"barrio-andres-eloy-blanco","repository":"america","path":"venezuela/falcon/punto-fijo/barrio-andres-eloy-blanco","depth":4,"parent":"venezuela/falcon/punto-fijo","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
