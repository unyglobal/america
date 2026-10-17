// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"san-juan-laventille","repository":"america","path":"trinidad-and-tobago/san-juan-laventille","depth":2,"parent":"trinidad-and-tobago","children":["laventille"]});
export const childModules = Object.freeze({"laventille":"./laventille/laventille.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
