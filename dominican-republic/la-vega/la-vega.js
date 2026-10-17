// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"la-vega","repository":"america","path":"dominican-republic/la-vega","depth":2,"parent":"dominican-republic","children":["constanza","jarabacoa"]});
export const childModules = Object.freeze({"constanza":"./constanza/constanza.js","jarabacoa":"./jarabacoa/jarabacoa.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
