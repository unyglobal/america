// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"san-luis-jilotepeque","repository":"america","path":"guatemala/jalapa/san-luis-jilotepeque","depth":3,"parent":"guatemala/jalapa","children":["barrio-el-llano","barrio-los-izotes"]});
export const childModules = Object.freeze({"barrio-el-llano":"./barrio-el-llano/barrio-el-llano.js","barrio-los-izotes":"./barrio-los-izotes/barrio-los-izotes.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
