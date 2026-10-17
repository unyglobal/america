// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"neuquen","repository":"america","path":"argentina/neuquen","depth":2,"parent":"argentina","children":["centenario","cutral-co","plottier","san-martin-de-los-andes","zapala"]});
export const childModules = Object.freeze({"centenario":"./centenario/centenario.js","cutral-co":"./cutral-co/cutral-co.js","plottier":"./plottier/plottier.js","san-martin-de-los-andes":"./san-martin-de-los-andes/san-martin-de-los-andes.js","zapala":"./zapala/zapala.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
