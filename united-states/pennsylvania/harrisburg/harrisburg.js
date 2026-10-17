// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"harrisburg","repository":"america","path":"united-states/pennsylvania/harrisburg","depth":3,"parent":"united-states/pennsylvania","children":["fox-ridge"]});
export const childModules = Object.freeze({"fox-ridge":"./fox-ridge/fox-ridge.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
