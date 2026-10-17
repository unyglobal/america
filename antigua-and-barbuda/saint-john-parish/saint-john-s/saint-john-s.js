// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"saint-john-s","repository":"america","path":"antigua-and-barbuda/saint-john-parish/saint-john-s","depth":3,"parent":"antigua-and-barbuda/saint-john-parish","children":["gambles-terrace","green-bay","kentish","point"]});
export const childModules = Object.freeze({"gambles-terrace":"./gambles-terrace/gambles-terrace.js","green-bay":"./green-bay/green-bay.js","kentish":"./kentish/kentish.js","point":"./point/point.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
