// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tarija-department","repository":"america","path":"bolivia/tarija-department","depth":2,"parent":"bolivia","children":["bermejo","tarija","villamontes","yacuiba"]});
export const childModules = Object.freeze({"bermejo":"./bermejo/bermejo.js","tarija":"./tarija/tarija.js","villamontes":"./villamontes/villamontes.js","yacuiba":"./yacuiba/yacuiba.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
