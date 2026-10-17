// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"confederation","repository":"america","path":"canada/saskatchewan/confederation","depth":3,"parent":"canada/saskatchewan","children":["mount-royal"]});
export const childModules = Object.freeze({"mount-royal":"./mount-royal/mount-royal.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
