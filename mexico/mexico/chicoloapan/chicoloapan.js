// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"chicoloapan","repository":"america","path":"mexico/mexico/chicoloapan","depth":3,"parent":"mexico/mexico","children":["los-angeles"]});
export const childModules = Object.freeze({"los-angeles":"./los-angeles/los-angeles.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
