// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"masagua","repository":"america","path":"guatemala/escuintla/masagua","depth":3,"parent":"guatemala/escuintla","children":["colonia-el-divino-maestro","los-lirios"]});
export const childModules = Object.freeze({"colonia-el-divino-maestro":"./colonia-el-divino-maestro/colonia-el-divino-maestro.js","los-lirios":"./los-lirios/los-lirios.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
