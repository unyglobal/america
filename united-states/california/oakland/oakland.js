// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"oakland","repository":"america","path":"united-states/california/oakland","depth":3,"parent":"united-states/california","children":["chinatown","civic-center","lakeside","old-oakland","uptown"]});
export const childModules = Object.freeze({"chinatown":"./chinatown/chinatown.js","civic-center":"./civic-center/civic-center.js","lakeside":"./lakeside/lakeside.js","old-oakland":"./old-oakland/old-oakland.js","uptown":"./uptown/uptown.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
