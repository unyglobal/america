// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"cuzco-department","repository":"america","path":"peru/cuzco-department","depth":2,"parent":"peru","children":["cusco","quillabamba","santa-ana","santiago","sicuani","wanchaq","yauri"]});
export const childModules = Object.freeze({"cusco":"./cusco/cusco.js","quillabamba":"./quillabamba/quillabamba.js","santa-ana":"./santa-ana/santa-ana.js","santiago":"./santiago/santiago.js","sicuani":"./sicuani/sicuani.js","wanchaq":"./wanchaq/wanchaq.js","yauri":"./yauri/yauri.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
