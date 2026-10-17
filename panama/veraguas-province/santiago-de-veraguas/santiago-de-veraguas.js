// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"santiago-de-veraguas","repository":"america","path":"panama/veraguas-province/santiago-de-veraguas","depth":3,"parent":"panama/veraguas-province","children":["barriada-bajada-de-los-chorros","barriada-el-carmen","barriada-las-margaritas","barriada-linda","barriada-paso-las-tablas","la-primavera","residencial-luz-mar","residencial-vista-bella","urbanizacion-las-colinas","urbanizacion-rio-escondido"]});
export const childModules = Object.freeze({"barriada-bajada-de-los-chorros":"./barriada-bajada-de-los-chorros/barriada-bajada-de-los-chorros.js","barriada-el-carmen":"./barriada-el-carmen/barriada-el-carmen.js","barriada-las-margaritas":"./barriada-las-margaritas/barriada-las-margaritas.js","barriada-linda":"./barriada-linda/barriada-linda.js","barriada-paso-las-tablas":"./barriada-paso-las-tablas/barriada-paso-las-tablas.js","la-primavera":"./la-primavera/la-primavera.js","residencial-luz-mar":"./residencial-luz-mar/residencial-luz-mar.js","residencial-vista-bella":"./residencial-vista-bella/residencial-vista-bella.js","urbanizacion-las-colinas":"./urbanizacion-las-colinas/urbanizacion-las-colinas.js","urbanizacion-rio-escondido":"./urbanizacion-rio-escondido/urbanizacion-rio-escondido.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
