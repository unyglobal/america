// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"pasco","repository":"america","path":"peru/pasco","depth":2,"parent":"peru","children":["cerro-de-pasco","chaupimarca"]});
export const childModules = Object.freeze({"cerro-de-pasco":"./cerro-de-pasco/cerro-de-pasco.js","chaupimarca":"./chaupimarca/chaupimarca.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
