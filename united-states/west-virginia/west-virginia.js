// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"west-virginia","repository":"america","path":"united-states/west-virginia","depth":2,"parent":"united-states","children":["beckley","clarksburg","fairmont","martinsburg","morgantown","parkersburg","weirton","weirton-heights"]});
export const childModules = Object.freeze({"beckley":"./beckley/beckley.js","clarksburg":"./clarksburg/clarksburg.js","fairmont":"./fairmont/fairmont.js","martinsburg":"./martinsburg/martinsburg.js","morgantown":"./morgantown/morgantown.js","parkersburg":"./parkersburg/parkersburg.js","weirton":"./weirton/weirton.js","weirton-heights":"./weirton-heights/weirton-heights.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
