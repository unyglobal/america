// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"heroica-guaymas","repository":"america","path":"mexico/sonora/heroica-guaymas","depth":3,"parent":"mexico/sonora","children":["centro","la-cantera","yucatan"]});
export const childModules = Object.freeze({"centro":"./centro/centro.js","la-cantera":"./la-cantera/la-cantera.js","yucatan":"./yucatan/yucatan.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
