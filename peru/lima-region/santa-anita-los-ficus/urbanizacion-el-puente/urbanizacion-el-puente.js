// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"urbanizacion-el-puente","repository":"america","path":"peru/lima-region/santa-anita-los-ficus/urbanizacion-el-puente","depth":4,"parent":"peru/lima-region/santa-anita-los-ficus","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
