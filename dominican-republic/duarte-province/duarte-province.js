// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"duarte-province","repository":"america","path":"dominican-republic/duarte-province","depth":2,"parent":"dominican-republic","children":["san-francisco-de-macoris"]});
export const childModules = Object.freeze({"san-francisco-de-macoris":"./san-francisco-de-macoris/san-francisco-de-macoris.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
