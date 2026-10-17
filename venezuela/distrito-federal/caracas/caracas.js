// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"caracas","repository":"america","path":"venezuela/distrito-federal/caracas","depth":3,"parent":"venezuela/distrito-federal","children":["bello-monte","sabana-grande","san-antonio"]});
export const childModules = Object.freeze({"bello-monte":"./bello-monte/bello-monte.js","sabana-grande":"./sabana-grande/sabana-grande.js","san-antonio":"./san-antonio/san-antonio.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
