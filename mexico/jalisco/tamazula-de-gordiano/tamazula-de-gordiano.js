// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tamazula-de-gordiano","repository":"america","path":"mexico/jalisco/tamazula-de-gordiano","depth":3,"parent":"mexico/jalisco","children":["cardenal","clavellinas","los-pinos"]});
export const childModules = Object.freeze({"cardenal":"./cardenal/cardenal.js","clavellinas":"./clavellinas/clavellinas.js","los-pinos":"./los-pinos/los-pinos.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
