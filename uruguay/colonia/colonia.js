// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"colonia","repository":"america","path":"uruguay/colonia","depth":2,"parent":"uruguay","children":["carmelo","colonia-del-sacramento"]});
export const childModules = Object.freeze({"carmelo":"./carmelo/carmelo.js","colonia-del-sacramento":"./colonia-del-sacramento/colonia-del-sacramento.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
