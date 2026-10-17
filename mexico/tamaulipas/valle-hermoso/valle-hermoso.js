// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"valle-hermoso","repository":"america","path":"mexico/tamaulipas/valle-hermoso","depth":3,"parent":"mexico/tamaulipas","children":["bernal-mares","burocratas","club-de-leones","eduardo-chavez","emiliano-zapata","madero","mexico","obrera","zona-centro"]});
export const childModules = Object.freeze({"bernal-mares":"./bernal-mares/bernal-mares.js","burocratas":"./burocratas/burocratas.js","club-de-leones":"./club-de-leones/club-de-leones.js","eduardo-chavez":"./eduardo-chavez/eduardo-chavez.js","emiliano-zapata":"./emiliano-zapata/emiliano-zapata.js","madero":"./madero/madero.js","mexico":"./mexico/mexico.js","obrera":"./obrera/obrera.js","zona-centro":"./zona-centro/zona-centro.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
