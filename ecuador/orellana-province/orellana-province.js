// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"orellana-province","repository":"america","path":"ecuador/orellana-province","depth":2,"parent":"ecuador","children":["boca-suno","puerto-francisco-de-orellana"]});
export const childModules = Object.freeze({"boca-suno":"./boca-suno/boca-suno.js","puerto-francisco-de-orellana":"./puerto-francisco-de-orellana/puerto-francisco-de-orellana.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
