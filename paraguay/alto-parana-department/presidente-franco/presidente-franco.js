// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"presidente-franco","repository":"america","path":"paraguay/alto-parana-department/presidente-franco","depth":3,"parent":"paraguay/alto-parana-department","children":["san-rafael"]});
export const childModules = Object.freeze({"san-rafael":"./san-rafael/san-rafael.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
