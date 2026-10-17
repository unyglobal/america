// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"resende","repository":"america","path":"brazil/rio-de-janeiro/resende","depth":3,"parent":"brazil/rio-de-janeiro","children":["bairro-vicentino"]});
export const childModules = Object.freeze({"bairro-vicentino":"./bairro-vicentino/bairro-vicentino.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
