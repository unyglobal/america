// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"cidade-estrutural","repository":"america","path":"brazil/federal-district/setor-complementar-de-industria-e-abastecimento/cidade-estrutural","depth":4,"parent":"brazil/federal-district/setor-complementar-de-industria-e-abastecimento","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
