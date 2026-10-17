// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sonsonate-department","repository":"america","path":"el-salvador/sonsonate-department","depth":2,"parent":"el-salvador","children":["acajutla","izalco","sonsonate","sonzacate"]});
export const childModules = Object.freeze({"acajutla":"./acajutla/acajutla.js","izalco":"./izalco/izalco.js","sonsonate":"./sonsonate/sonsonate.js","sonzacate":"./sonzacate/sonzacate.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
