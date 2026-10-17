// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"saint-john","repository":"america","path":"canada/new-brunswick/saint-john","depth":3,"parent":"canada/new-brunswick","children":["south-end","uptown-saint-john"]});
export const childModules = Object.freeze({"south-end":"./south-end/south-end.js","uptown-saint-john":"./uptown-saint-john/uptown-saint-john.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
