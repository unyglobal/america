// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"huanta","repository":"america","path":"peru/ayacucho/huanta","depth":3,"parent":"peru/ayacucho","children":["chancaray","hospital","luccmapata"]});
export const childModules = Object.freeze({"chancaray":"./chancaray/chancaray.js","hospital":"./hospital/hospital.js","luccmapata":"./luccmapata/luccmapata.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
