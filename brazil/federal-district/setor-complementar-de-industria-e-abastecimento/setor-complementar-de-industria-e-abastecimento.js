// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"setor-complementar-de-industria-e-abastecimento","repository":"america","path":"brazil/federal-district/setor-complementar-de-industria-e-abastecimento","depth":3,"parent":"brazil/federal-district","children":["cidade-estrutural"]});
export const childModules = Object.freeze({"cidade-estrutural":"./cidade-estrutural/cidade-estrutural.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
