// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"aylmer","repository":"america","path":"canada/quebec/aylmer","depth":3,"parent":"canada/quebec","children":["lakeview-terrasse","lucerne"]});
export const childModules = Object.freeze({"lakeview-terrasse":"./lakeview-terrasse/lakeview-terrasse.js","lucerne":"./lucerne/lucerne.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
