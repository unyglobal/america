// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"rioverde","repository":"america","path":"mexico/san-luis-potosi/rioverde","depth":3,"parent":"mexico/san-luis-potosi","children":["la-morita","los-naranjos"]});
export const childModules = Object.freeze({"la-morita":"./la-morita/la-morita.js","los-naranjos":"./los-naranjos/los-naranjos.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
