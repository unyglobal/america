// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"cacahoatan","repository":"america","path":"mexico/chiapas/cacahoatan","depth":3,"parent":"mexico/chiapas","children":["alvaro-obregon","belisario-dominguez","emiliano-zapata","fondo-de-la-vivienda-del-instituto-de-seguridad-y-servicios-sociales-de-los-trabajadores-del-estado-cacahoatan","la-unidad","miguel-hidalgo","monte-bello","tres-hermanos"]});
export const childModules = Object.freeze({"alvaro-obregon":"./alvaro-obregon/alvaro-obregon.js","belisario-dominguez":"./belisario-dominguez/belisario-dominguez.js","emiliano-zapata":"./emiliano-zapata/emiliano-zapata.js","fondo-de-la-vivienda-del-instituto-de-seguridad-y-servicios-sociales-de-los-trabajadores-del-estado-cacahoatan":"./fondo-de-la-vivienda-del-instituto-de-seguridad-y-servicios-sociales-de-los-trabajadores-del-estado-cacahoatan/fondo-de-la-vivienda-del-instituto-de-seguridad-y-servicios-sociales-de-los-trabajadores-del-estado-cacahoatan.js","la-unidad":"./la-unidad/la-unidad.js","miguel-hidalgo":"./miguel-hidalgo/miguel-hidalgo.js","monte-bello":"./monte-bello/monte-bello.js","tres-hermanos":"./tres-hermanos/tres-hermanos.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
