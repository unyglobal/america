// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"san-francisco","repository":"america","path":"united-states/california/san-francisco","depth":3,"parent":"united-states/california","children":["civic-center"]});
export const childModules = Object.freeze({"civic-center":"./civic-center/civic-center.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
