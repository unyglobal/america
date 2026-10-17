// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"villa-santa-rita","repository":"america","path":"argentina/buenos-aires-f-d/villa-santa-rita","depth":3,"parent":"argentina/buenos-aires-f-d","children":["nazca","villa-general-mitre"]});
export const childModules = Object.freeze({"nazca":"./nazca/nazca.js","villa-general-mitre":"./villa-general-mitre/villa-general-mitre.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
