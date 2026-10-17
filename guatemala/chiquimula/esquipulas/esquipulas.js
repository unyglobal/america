// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"esquipulas","repository":"america","path":"guatemala/chiquimula/esquipulas","depth":3,"parent":"guatemala/chiquimula","children":["los-arcos","quirio-catano","san-juan","san-mateo-ii","santa-gudelia","santa-marta","vista-hermosa"]});
export const childModules = Object.freeze({"los-arcos":"./los-arcos/los-arcos.js","quirio-catano":"./quirio-catano/quirio-catano.js","san-juan":"./san-juan/san-juan.js","san-mateo-ii":"./san-mateo-ii/san-mateo-ii.js","santa-gudelia":"./santa-gudelia/santa-gudelia.js","santa-marta":"./santa-marta/santa-marta.js","vista-hermosa":"./vista-hermosa/vista-hermosa.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
