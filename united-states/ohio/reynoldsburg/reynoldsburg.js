// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"reynoldsburg","repository":"america","path":"united-states/ohio/reynoldsburg","depth":3,"parent":"united-states/ohio","children":["briarcliff","rose-hill-heights"]});
export const childModules = Object.freeze({"briarcliff":"./briarcliff/briarcliff.js","rose-hill-heights":"./rose-hill-heights/rose-hill-heights.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
