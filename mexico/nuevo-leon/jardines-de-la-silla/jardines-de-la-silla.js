// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"jardines-de-la-silla","repository":"america","path":"mexico/nuevo-leon/jardines-de-la-silla","depth":3,"parent":"mexico/nuevo-leon","children":["heroe-de-nacozari","privada-jardines-residencial","salvador-chavez-mora"]});
export const childModules = Object.freeze({"heroe-de-nacozari":"./heroe-de-nacozari/heroe-de-nacozari.js","privada-jardines-residencial":"./privada-jardines-residencial/privada-jardines-residencial.js","salvador-chavez-mora":"./salvador-chavez-mora/salvador-chavez-mora.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
