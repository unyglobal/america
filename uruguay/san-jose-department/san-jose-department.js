// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"san-jose-department","repository":"america","path":"uruguay/san-jose-department","depth":2,"parent":"uruguay","children":["delta-del-tigre","san-jose-de-mayo"]});
export const childModules = Object.freeze({"delta-del-tigre":"./delta-del-tigre/delta-del-tigre.js","san-jose-de-mayo":"./san-jose-de-mayo/san-jose-de-mayo.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
