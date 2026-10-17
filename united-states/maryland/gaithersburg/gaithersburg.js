// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"gaithersburg","repository":"america","path":"united-states/maryland/gaithersburg","depth":3,"parent":"united-states/maryland","children":["observatory-heights"]});
export const childModules = Object.freeze({"observatory-heights":"./observatory-heights/observatory-heights.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
