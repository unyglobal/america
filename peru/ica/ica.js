// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ica","repository":"america","path":"peru/ica","depth":2,"parent":"peru","children":["chincha-alta","minas-de-marcona","nazca","pisco","san-clemente"]});
export const childModules = Object.freeze({"chincha-alta":"./chincha-alta/chincha-alta.js","minas-de-marcona":"./minas-de-marcona/minas-de-marcona.js","nazca":"./nazca/nazca.js","pisco":"./pisco/pisco.js","san-clemente":"./san-clemente/san-clemente.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
