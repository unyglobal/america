// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"santa-marta","repository":"america","path":"colombia/magdalena-department/santa-marta","depth":3,"parent":"colombia/magdalena-department","children":["barrio-cundi"]});
export const childModules = Object.freeze({"barrio-cundi":"./barrio-cundi/barrio-cundi.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
