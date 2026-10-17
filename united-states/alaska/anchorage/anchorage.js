// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"anchorage","repository":"america","path":"united-states/alaska/anchorage","depth":3,"parent":"united-states/alaska","children":["downtown"]});
export const childModules = Object.freeze({"downtown":"./downtown/downtown.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
