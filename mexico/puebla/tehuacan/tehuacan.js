// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tehuacan","repository":"america","path":"mexico/puebla/tehuacan","depth":3,"parent":"mexico/puebla","children":["garci-crespo-fovissste","ignacio-zaragoza"]});
export const childModules = Object.freeze({"garci-crespo-fovissste":"./garci-crespo-fovissste/garci-crespo-fovissste.js","ignacio-zaragoza":"./ignacio-zaragoza/ignacio-zaragoza.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
