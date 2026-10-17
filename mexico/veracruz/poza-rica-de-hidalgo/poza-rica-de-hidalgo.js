// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"poza-rica-de-hidalgo","repository":"america","path":"mexico/veracruz/poza-rica-de-hidalgo","depth":3,"parent":"mexico/veracruz","children":["chapultepec","laredo","ricardo-flores-magon"]});
export const childModules = Object.freeze({"chapultepec":"./chapultepec/chapultepec.js","laredo":"./laredo/laredo.js","ricardo-flores-magon":"./ricardo-flores-magon/ricardo-flores-magon.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
