// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"valle-del-cauca-department","repository":"america","path":"colombia/valle-del-cauca-department","depth":2,"parent":"colombia","children":["andalucia","caicedonia","cali","cartago","darien","el-cerrito","florida","guacari","guadalajara-de-buga","jamundi","palmira","pradera","roldanillo","sevilla","tulua","yumbo","zarzal"]});
export const childModules = Object.freeze({"andalucia":"./andalucia/andalucia.js","caicedonia":"./caicedonia/caicedonia.js","cali":"./cali/cali.js","cartago":"./cartago/cartago.js","darien":"./darien/darien.js","el-cerrito":"./el-cerrito/el-cerrito.js","florida":"./florida/florida.js","guacari":"./guacari/guacari.js","guadalajara-de-buga":"./guadalajara-de-buga/guadalajara-de-buga.js","jamundi":"./jamundi/jamundi.js","palmira":"./palmira/palmira.js","pradera":"./pradera/pradera.js","roldanillo":"./roldanillo/roldanillo.js","sevilla":"./sevilla/sevilla.js","tulua":"./tulua/tulua.js","yumbo":"./yumbo/yumbo.js","zarzal":"./zarzal/zarzal.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
