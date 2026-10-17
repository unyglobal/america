// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"buenos-aires-f-d","repository":"america","path":"argentina/buenos-aires-f-d","depth":2,"parent":"argentina","children":["balvanera","barracas","belgrano","boedo","buenos-aires","colegiales","palermo","retiro","villa-lugano","villa-ortuzar","villa-santa-rita"]});
export const childModules = Object.freeze({"balvanera":"./balvanera/balvanera.js","barracas":"./barracas/barracas.js","belgrano":"./belgrano/belgrano.js","boedo":"./boedo/boedo.js","buenos-aires":"./buenos-aires/buenos-aires.js","colegiales":"./colegiales/colegiales.js","palermo":"./palermo/palermo.js","retiro":"./retiro/retiro.js","villa-lugano":"./villa-lugano/villa-lugano.js","villa-ortuzar":"./villa-ortuzar/villa-ortuzar.js","villa-santa-rita":"./villa-santa-rita/villa-santa-rita.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
