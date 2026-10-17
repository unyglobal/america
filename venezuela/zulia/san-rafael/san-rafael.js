// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"san-rafael","repository":"america","path":"venezuela/zulia/san-rafael","depth":3,"parent":"venezuela/zulia","children":["las-cabimas"]});
export const childModules = Object.freeze({"las-cabimas":"./las-cabimas/las-cabimas.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
