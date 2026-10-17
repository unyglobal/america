// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"don-torcuato","repository":"america","path":"argentina/buenos-aires/don-torcuato","depth":3,"parent":"argentina/buenos-aires","children":["don-torcuato-oeste"]});
export const childModules = Object.freeze({"don-torcuato-oeste":"./don-torcuato-oeste/don-torcuato-oeste.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
