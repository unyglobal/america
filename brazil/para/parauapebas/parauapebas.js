// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"parauapebas","repository":"america","path":"brazil/para/parauapebas","depth":3,"parent":"brazil/para","children":["bairro-maranhaozinho","bairro-primavera","bairro-uniao"]});
export const childModules = Object.freeze({"bairro-maranhaozinho":"./bairro-maranhaozinho/bairro-maranhaozinho.js","bairro-primavera":"./bairro-primavera/bairro-primavera.js","bairro-uniao":"./bairro-uniao/bairro-uniao.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
