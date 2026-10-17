// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sabinas","repository":"america","path":"mexico/coahuila/sabinas","depth":3,"parent":"mexico/coahuila","children":["centenario","ismael-lopez-buitron","ismael-rodriguez","profesor-federico-berrueto-ramon","reinera","santa-cruz","veintiuno-de-marzo","zona-centro"]});
export const childModules = Object.freeze({"centenario":"./centenario/centenario.js","ismael-lopez-buitron":"./ismael-lopez-buitron/ismael-lopez-buitron.js","ismael-rodriguez":"./ismael-rodriguez/ismael-rodriguez.js","profesor-federico-berrueto-ramon":"./profesor-federico-berrueto-ramon/profesor-federico-berrueto-ramon.js","reinera":"./reinera/reinera.js","santa-cruz":"./santa-cruz/santa-cruz.js","veintiuno-de-marzo":"./veintiuno-de-marzo/veintiuno-de-marzo.js","zona-centro":"./zona-centro/zona-centro.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
