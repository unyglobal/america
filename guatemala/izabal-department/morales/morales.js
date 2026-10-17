// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"morales","repository":"america","path":"guatemala/izabal-department/morales","depth":3,"parent":"guatemala/izabal-department","children":["bandegua","barrio-carrizal","barrio-la-bolsa","barrio-michal","barrio-nuevo-morales","barrio-san-antonio","colonia-hermana-patricia","colonia-la-bananera"]});
export const childModules = Object.freeze({"bandegua":"./bandegua/bandegua.js","barrio-carrizal":"./barrio-carrizal/barrio-carrizal.js","barrio-la-bolsa":"./barrio-la-bolsa/barrio-la-bolsa.js","barrio-michal":"./barrio-michal/barrio-michal.js","barrio-nuevo-morales":"./barrio-nuevo-morales/barrio-nuevo-morales.js","barrio-san-antonio":"./barrio-san-antonio/barrio-san-antonio.js","colonia-hermana-patricia":"./colonia-hermana-patricia/colonia-hermana-patricia.js","colonia-la-bananera":"./colonia-la-bananera/colonia-la-bananera.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
