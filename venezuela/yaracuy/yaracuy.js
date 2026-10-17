// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"yaracuy","repository":"america","path":"venezuela/yaracuy","depth":2,"parent":"venezuela","children":["aroa","boraure","chivacoa","cocorote","guama","nirgua","sabana-de-parra","san-felipe","urachiche","yaritagua","yumare"]});
export const childModules = Object.freeze({"aroa":"./aroa/aroa.js","boraure":"./boraure/boraure.js","chivacoa":"./chivacoa/chivacoa.js","cocorote":"./cocorote/cocorote.js","guama":"./guama/guama.js","nirgua":"./nirgua/nirgua.js","sabana-de-parra":"./sabana-de-parra/sabana-de-parra.js","san-felipe":"./san-felipe/san-felipe.js","urachiche":"./urachiche/urachiche.js","yaritagua":"./yaritagua/yaritagua.js","yumare":"./yumare/yumare.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
