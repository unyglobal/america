// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"guazacapan","repository":"america","path":"guatemala/santa-rosa-department/guazacapan","depth":3,"parent":"guatemala/santa-rosa-department","children":["los-almendros"]});
export const childModules = Object.freeze({"los-almendros":"./los-almendros/los-almendros.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
