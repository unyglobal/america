// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"caldera","repository":"america","path":"chile/atacama/caldera","depth":3,"parent":"chile/atacama","children":["agua"]});
export const childModules = Object.freeze({"agua":"./agua/agua.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
