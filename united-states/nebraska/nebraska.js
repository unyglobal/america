// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"nebraska","repository":"america","path":"united-states/nebraska","depth":2,"parent":"united-states","children":["kearney","la-vista","north-platte","omaha","papillion"]});
export const childModules = Object.freeze({"kearney":"./kearney/kearney.js","la-vista":"./la-vista/la-vista.js","north-platte":"./north-platte/north-platte.js","omaha":"./omaha/omaha.js","papillion":"./papillion/papillion.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
