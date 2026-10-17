// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"south-shore","repository":"america","path":"united-states/illinois/south-shore","depth":3,"parent":"united-states/illinois","children":["parkside","south-kenwood"]});
export const childModules = Object.freeze({"parkside":"./parkside/parkside.js","south-kenwood":"./south-kenwood/south-kenwood.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
