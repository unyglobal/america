// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"instituto-del-fondo-nacional-de-la-vivienda-para-los-trabajadores","repository":"america","path":"mexico/jalisco/tequila/instituto-del-fondo-nacional-de-la-vivienda-para-los-trabajadores","depth":4,"parent":"mexico/jalisco/tequila","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
