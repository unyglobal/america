// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"la-paz","repository":"america","path":"mexico/baja-california-sur/la-paz","depth":3,"parent":"mexico/baja-california-sur","children":["1-de-mayo","california","los-olivos","los-olivos-la-paz","perla","petrolera","petrolera-la-paz","primero-de-mayo","zucasa"]});
export const childModules = Object.freeze({"1-de-mayo":"./1-de-mayo/1-de-mayo.js","california":"./california/california.js","los-olivos":"./los-olivos/los-olivos.js","los-olivos-la-paz":"./los-olivos-la-paz/los-olivos-la-paz.js","perla":"./perla/perla.js","petrolera":"./petrolera/petrolera.js","petrolera-la-paz":"./petrolera-la-paz/petrolera-la-paz.js","primero-de-mayo":"./primero-de-mayo/primero-de-mayo.js","zucasa":"./zucasa/zucasa.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
