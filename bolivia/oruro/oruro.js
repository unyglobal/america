// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"oruro","repository":"america","path":"bolivia/oruro","depth":2,"parent":"bolivia","children":["huanuni"]});
export const childModules = Object.freeze({"huanuni":"./huanuni/huanuni.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
