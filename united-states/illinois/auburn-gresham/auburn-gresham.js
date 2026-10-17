// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"auburn-gresham","repository":"america","path":"united-states/illinois/auburn-gresham","depth":3,"parent":"united-states/illinois","children":["chester-highlands","south-englewood"]});
export const childModules = Object.freeze({"chester-highlands":"./chester-highlands/chester-highlands.js","south-englewood":"./south-englewood/south-englewood.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
