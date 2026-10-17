// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"san-cristobal","repository":"america","path":"dominican-republic/san-cristobal","depth":2,"parent":"dominican-republic","children":["bajos-de-haina","villa-altagracia"]});
export const childModules = Object.freeze({"bajos-de-haina":"./bajos-de-haina/bajos-de-haina.js","villa-altagracia":"./villa-altagracia/villa-altagracia.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
