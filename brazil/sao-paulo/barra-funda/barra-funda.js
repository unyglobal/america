// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"barra-funda","repository":"america","path":"brazil/sao-paulo/barra-funda","depth":3,"parent":"brazil/sao-paulo","children":["palmeiras-barra-funda"]});
export const childModules = Object.freeze({"palmeiras-barra-funda":"./palmeiras-barra-funda/palmeiras-barra-funda.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
