// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"south-chicago","repository":"america","path":"united-states/illinois/south-chicago","depth":3,"parent":"united-states/illinois","children":["calumet","green-bay"]});
export const childModules = Object.freeze({"calumet":"./calumet/calumet.js","green-bay":"./green-bay/green-bay.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
