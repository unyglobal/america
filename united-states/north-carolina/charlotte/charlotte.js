// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"charlotte","repository":"america","path":"united-states/north-carolina/charlotte","depth":3,"parent":"united-states/north-carolina","children":["fourth-ward","third-ward"]});
export const childModules = Object.freeze({"fourth-ward":"./fourth-ward/fourth-ward.js","third-ward":"./third-ward/third-ward.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
