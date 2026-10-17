// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sucre-department","repository":"america","path":"colombia/sucre-department","depth":2,"parent":"colombia","children":["corozal","galeras","sampues","san-benito-abad","san-luis-de-since","san-marcos","san-onofre","santiago-de-tolu","sincelejo","sucre","tolu-viejo"]});
export const childModules = Object.freeze({"corozal":"./corozal/corozal.js","galeras":"./galeras/galeras.js","sampues":"./sampues/sampues.js","san-benito-abad":"./san-benito-abad/san-benito-abad.js","san-luis-de-since":"./san-luis-de-since/san-luis-de-since.js","san-marcos":"./san-marcos/san-marcos.js","san-onofre":"./san-onofre/san-onofre.js","santiago-de-tolu":"./santiago-de-tolu/santiago-de-tolu.js","sincelejo":"./sincelejo/sincelejo.js","sucre":"./sucre/sucre.js","tolu-viejo":"./tolu-viejo/tolu-viejo.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
