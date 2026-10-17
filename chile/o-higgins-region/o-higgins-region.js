// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"o-higgins-region","repository":"america","path":"chile/o-higgins-region","depth":2,"parent":"chile","children":["chimbarongo","graneros","machali","rancagua","rengo","san-vicente","san-vicente-de-tagua-tagua","santa-cruz"]});
export const childModules = Object.freeze({"chimbarongo":"./chimbarongo/chimbarongo.js","graneros":"./graneros/graneros.js","machali":"./machali/machali.js","rancagua":"./rancagua/rancagua.js","rengo":"./rengo/rengo.js","san-vicente":"./san-vicente/san-vicente.js","san-vicente-de-tagua-tagua":"./san-vicente-de-tagua-tagua/san-vicente-de-tagua-tagua.js","santa-cruz":"./santa-cruz/santa-cruz.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
