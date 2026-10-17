// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"wanica-district","repository":"america","path":"suriname/wanica-district","depth":2,"parent":"suriname","children":["lelydorp","pontbuiten"]});
export const childModules = Object.freeze({"lelydorp":"./lelydorp/lelydorp.js","pontbuiten":"./pontbuiten/pontbuiten.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
