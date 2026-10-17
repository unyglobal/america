// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"hato-mayor-province","repository":"america","path":"dominican-republic/hato-mayor-province","depth":2,"parent":"dominican-republic","children":["hato-mayor-del-rey"]});
export const childModules = Object.freeze({"hato-mayor-del-rey":"./hato-mayor-del-rey/hato-mayor-del-rey.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
