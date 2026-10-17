// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"valle-department","repository":"america","path":"honduras/valle-department","depth":2,"parent":"honduras","children":["langue","san-lorenzo"]});
export const childModules = Object.freeze({"langue":"./langue/langue.js","san-lorenzo":"./san-lorenzo/san-lorenzo.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
