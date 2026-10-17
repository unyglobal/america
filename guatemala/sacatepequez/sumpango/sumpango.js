// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sumpango","repository":"america","path":"guatemala/sacatepequez/sumpango","depth":3,"parent":"guatemala/sacatepequez","children":["chixote","los-cipresales","santa-rosita"]});
export const childModules = Object.freeze({"chixote":"./chixote/chixote.js","los-cipresales":"./los-cipresales/los-cipresales.js","santa-rosita":"./santa-rosita/santa-rosita.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
