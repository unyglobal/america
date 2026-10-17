// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"georgetown","repository":"america","path":"guyana/demerara-mahaica/georgetown","depth":3,"parent":"guyana/demerara-mahaica","children":["bourda","newburg","stabroek","werk-en-rust","wortmanville"]});
export const childModules = Object.freeze({"bourda":"./bourda/bourda.js","newburg":"./newburg/newburg.js","stabroek":"./stabroek/stabroek.js","werk-en-rust":"./werk-en-rust/werk-en-rust.js","wortmanville":"./wortmanville/wortmanville.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
