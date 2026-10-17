// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ciudad-sandino","repository":"america","path":"nicaragua/managua-department/ciudad-sandino","depth":3,"parent":"nicaragua/managua-department","children":["bella-cruz"]});
export const childModules = Object.freeze({"bella-cruz":"./bella-cruz/bella-cruz.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
