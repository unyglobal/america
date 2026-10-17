// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ciudad-rio-bravo","repository":"america","path":"mexico/tamaulipas/ciudad-rio-bravo","depth":3,"parent":"mexico/tamaulipas","children":["infonavit-san-diego","primer-sector","san-diego","setenta-y-ocho-ochenta"]});
export const childModules = Object.freeze({"infonavit-san-diego":"./infonavit-san-diego/infonavit-san-diego.js","primer-sector":"./primer-sector/primer-sector.js","san-diego":"./san-diego/san-diego.js","setenta-y-ocho-ochenta":"./setenta-y-ocho-ochenta/setenta-y-ocho-ochenta.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
