// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"putumayo-department","repository":"america","path":"colombia/putumayo-department","depth":2,"parent":"colombia","children":["mocoa","orito","puerto-asis","puerto-leguizamo"]});
export const childModules = Object.freeze({"mocoa":"./mocoa/mocoa.js","orito":"./orito/orito.js","puerto-asis":"./puerto-asis/puerto-asis.js","puerto-leguizamo":"./puerto-leguizamo/puerto-leguizamo.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
