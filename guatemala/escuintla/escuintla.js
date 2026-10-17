// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"escuintla","repository":"america","path":"guatemala/escuintla","depth":2,"parent":"guatemala","children":["la-gomera","masagua","palin","puerto-san-jose","santa-lucia-cotzumalguapa","tiquisate"]});
export const childModules = Object.freeze({"la-gomera":"./la-gomera/la-gomera.js","masagua":"./masagua/masagua.js","palin":"./palin/palin.js","puerto-san-jose":"./puerto-san-jose/puerto-san-jose.js","santa-lucia-cotzumalguapa":"./santa-lucia-cotzumalguapa/santa-lucia-cotzumalguapa.js","tiquisate":"./tiquisate/tiquisate.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
