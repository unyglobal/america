// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"costa-rica","repository":"america","path":"mexico/sinaloa/costa-rica","depth":3,"parent":"mexico/sinaloa","children":["barrio-estacion","benito-juarez-norte","benito-juarez-sur","canitas","centro","constituyentes","ignacio-zaragoza","independencia","ingenio","juan-de-dios-batiz","las-carpas","loma-linda","los-chinitos","stasac","veracruz"]});
export const childModules = Object.freeze({"barrio-estacion":"./barrio-estacion/barrio-estacion.js","benito-juarez-norte":"./benito-juarez-norte/benito-juarez-norte.js","benito-juarez-sur":"./benito-juarez-sur/benito-juarez-sur.js","canitas":"./canitas/canitas.js","centro":"./centro/centro.js","constituyentes":"./constituyentes/constituyentes.js","ignacio-zaragoza":"./ignacio-zaragoza/ignacio-zaragoza.js","independencia":"./independencia/independencia.js","ingenio":"./ingenio/ingenio.js","juan-de-dios-batiz":"./juan-de-dios-batiz/juan-de-dios-batiz.js","las-carpas":"./las-carpas/las-carpas.js","loma-linda":"./loma-linda/loma-linda.js","los-chinitos":"./los-chinitos/los-chinitos.js","stasac":"./stasac/stasac.js","veracruz":"./veracruz/veracruz.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
