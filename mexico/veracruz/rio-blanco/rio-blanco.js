// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"rio-blanco","repository":"america","path":"mexico/veracruz/rio-blanco","depth":3,"parent":"mexico/veracruz","children":["anahuac","barrio-nuevo","el-cortijo","felipe-carrillo-puerto","francisco-i-madero","ignacio-zaragoza","salvador-gonzalo-garcia","union-y-progreso"]});
export const childModules = Object.freeze({"anahuac":"./anahuac/anahuac.js","barrio-nuevo":"./barrio-nuevo/barrio-nuevo.js","el-cortijo":"./el-cortijo/el-cortijo.js","felipe-carrillo-puerto":"./felipe-carrillo-puerto/felipe-carrillo-puerto.js","francisco-i-madero":"./francisco-i-madero/francisco-i-madero.js","ignacio-zaragoza":"./ignacio-zaragoza/ignacio-zaragoza.js","salvador-gonzalo-garcia":"./salvador-gonzalo-garcia/salvador-gonzalo-garcia.js","union-y-progreso":"./union-y-progreso/union-y-progreso.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
