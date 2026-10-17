// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bella-vista","repository":"america","path":"dominican-republic/nacional/bella-vista","depth":3,"parent":"dominican-republic/nacional","children":["la-esperilla"]});
export const childModules = Object.freeze({"la-esperilla":"./la-esperilla/la-esperilla.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
