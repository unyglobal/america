// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"san-fernando-de-monte-cristi","repository":"america","path":"dominican-republic/monte-cristi-province/san-fernando-de-monte-cristi","depth":3,"parent":"dominican-republic/monte-cristi-province","children":["barrio-salomon-jorge","barrio-san-pedro"]});
export const childModules = Object.freeze({"barrio-salomon-jorge":"./barrio-salomon-jorge/barrio-salomon-jorge.js","barrio-san-pedro":"./barrio-san-pedro/barrio-san-pedro.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
