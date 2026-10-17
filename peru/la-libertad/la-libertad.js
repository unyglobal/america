// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"la-libertad","repository":"america","path":"peru/la-libertad","depth":2,"parent":"peru","children":["chepen","chocope","guadalupe","huamachuco","laredo","moche","pacasmayo","paijan","san-pedro-de-lloc","santiago-de-cao","trujillo","viru"]});
export const childModules = Object.freeze({"chepen":"./chepen/chepen.js","chocope":"./chocope/chocope.js","guadalupe":"./guadalupe/guadalupe.js","huamachuco":"./huamachuco/huamachuco.js","laredo":"./laredo/laredo.js","moche":"./moche/moche.js","pacasmayo":"./pacasmayo/pacasmayo.js","paijan":"./paijan/paijan.js","san-pedro-de-lloc":"./san-pedro-de-lloc/san-pedro-de-lloc.js","santiago-de-cao":"./santiago-de-cao/santiago-de-cao.js","trujillo":"./trujillo/trujillo.js","viru":"./viru/viru.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
