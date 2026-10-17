// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"la-paz-department","repository":"america","path":"bolivia/la-paz-department","depth":2,"parent":"bolivia","children":["achocalla","caranavi","la-paz","laja","viacha"]});
export const childModules = Object.freeze({"achocalla":"./achocalla/achocalla.js","caranavi":"./caranavi/caranavi.js","la-paz":"./la-paz/la-paz.js","laja":"./laja/laja.js","viacha":"./viacha/viacha.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
