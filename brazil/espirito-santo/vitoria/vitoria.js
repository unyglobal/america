// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"vitoria","repository":"america","path":"brazil/espirito-santo/vitoria","depth":3,"parent":"brazil/espirito-santo","children":["regiao-i-centro-dois","regiao-i-centro-quatro","regiao-i-centro-um"]});
export const childModules = Object.freeze({"regiao-i-centro-dois":"./regiao-i-centro-dois/regiao-i-centro-dois.js","regiao-i-centro-quatro":"./regiao-i-centro-quatro/regiao-i-centro-quatro.js","regiao-i-centro-um":"./regiao-i-centro-um/regiao-i-centro-um.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
