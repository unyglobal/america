// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"caucaia","repository":"america","path":"brazil/ceara/caucaia","depth":3,"parent":"brazil/ceara","children":["acude","nova-cigana","vila-do-trem"]});
export const childModules = Object.freeze({"acude":"./acude/acude.js","nova-cigana":"./nova-cigana/nova-cigana.js","vila-do-trem":"./vila-do-trem/vila-do-trem.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
