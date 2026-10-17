// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"santa-anita","repository":"america","path":"mexico/jalisco/santa-anita","depth":3,"parent":"mexico/jalisco","children":["espana","infonavit-santa-anita","mirador-juan-arias","ponciano-arriaga"]});
export const childModules = Object.freeze({"espana":"./espana/espana.js","infonavit-santa-anita":"./infonavit-santa-anita/infonavit-santa-anita.js","mirador-juan-arias":"./mirador-juan-arias/mirador-juan-arias.js","ponciano-arriaga":"./ponciano-arriaga/ponciano-arriaga.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
