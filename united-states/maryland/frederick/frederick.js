// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"frederick","repository":"america","path":"united-states/maryland/frederick","depth":3,"parent":"united-states/maryland","children":["mount-olivet-heights"]});
export const childModules = Object.freeze({"mount-olivet-heights":"./mount-olivet-heights/mount-olivet-heights.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
