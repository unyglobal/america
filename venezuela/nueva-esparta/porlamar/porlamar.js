// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"porlamar","repository":"america","path":"venezuela/nueva-esparta/porlamar","depth":3,"parent":"venezuela/nueva-esparta","children":["charaima-norte","zona-industrial"]});
export const childModules = Object.freeze({"charaima-norte":"./charaima-norte/charaima-norte.js","zona-industrial":"./zona-industrial/zona-industrial.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
