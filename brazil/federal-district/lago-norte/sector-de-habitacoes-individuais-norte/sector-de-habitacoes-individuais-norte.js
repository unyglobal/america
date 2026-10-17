// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sector-de-habitacoes-individuais-norte","repository":"america","path":"brazil/federal-district/lago-norte/sector-de-habitacoes-individuais-norte","depth":4,"parent":"brazil/federal-district/lago-norte","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
