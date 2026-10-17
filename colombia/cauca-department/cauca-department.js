// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"cauca-department","repository":"america","path":"colombia/cauca-department","depth":2,"parent":"colombia","children":["balboa","belalcazar","corinto","miranda","patia","piendamo","popayan","puerto-tejada","santander-de-quilichao","suarez","timbiqui","villa-rica"]});
export const childModules = Object.freeze({"balboa":"./balboa/balboa.js","belalcazar":"./belalcazar/belalcazar.js","corinto":"./corinto/corinto.js","miranda":"./miranda/miranda.js","patia":"./patia/patia.js","piendamo":"./piendamo/piendamo.js","popayan":"./popayan/popayan.js","puerto-tejada":"./puerto-tejada/puerto-tejada.js","santander-de-quilichao":"./santander-de-quilichao/santander-de-quilichao.js","suarez":"./suarez/suarez.js","timbiqui":"./timbiqui/timbiqui.js","villa-rica":"./villa-rica/villa-rica.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
