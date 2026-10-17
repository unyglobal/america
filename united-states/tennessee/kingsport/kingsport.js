// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kingsport","repository":"america","path":"united-states/tennessee/kingsport","depth":3,"parent":"united-states/tennessee","children":["cherokee-village"]});
export const childModules = Object.freeze({"cherokee-village":"./cherokee-village/cherokee-village.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
