// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"barranquilla","repository":"america","path":"colombia/atlantico/barranquilla","depth":3,"parent":"colombia/atlantico","children":["barrio-chiquinquira","barrio-don-bosco","barrio-montes","barrio-rebolo"]});
export const childModules = Object.freeze({"barrio-chiquinquira":"./barrio-chiquinquira/barrio-chiquinquira.js","barrio-don-bosco":"./barrio-don-bosco/barrio-don-bosco.js","barrio-montes":"./barrio-montes/barrio-montes.js","barrio-rebolo":"./barrio-rebolo/barrio-rebolo.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
