// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"izabal-department","repository":"america","path":"guatemala/izabal-department","depth":2,"parent":"guatemala","children":["el-estor","livingston","morales","puerto-barrios"]});
export const childModules = Object.freeze({"el-estor":"./el-estor/el-estor.js","livingston":"./livingston/livingston.js","morales":"./morales/morales.js","puerto-barrios":"./puerto-barrios/puerto-barrios.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
