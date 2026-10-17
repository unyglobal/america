// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"cordoba","repository":"america","path":"mexico/veracruz/cordoba","depth":3,"parent":"mexico/veracruz","children":["rodriguez-clara","san-ignacio"]});
export const childModules = Object.freeze({"rodriguez-clara":"./rodriguez-clara/rodriguez-clara.js","san-ignacio":"./san-ignacio/san-ignacio.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
