// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"valencia","repository":"america","path":"venezuela/carabobo/valencia","depth":3,"parent":"venezuela/carabobo","children":["america","el-triunfo","la-concordia","rancho-grande","santa-rosa","urbanizacion-el-palotal","urbanizacion-la-fundacion"]});
export const childModules = Object.freeze({"america":"./america/america.js","el-triunfo":"./el-triunfo/el-triunfo.js","la-concordia":"./la-concordia/la-concordia.js","rancho-grande":"./rancho-grande/rancho-grande.js","santa-rosa":"./santa-rosa/santa-rosa.js","urbanizacion-el-palotal":"./urbanizacion-el-palotal/urbanizacion-el-palotal.js","urbanizacion-la-fundacion":"./urbanizacion-la-fundacion/urbanizacion-la-fundacion.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
