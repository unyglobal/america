// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"potosi-department","repository":"america","path":"bolivia/potosi-department","depth":2,"parent":"bolivia","children":["llallagua","potosi","tupiza","villazon"]});
export const childModules = Object.freeze({"llallagua":"./llallagua/llallagua.js","potosi":"./potosi/potosi.js","tupiza":"./tupiza/tupiza.js","villazon":"./villazon/villazon.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
