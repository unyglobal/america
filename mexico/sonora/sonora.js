// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sonora","repository":"america","path":"mexico/sonora","depth":2,"parent":"mexico","children":["agua-prieta","cananea","ciudad-obregon","empalme","esperanza","hermosillo","heroica-caborca","heroica-guaymas","huatabampo","magdalena-de-kino","miguel-aleman-la-doce","navojoa","puerto-penasco","san-luis-rio-colorado"]});
export const childModules = Object.freeze({"agua-prieta":"./agua-prieta/agua-prieta.js","cananea":"./cananea/cananea.js","ciudad-obregon":"./ciudad-obregon/ciudad-obregon.js","empalme":"./empalme/empalme.js","esperanza":"./esperanza/esperanza.js","hermosillo":"./hermosillo/hermosillo.js","heroica-caborca":"./heroica-caborca/heroica-caborca.js","heroica-guaymas":"./heroica-guaymas/heroica-guaymas.js","huatabampo":"./huatabampo/huatabampo.js","magdalena-de-kino":"./magdalena-de-kino/magdalena-de-kino.js","miguel-aleman-la-doce":"./miguel-aleman-la-doce/miguel-aleman-la-doce.js","navojoa":"./navojoa/navojoa.js","puerto-penasco":"./puerto-penasco/puerto-penasco.js","san-luis-rio-colorado":"./san-luis-rio-colorado/san-luis-rio-colorado.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
