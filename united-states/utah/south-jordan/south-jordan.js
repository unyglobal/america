// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"south-jordan","repository":"america","path":"united-states/utah/south-jordan","depth":3,"parent":"united-states/utah","children":["y-worry-estates"]});
export const childModules = Object.freeze({"y-worry-estates":"./y-worry-estates/y-worry-estates.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
