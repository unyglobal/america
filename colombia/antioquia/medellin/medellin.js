// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"medellin","repository":"america","path":"colombia/antioquia/medellin","depth":3,"parent":"colombia/antioquia","children":["calle-nueva","colon","guayaquil","la-alpujarra","las-palmas","san-jose","triste"]});
export const childModules = Object.freeze({"calle-nueva":"./calle-nueva/calle-nueva.js","colon":"./colon/colon.js","guayaquil":"./guayaquil/guayaquil.js","la-alpujarra":"./la-alpujarra/la-alpujarra.js","las-palmas":"./las-palmas/las-palmas.js","san-jose":"./san-jose/san-jose.js","triste":"./triste/triste.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
