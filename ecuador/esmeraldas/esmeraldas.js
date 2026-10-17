// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"esmeraldas","repository":"america","path":"ecuador/esmeraldas","depth":2,"parent":"ecuador","children":["rosa-zarate","san-lorenzo-de-esmeraldas"]});
export const childModules = Object.freeze({"rosa-zarate":"./rosa-zarate/rosa-zarate.js","san-lorenzo-de-esmeraldas":"./san-lorenzo-de-esmeraldas/san-lorenzo-de-esmeraldas.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
