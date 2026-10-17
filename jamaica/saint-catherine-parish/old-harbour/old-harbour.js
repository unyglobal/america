// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"old-harbour","repository":"america","path":"jamaica/saint-catherine-parish/old-harbour","depth":3,"parent":"jamaica/saint-catherine-parish","children":["darlington"]});
export const childModules = Object.freeze({"darlington":"./darlington/darlington.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
