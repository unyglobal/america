// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"centro-de-benito-juarez","repository":"america","path":"mexico/nuevo-leon/ciudad-benito-juarez/centro-de-benito-juarez","depth":4,"parent":"mexico/nuevo-leon/ciudad-benito-juarez","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
