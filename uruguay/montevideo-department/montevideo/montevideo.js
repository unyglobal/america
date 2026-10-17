// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"montevideo","repository":"america","path":"uruguay/montevideo-department/montevideo","depth":3,"parent":"uruguay/montevideo-department","children":["barrio-sur","centro","cordon"]});
export const childModules = Object.freeze({"barrio-sur":"./barrio-sur/barrio-sur.js","centro":"./centro/centro.js","cordon":"./cordon/cordon.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
