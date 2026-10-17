// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"carrefour","repository":"america","path":"haiti/ouest/carrefour","depth":3,"parent":"haiti/ouest","children":["cote-plage","mahotiere","tesserot","waney-bijou"]});
export const childModules = Object.freeze({"cote-plage":"./cote-plage/cote-plage.js","mahotiere":"./mahotiere/mahotiere.js","tesserot":"./tesserot/tesserot.js","waney-bijou":"./waney-bijou/waney-bijou.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
