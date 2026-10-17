// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"cortes-department","repository":"america","path":"honduras/cortes-department","depth":2,"parent":"honduras","children":["choloma","cofradia","la-lima","omoa","potrerillos","puerto-cortez","san-antonio-de-cortes","san-francisco-de-yojoa","san-pedro-sula","santa-cruz-de-yojoa","villanueva"]});
export const childModules = Object.freeze({"choloma":"./choloma/choloma.js","cofradia":"./cofradia/cofradia.js","la-lima":"./la-lima/la-lima.js","omoa":"./omoa/omoa.js","potrerillos":"./potrerillos/potrerillos.js","puerto-cortez":"./puerto-cortez/puerto-cortez.js","san-antonio-de-cortes":"./san-antonio-de-cortes/san-antonio-de-cortes.js","san-francisco-de-yojoa":"./san-francisco-de-yojoa/san-francisco-de-yojoa.js","san-pedro-sula":"./san-pedro-sula/san-pedro-sula.js","santa-cruz-de-yojoa":"./santa-cruz-de-yojoa/santa-cruz-de-yojoa.js","villanueva":"./villanueva/villanueva.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
