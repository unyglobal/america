// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"south-caribbean-coast","repository":"america","path":"nicaragua/south-caribbean-coast","depth":2,"parent":"nicaragua","children":["bluefields","nueva-guinea","rama"]});
export const childModules = Object.freeze({"bluefields":"./bluefields/bluefields.js","nueva-guinea":"./nueva-guinea/nueva-guinea.js","rama":"./rama/rama.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
