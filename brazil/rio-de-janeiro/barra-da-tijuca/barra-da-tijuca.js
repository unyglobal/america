// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"barra-da-tijuca","repository":"america","path":"brazil/rio-de-janeiro/barra-da-tijuca","depth":3,"parent":"brazil/rio-de-janeiro","children":["nova-ipanema","park-palace"]});
export const childModules = Object.freeze({"nova-ipanema":"./nova-ipanema/nova-ipanema.js","park-palace":"./park-palace/park-palace.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
