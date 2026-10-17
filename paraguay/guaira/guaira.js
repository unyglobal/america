// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"guaira","repository":"america","path":"paraguay/guaira","depth":2,"parent":"paraguay","children":["villarrica"]});
export const childModules = Object.freeze({"villarrica":"./villarrica/villarrica.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
