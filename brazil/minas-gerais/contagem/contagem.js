// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"contagem","repository":"america","path":"brazil/minas-gerais/contagem","depth":3,"parent":"brazil/minas-gerais","children":["cachorro-sentado","vila-boa-vista"]});
export const childModules = Object.freeze({"cachorro-sentado":"./cachorro-sentado/cachorro-sentado.js","vila-boa-vista":"./vila-boa-vista/vila-boa-vista.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
