// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"laurinburg","repository":"america","path":"united-states/north-carolina/laurinburg","depth":3,"parent":"united-states/north-carolina","children":["norman-heights"]});
export const childModules = Object.freeze({"norman-heights":"./norman-heights/norman-heights.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
