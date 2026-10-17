// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"abreu-e-lima","repository":"america","path":"brazil/pernambuco/abreu-e-lima","depth":3,"parent":"brazil/pernambuco","children":["alto-da-bela-vista","vila-miguel-arraes"]});
export const childModules = Object.freeze({"alto-da-bela-vista":"./alto-da-bela-vista/alto-da-bela-vista.js","vila-miguel-arraes":"./vila-miguel-arraes/vila-miguel-arraes.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
