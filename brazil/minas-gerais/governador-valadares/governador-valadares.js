// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"governador-valadares","repository":"america","path":"brazil/minas-gerais/governador-valadares","depth":3,"parent":"brazil/minas-gerais","children":["carapina","querosene"]});
export const childModules = Object.freeze({"carapina":"./carapina/carapina.js","querosene":"./querosene/querosene.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
