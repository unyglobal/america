// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"san-juan-de-los-lagos","repository":"america","path":"mexico/jalisco/san-juan-de-los-lagos","depth":3,"parent":"mexico/jalisco","children":["espiritu-santo","la-martinica","la-palma","las-ventanas","mi-nuevo-san-juan","san-jose","santa-teresa"]});
export const childModules = Object.freeze({"espiritu-santo":"./espiritu-santo/espiritu-santo.js","la-martinica":"./la-martinica/la-martinica.js","la-palma":"./la-palma/la-palma.js","las-ventanas":"./las-ventanas/las-ventanas.js","mi-nuevo-san-juan":"./mi-nuevo-san-juan/mi-nuevo-san-juan.js","san-jose":"./san-jose/san-jose.js","santa-teresa":"./santa-teresa/santa-teresa.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
