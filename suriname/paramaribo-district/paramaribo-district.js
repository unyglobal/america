// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"paramaribo-district","repository":"america","path":"suriname/paramaribo-district","depth":2,"parent":"suriname","children":["beekhuizen","blauwgrond","flora","latour","munder-buiten","paramaribo","rainville","tammenga","weg-naar-zee","welgelegen"]});
export const childModules = Object.freeze({"beekhuizen":"./beekhuizen/beekhuizen.js","blauwgrond":"./blauwgrond/blauwgrond.js","flora":"./flora/flora.js","latour":"./latour/latour.js","munder-buiten":"./munder-buiten/munder-buiten.js","paramaribo":"./paramaribo/paramaribo.js","rainville":"./rainville/rainville.js","tammenga":"./tammenga/tammenga.js","weg-naar-zee":"./weg-naar-zee/weg-naar-zee.js","welgelegen":"./welgelegen/welgelegen.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
