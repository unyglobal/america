// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"monte-plata-province","repository":"america","path":"dominican-republic/monte-plata-province","depth":2,"parent":"dominican-republic","children":["bayaguana","monte-plata","sabana-grande-de-boya"]});
export const childModules = Object.freeze({"bayaguana":"./bayaguana/bayaguana.js","monte-plata":"./monte-plata/monte-plata.js","sabana-grande-de-boya":"./sabana-grande-de-boya/sabana-grande-de-boya.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
