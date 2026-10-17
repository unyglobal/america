// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"nueva-gerona","repository":"america","path":"cuba/isla-de-la-juventud/nueva-gerona","depth":3,"parent":"cuba/isla-de-la-juventud","children":["abel-santa-maria","francoy","reparto-alturas-de-nueva-gerona"]});
export const childModules = Object.freeze({"abel-santa-maria":"./abel-santa-maria/abel-santa-maria.js","francoy":"./francoy/francoy.js","reparto-alturas-de-nueva-gerona":"./reparto-alturas-de-nueva-gerona/reparto-alturas-de-nueva-gerona.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
