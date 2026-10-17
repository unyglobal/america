// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"los-puertos-de-altagracia","repository":"america","path":"venezuela/zulia/los-puertos-de-altagracia","depth":3,"parent":"venezuela/zulia","children":["las-playitas","urbanizacion-la-salina"]});
export const childModules = Object.freeze({"las-playitas":"./las-playitas/las-playitas.js","urbanizacion-la-salina":"./urbanizacion-la-salina/urbanizacion-la-salina.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
