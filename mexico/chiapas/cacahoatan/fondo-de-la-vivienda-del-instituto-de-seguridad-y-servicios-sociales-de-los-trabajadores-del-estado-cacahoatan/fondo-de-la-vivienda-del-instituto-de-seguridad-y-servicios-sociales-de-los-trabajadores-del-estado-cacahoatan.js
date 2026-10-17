// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"fondo-de-la-vivienda-del-instituto-de-seguridad-y-servicios-sociales-de-los-trabajadores-del-estado-cacahoatan","repository":"america","path":"mexico/chiapas/cacahoatan/fondo-de-la-vivienda-del-instituto-de-seguridad-y-servicios-sociales-de-los-trabajadores-del-estado-cacahoatan","depth":4,"parent":"mexico/chiapas/cacahoatan","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
