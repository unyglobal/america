// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tocache","repository":"america","path":"peru/san-martin-department/tocache","depth":3,"parent":"peru/san-martin-department","children":["cuadra-10","tocache-nuevo"]});
export const childModules = Object.freeze({"cuadra-10":"./cuadra-10/cuadra-10.js","tocache-nuevo":"./tocache-nuevo/tocache-nuevo.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
