// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ajalpan","repository":"america","path":"mexico/puebla/ajalpan","depth":3,"parent":"mexico/puebla","children":["coculco","fatima","guadalupe","morelos","tequexco"]});
export const childModules = Object.freeze({"coculco":"./coculco/coculco.js","fatima":"./fatima/fatima.js","guadalupe":"./guadalupe/guadalupe.js","morelos":"./morelos/morelos.js","tequexco":"./tequexco/tequexco.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
