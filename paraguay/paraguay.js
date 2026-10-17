// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"paraguay","repository":"america","path":"paraguay","depth":1,"parent":"","children":["alto-parana-department","amambay-department","asuncion","boqueron-department","caaguazu-department","caazapa","central-department","concepcion","cordillera-department","guaira","itapua","misiones-department","neembucu-department","presidente-hayes"]});
export const childModules = Object.freeze({"alto-parana-department":"./alto-parana-department/alto-parana-department.js","amambay-department":"./amambay-department/amambay-department.js","asuncion":"./asuncion/asuncion.js","boqueron-department":"./boqueron-department/boqueron-department.js","caaguazu-department":"./caaguazu-department/caaguazu-department.js","caazapa":"./caazapa/caazapa.js","central-department":"./central-department/central-department.js","concepcion":"./concepcion/concepcion.js","cordillera-department":"./cordillera-department/cordillera-department.js","guaira":"./guaira/guaira.js","itapua":"./itapua/itapua.js","misiones-department":"./misiones-department/misiones-department.js","neembucu-department":"./neembucu-department/neembucu-department.js","presidente-hayes":"./presidente-hayes/presidente-hayes.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
