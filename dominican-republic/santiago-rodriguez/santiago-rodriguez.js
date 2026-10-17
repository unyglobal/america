// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"santiago-rodriguez","repository":"america","path":"dominican-republic/santiago-rodriguez","depth":2,"parent":"dominican-republic","children":["san-ignacio-de-sabaneta"]});
export const childModules = Object.freeze({"san-ignacio-de-sabaneta":"./san-ignacio-de-sabaneta/san-ignacio-de-sabaneta.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
