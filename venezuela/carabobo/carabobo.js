// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"carabobo","repository":"america","path":"venezuela/carabobo","depth":2,"parent":"venezuela","children":["bejuma","guacara","guigue","mariara","miranda","montalban","moron","puerto-cabello","san-joaquin","tacarigua","valencia"]});
export const childModules = Object.freeze({"bejuma":"./bejuma/bejuma.js","guacara":"./guacara/guacara.js","guigue":"./guigue/guigue.js","mariara":"./mariara/mariara.js","miranda":"./miranda/miranda.js","montalban":"./montalban/montalban.js","moron":"./moron/moron.js","puerto-cabello":"./puerto-cabello/puerto-cabello.js","san-joaquin":"./san-joaquin/san-joaquin.js","tacarigua":"./tacarigua/tacarigua.js","valencia":"./valencia/valencia.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
