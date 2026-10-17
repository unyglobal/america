// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"acayucan","repository":"america","path":"mexico/veracruz/acayucan","depth":3,"parent":"mexico/veracruz","children":["centro","cruz-verde","la-palma","san-diego","tamarindo","villalta","zapotal"]});
export const childModules = Object.freeze({"centro":"./centro/centro.js","cruz-verde":"./cruz-verde/cruz-verde.js","la-palma":"./la-palma/la-palma.js","san-diego":"./san-diego/san-diego.js","tamarindo":"./tamarindo/tamarindo.js","villalta":"./villalta/villalta.js","zapotal":"./zapotal/zapotal.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
