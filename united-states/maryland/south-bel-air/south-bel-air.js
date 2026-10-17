// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"south-bel-air","repository":"america","path":"united-states/maryland/south-bel-air","depth":3,"parent":"united-states/maryland","children":["country-village","homestead-village"]});
export const childModules = Object.freeze({"country-village":"./country-village/country-village.js","homestead-village":"./homestead-village/homestead-village.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
