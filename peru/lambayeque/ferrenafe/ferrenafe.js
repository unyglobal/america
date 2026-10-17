// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ferrenafe","repository":"america","path":"peru/lambayeque/ferrenafe","depth":3,"parent":"peru/lambayeque","children":["pueblo-nuevo"]});
export const childModules = Object.freeze({"pueblo-nuevo":"./pueblo-nuevo/pueblo-nuevo.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
