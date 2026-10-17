// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ciudad-victoria","repository":"america","path":"mexico/tamaulipas/ciudad-victoria","depth":3,"parent":"mexico/tamaulipas","children":["colonia-del-norte","hogares-modernos","jacarandas","los-arcos","morelos","quinta-laura","residencial-las-palmas","residencial-selectas","san-francisco","sierra-gorda"]});
export const childModules = Object.freeze({"colonia-del-norte":"./colonia-del-norte/colonia-del-norte.js","hogares-modernos":"./hogares-modernos/hogares-modernos.js","jacarandas":"./jacarandas/jacarandas.js","los-arcos":"./los-arcos/los-arcos.js","morelos":"./morelos/morelos.js","quinta-laura":"./quinta-laura/quinta-laura.js","residencial-las-palmas":"./residencial-las-palmas/residencial-las-palmas.js","residencial-selectas":"./residencial-selectas/residencial-selectas.js","san-francisco":"./san-francisco/san-francisco.js","sierra-gorda":"./sierra-gorda/sierra-gorda.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
