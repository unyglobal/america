// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"urena","repository":"america","path":"venezuela/tachira/urena","depth":3,"parent":"venezuela/tachira","children":["sabana-seca"]});
export const childModules = Object.freeze({"sabana-seca":"./sabana-seca/sabana-seca.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
