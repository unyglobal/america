// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bogota","repository":"america","path":"colombia/bogota-d-c/bogota","depth":3,"parent":"colombia/bogota-d-c","children":["el-liston","la-pepita","martires","paloquemao"]});
export const childModules = Object.freeze({"el-liston":"./el-liston/el-liston.js","la-pepita":"./la-pepita/la-pepita.js","martires":"./martires/martires.js","paloquemao":"./paloquemao/paloquemao.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
