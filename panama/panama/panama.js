// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"panama","repository":"america","path":"panama/panama","depth":2,"parent":"panama","children":["alcalde-diaz","ancon","chilibre","curundu","el-chorrillo","juan-diaz","la-cabima","las-cumbres","nuevo-belen","panama-city","parque-lefevre","rio-abajo","san-miguelito","tocumen"]});
export const childModules = Object.freeze({"alcalde-diaz":"./alcalde-diaz/alcalde-diaz.js","ancon":"./ancon/ancon.js","chilibre":"./chilibre/chilibre.js","curundu":"./curundu/curundu.js","el-chorrillo":"./el-chorrillo/el-chorrillo.js","juan-diaz":"./juan-diaz/juan-diaz.js","la-cabima":"./la-cabima/la-cabima.js","las-cumbres":"./las-cumbres/las-cumbres.js","nuevo-belen":"./nuevo-belen/nuevo-belen.js","panama-city":"./panama-city/panama-city.js","parque-lefevre":"./parque-lefevre/parque-lefevre.js","rio-abajo":"./rio-abajo/rio-abajo.js","san-miguelito":"./san-miguelito/san-miguelito.js","tocumen":"./tocumen/tocumen.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
