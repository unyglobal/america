// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"cochabamba","repository":"america","path":"bolivia/cochabamba","depth":2,"parent":"bolivia","children":["colcapirhua","mizque","punata","quillacollo","sacaba","sipe-sipe","tiquipaya","vinto"]});
export const childModules = Object.freeze({"colcapirhua":"./colcapirhua/colcapirhua.js","mizque":"./mizque/mizque.js","punata":"./punata/punata.js","quillacollo":"./quillacollo/quillacollo.js","sacaba":"./sacaba/sacaba.js","sipe-sipe":"./sipe-sipe/sipe-sipe.js","tiquipaya":"./tiquipaya/tiquipaya.js","vinto":"./vinto/vinto.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
