// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"mckinley-park","repository":"america","path":"united-states/illinois/mckinley-park","depth":3,"parent":"united-states/illinois","children":["ducktown","mount-pleasant"]});
export const childModules = Object.freeze({"ducktown":"./ducktown/ducktown.js","mount-pleasant":"./mount-pleasant/mount-pleasant.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
