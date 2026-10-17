// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"arica","repository":"america","path":"chile/arica-y-parinacota-region/arica","depth":3,"parent":"chile/arica-y-parinacota-region","children":["chinchorro"]});
export const childModules = Object.freeze({"chinchorro":"./chinchorro/chinchorro.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
