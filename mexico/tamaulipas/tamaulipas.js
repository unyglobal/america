// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tamaulipas","repository":"america","path":"mexico/tamaulipas","depth":2,"parent":"mexico","children":["altamira","ciudad-madero","ciudad-mante","ciudad-miguel-aleman","ciudad-rio-bravo","ciudad-victoria","heroica-matamoros","miramar","nuevo-laredo","reynosa","san-fernando","tampico","valle-hermoso"]});
export const childModules = Object.freeze({"altamira":"./altamira/altamira.js","ciudad-madero":"./ciudad-madero/ciudad-madero.js","ciudad-mante":"./ciudad-mante/ciudad-mante.js","ciudad-miguel-aleman":"./ciudad-miguel-aleman/ciudad-miguel-aleman.js","ciudad-rio-bravo":"./ciudad-rio-bravo/ciudad-rio-bravo.js","ciudad-victoria":"./ciudad-victoria/ciudad-victoria.js","heroica-matamoros":"./heroica-matamoros/heroica-matamoros.js","miramar":"./miramar/miramar.js","nuevo-laredo":"./nuevo-laredo/nuevo-laredo.js","reynosa":"./reynosa/reynosa.js","san-fernando":"./san-fernando/san-fernando.js","tampico":"./tampico/tampico.js","valle-hermoso":"./valle-hermoso/valle-hermoso.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
