// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"santiago-momoxpan","repository":"america","path":"mexico/puebla/santiago-momoxpan","depth":3,"parent":"mexico/puebla","children":["alvaro-obregon","ampliacion-momoxpa","atlaco","cipreses-de-santiag","obsidiana","residencial-exhacienda-la-carcana"]});
export const childModules = Object.freeze({"alvaro-obregon":"./alvaro-obregon/alvaro-obregon.js","ampliacion-momoxpa":"./ampliacion-momoxpa/ampliacion-momoxpa.js","atlaco":"./atlaco/atlaco.js","cipreses-de-santiag":"./cipreses-de-santiag/cipreses-de-santiag.js","obsidiana":"./obsidiana/obsidiana.js","residencial-exhacienda-la-carcana":"./residencial-exhacienda-la-carcana/residencial-exhacienda-la-carcana.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
