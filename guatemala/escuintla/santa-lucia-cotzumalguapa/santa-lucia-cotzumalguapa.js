// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"santa-lucia-cotzumalguapa","repository":"america","path":"guatemala/escuintla/santa-lucia-cotzumalguapa","depth":3,"parent":"guatemala/escuintla","children":["colonia-eben-ezer","colonia-sultanita"]});
export const childModules = Object.freeze({"colonia-eben-ezer":"./colonia-eben-ezer/colonia-eben-ezer.js","colonia-sultanita":"./colonia-sultanita/colonia-sultanita.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
