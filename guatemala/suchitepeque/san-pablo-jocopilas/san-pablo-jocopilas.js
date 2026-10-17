// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"san-pablo-jocopilas","repository":"america","path":"guatemala/suchitepeque/san-pablo-jocopilas","depth":3,"parent":"guatemala/suchitepeque","children":["colonia-linda-vista","ixtacapa"]});
export const childModules = Object.freeze({"colonia-linda-vista":"./colonia-linda-vista/colonia-linda-vista.js","ixtacapa":"./ixtacapa/ixtacapa.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
