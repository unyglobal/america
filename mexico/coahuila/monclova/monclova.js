// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"monclova","repository":"america","path":"mexico/coahuila/monclova","depth":3,"parent":"mexico/coahuila","children":["altamirano","chapultepec","loma-de-la-cantera","saltillo","telegrafista","villasenor-ciento-ochenta"]});
export const childModules = Object.freeze({"altamirano":"./altamirano/altamirano.js","chapultepec":"./chapultepec/chapultepec.js","loma-de-la-cantera":"./loma-de-la-cantera/loma-de-la-cantera.js","saltillo":"./saltillo/saltillo.js","telegrafista":"./telegrafista/telegrafista.js","villasenor-ciento-ochenta":"./villasenor-ciento-ochenta/villasenor-ciento-ochenta.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
