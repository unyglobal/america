// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"boqueron-department","repository":"america","path":"paraguay/boqueron-department","depth":2,"parent":"paraguay","children":["filadelfia","loma-plata"]});
export const childModules = Object.freeze({"filadelfia":"./filadelfia/filadelfia.js","loma-plata":"./loma-plata/loma-plata.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
