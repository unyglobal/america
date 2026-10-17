// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"granma-province","repository":"america","path":"cuba/granma-province","depth":2,"parent":"cuba","children":["bartolome-maso","bayamo","campechuela","cauto-cristo","guisa","jiguani","manzanillo","media-luna","niquero","pilon","rio-cauto","yara"]});
export const childModules = Object.freeze({"bartolome-maso":"./bartolome-maso/bartolome-maso.js","bayamo":"./bayamo/bayamo.js","campechuela":"./campechuela/campechuela.js","cauto-cristo":"./cauto-cristo/cauto-cristo.js","guisa":"./guisa/guisa.js","jiguani":"./jiguani/jiguani.js","manzanillo":"./manzanillo/manzanillo.js","media-luna":"./media-luna/media-luna.js","niquero":"./niquero/niquero.js","pilon":"./pilon/pilon.js","rio-cauto":"./rio-cauto/rio-cauto.js","yara":"./yara/yara.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
