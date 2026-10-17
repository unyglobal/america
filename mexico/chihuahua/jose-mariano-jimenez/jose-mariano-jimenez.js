// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"jose-mariano-jimenez","repository":"america","path":"mexico/chihuahua/jose-mariano-jimenez","depth":3,"parent":"mexico/chihuahua","children":["abraham-gonzalez","barrio-de-jalisco","centro","colonia-del-parque","fatima","la-ladrillera","moderna","veinte-de-noviembre"]});
export const childModules = Object.freeze({"abraham-gonzalez":"./abraham-gonzalez/abraham-gonzalez.js","barrio-de-jalisco":"./barrio-de-jalisco/barrio-de-jalisco.js","centro":"./centro/centro.js","colonia-del-parque":"./colonia-del-parque/colonia-del-parque.js","fatima":"./fatima/fatima.js","la-ladrillera":"./la-ladrillera/la-ladrillera.js","moderna":"./moderna/moderna.js","veinte-de-noviembre":"./veinte-de-noviembre/veinte-de-noviembre.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
