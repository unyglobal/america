// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"santa-anita-los-ficus","repository":"america","path":"peru/lima-region/santa-anita-los-ficus","depth":3,"parent":"peru/lima-region","children":["los-molinos","urbanizacion-el-puente"]});
export const childModules = Object.freeze({"los-molinos":"./los-molinos/los-molinos.js","urbanizacion-el-puente":"./urbanizacion-el-puente/urbanizacion-el-puente.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
