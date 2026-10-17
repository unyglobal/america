// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"lagoa-santa","repository":"america","path":"brazil/minas-gerais/lagoa-santa","depth":3,"parent":"brazil/minas-gerais","children":["joana-d-arc","miguel-a-salomao","vila-pinto-coelho","vila-santa-cecilia"]});
export const childModules = Object.freeze({"joana-d-arc":"./joana-d-arc/joana-d-arc.js","miguel-a-salomao":"./miguel-a-salomao/miguel-a-salomao.js","vila-pinto-coelho":"./vila-pinto-coelho/vila-pinto-coelho.js","vila-santa-cecilia":"./vila-santa-cecilia/vila-santa-cecilia.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
