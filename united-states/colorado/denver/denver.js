// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"denver","repository":"america","path":"united-states/colorado/denver","depth":3,"parent":"united-states/colorado","children":["capitol-hill"]});
export const childModules = Object.freeze({"capitol-hill":"./capitol-hill/capitol-hill.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
