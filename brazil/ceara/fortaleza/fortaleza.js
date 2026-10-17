// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"fortaleza","repository":"america","path":"brazil/ceara/fortaleza","depth":3,"parent":"brazil/ceara","children":["arraial-moura-brasil","comunidade-do-tirol","morro-do-ouro"]});
export const childModules = Object.freeze({"arraial-moura-brasil":"./arraial-moura-brasil/arraial-moura-brasil.js","comunidade-do-tirol":"./comunidade-do-tirol/comunidade-do-tirol.js","morro-do-ouro":"./morro-do-ouro/morro-do-ouro.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
