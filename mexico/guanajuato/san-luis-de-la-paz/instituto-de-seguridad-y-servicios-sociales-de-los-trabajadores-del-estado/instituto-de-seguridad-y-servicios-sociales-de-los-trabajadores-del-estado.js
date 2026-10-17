// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"instituto-de-seguridad-y-servicios-sociales-de-los-trabajadores-del-estado","repository":"america","path":"mexico/guanajuato/san-luis-de-la-paz/instituto-de-seguridad-y-servicios-sociales-de-los-trabajadores-del-estado","depth":4,"parent":"mexico/guanajuato/san-luis-de-la-paz","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
