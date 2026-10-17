// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"queretaro","repository":"america","path":"mexico/queretaro","depth":2,"parent":"mexico","children":["el-pueblito","san-jose-de-los-olvera","san-juan-del-rio","santa-rosa-jauregui","santiago-de-queretaro","tequisquiapan","venceremos"]});
export const childModules = Object.freeze({"el-pueblito":"./el-pueblito/el-pueblito.js","san-jose-de-los-olvera":"./san-jose-de-los-olvera/san-jose-de-los-olvera.js","san-juan-del-rio":"./san-juan-del-rio/san-juan-del-rio.js","santa-rosa-jauregui":"./santa-rosa-jauregui/santa-rosa-jauregui.js","santiago-de-queretaro":"./santiago-de-queretaro/santiago-de-queretaro.js","tequisquiapan":"./tequisquiapan/tequisquiapan.js","venceremos":"./venceremos/venceremos.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
