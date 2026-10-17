// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"heroica-caborca","repository":"america","path":"mexico/sonora/heroica-caborca","depth":3,"parent":"mexico/sonora","children":["centro","eleazar-ortiz"]});
export const childModules = Object.freeze({"centro":"./centro/centro.js","eleazar-ortiz":"./eleazar-ortiz/eleazar-ortiz.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
