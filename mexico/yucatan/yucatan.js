// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"yucatan","repository":"america","path":"mexico/yucatan","depth":2,"parent":"mexico","children":["chichen-itza","hunucma","izamal","kanasin","merida","motul","oxkutzkab","peto","progreso","tecax","ticul","tizimin","uman","valladolid"]});
export const childModules = Object.freeze({"chichen-itza":"./chichen-itza/chichen-itza.js","hunucma":"./hunucma/hunucma.js","izamal":"./izamal/izamal.js","kanasin":"./kanasin/kanasin.js","merida":"./merida/merida.js","motul":"./motul/motul.js","oxkutzkab":"./oxkutzkab/oxkutzkab.js","peto":"./peto/peto.js","progreso":"./progreso/progreso.js","tecax":"./tecax/tecax.js","ticul":"./ticul/ticul.js","tizimin":"./tizimin/tizimin.js","uman":"./uman/uman.js","valladolid":"./valladolid/valladolid.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
