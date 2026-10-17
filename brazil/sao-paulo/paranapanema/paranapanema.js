// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"paranapanema","repository":"america","path":"brazil/sao-paulo/paranapanema","depth":3,"parent":"brazil/sao-paulo","children":["centro","remanso-paranapanema","vila-leme"]});
export const childModules = Object.freeze({"centro":"./centro/centro.js","remanso-paranapanema":"./remanso-paranapanema/remanso-paranapanema.js","vila-leme":"./vila-leme/vila-leme.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
