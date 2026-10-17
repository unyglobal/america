// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"acworth","repository":"america","path":"united-states/georgia/acworth","depth":3,"parent":"united-states/georgia","children":["logan-trace","mitchell-hill","modern-living-mobile-home-park"]});
export const childModules = Object.freeze({"logan-trace":"./logan-trace/logan-trace.js","mitchell-hill":"./mitchell-hill/mitchell-hill.js","modern-living-mobile-home-park":"./modern-living-mobile-home-park/modern-living-mobile-home-park.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
