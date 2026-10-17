// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"vargas","repository":"america","path":"venezuela/vargas","depth":2,"parent":"venezuela","children":["caraballeda","catia-la-mar","la-guaira","maiquetia"]});
export const childModules = Object.freeze({"caraballeda":"./caraballeda/caraballeda.js","catia-la-mar":"./catia-la-mar/catia-la-mar.js","la-guaira":"./la-guaira/la-guaira.js","maiquetia":"./maiquetia/maiquetia.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
