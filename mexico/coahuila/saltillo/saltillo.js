// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"saltillo","repository":"america","path":"mexico/coahuila/saltillo","depth":3,"parent":"mexico/coahuila","children":["indio","jardines-del-lago","jardines-del-lago-ampliacion","miraflores","provivienda","provivienda-oriente-ampliacion","san-esteban","san-ramon","urdinola","valle-de-san-ramon","zapaliname"]});
export const childModules = Object.freeze({"indio":"./indio/indio.js","jardines-del-lago":"./jardines-del-lago/jardines-del-lago.js","jardines-del-lago-ampliacion":"./jardines-del-lago-ampliacion/jardines-del-lago-ampliacion.js","miraflores":"./miraflores/miraflores.js","provivienda":"./provivienda/provivienda.js","provivienda-oriente-ampliacion":"./provivienda-oriente-ampliacion/provivienda-oriente-ampliacion.js","san-esteban":"./san-esteban/san-esteban.js","san-ramon":"./san-ramon/san-ramon.js","urdinola":"./urdinola/urdinola.js","valle-de-san-ramon":"./valle-de-san-ramon/valle-de-san-ramon.js","zapaliname":"./zapaliname/zapaliname.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
