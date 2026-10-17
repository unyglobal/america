// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"caratinga","repository":"america","path":"brazil/minas-gerais/caratinga","depth":3,"parent":"brazil/minas-gerais","children":["loteamento-sebastiao-cirilo-veloso","santa-zita"]});
export const childModules = Object.freeze({"loteamento-sebastiao-cirilo-veloso":"./loteamento-sebastiao-cirilo-veloso/loteamento-sebastiao-cirilo-veloso.js","santa-zita":"./santa-zita/santa-zita.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
