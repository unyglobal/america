// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"topeka","repository":"america","path":"united-states/kansas/topeka","depth":3,"parent":"united-states/kansas","children":["monroe"]});
export const childModules = Object.freeze({"monroe":"./monroe/monroe.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
