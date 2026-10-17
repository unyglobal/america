// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"crucecita","repository":"america","path":"mexico/oaxaca/crucecita","depth":3,"parent":"mexico/oaxaca","children":["ampliacion-j","colonia-h","coyula-sector-u","de-la-marina","sector-h2","sector-i","sector-j","sector-k","sector-r","sector-s"]});
export const childModules = Object.freeze({"ampliacion-j":"./ampliacion-j/ampliacion-j.js","colonia-h":"./colonia-h/colonia-h.js","coyula-sector-u":"./coyula-sector-u/coyula-sector-u.js","de-la-marina":"./de-la-marina/de-la-marina.js","sector-h2":"./sector-h2/sector-h2.js","sector-i":"./sector-i/sector-i.js","sector-j":"./sector-j/sector-j.js","sector-k":"./sector-k/sector-k.js","sector-r":"./sector-r/sector-r.js","sector-s":"./sector-s/sector-s.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
