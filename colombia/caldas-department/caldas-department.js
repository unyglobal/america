// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"caldas-department","repository":"america","path":"colombia/caldas-department","depth":2,"parent":"colombia","children":["aguadas","chinchina","la-dorada","manizales","manzanares","neira","riosucio","salamina","supia","villamaria"]});
export const childModules = Object.freeze({"aguadas":"./aguadas/aguadas.js","chinchina":"./chinchina/chinchina.js","la-dorada":"./la-dorada/la-dorada.js","manizales":"./manizales/manizales.js","manzanares":"./manzanares/manzanares.js","neira":"./neira/neira.js","riosucio":"./riosucio/riosucio.js","salamina":"./salamina/salamina.js","supia":"./supia/supia.js","villamaria":"./villamaria/villamaria.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
