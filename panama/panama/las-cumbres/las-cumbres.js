// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"las-cumbres","repository":"america","path":"panama/panama/las-cumbres","depth":3,"parent":"panama/panama","children":["barriada-12-de-julio","las-lajas","santa-monica","urbanizacion-villas-del-lago"]});
export const childModules = Object.freeze({"barriada-12-de-julio":"./barriada-12-de-julio/barriada-12-de-julio.js","las-lajas":"./las-lajas/las-lajas.js","santa-monica":"./santa-monica/santa-monica.js","urbanizacion-villas-del-lago":"./urbanizacion-villas-del-lago/urbanizacion-villas-del-lago.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
