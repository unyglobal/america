// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"guantanamo-province","repository":"america","path":"cuba/guantanamo-province","depth":2,"parent":"cuba","children":["baracoa","guantanamo","maisi","rio-guayabal-de-yateras"]});
export const childModules = Object.freeze({"baracoa":"./baracoa/baracoa.js","guantanamo":"./guantanamo/guantanamo.js","maisi":"./maisi/maisi.js","rio-guayabal-de-yateras":"./rio-guayabal-de-yateras/rio-guayabal-de-yateras.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
