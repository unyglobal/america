// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"lago-norte","repository":"america","path":"brazil/federal-district/lago-norte","depth":3,"parent":"brazil/federal-district","children":["sector-de-habitacoes-individuais-norte"]});
export const childModules = Object.freeze({"sector-de-habitacoes-individuais-norte":"./sector-de-habitacoes-individuais-norte/sector-de-habitacoes-individuais-norte.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
