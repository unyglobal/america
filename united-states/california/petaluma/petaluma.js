// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"petaluma","repository":"america","path":"united-states/california/petaluma","depth":3,"parent":"united-states/california","children":["east-petaluma"]});
export const childModules = Object.freeze({"east-petaluma":"./east-petaluma/east-petaluma.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
