// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"panama","repository":"america","path":"panama","depth":1,"parent":"","children":["bocas-del-toro-province","chiriqui-province","cocle","colon","panama","panama-oeste-province","pedregal","pedregal-a","veraguas-province"]});
export const childModules = Object.freeze({"bocas-del-toro-province":"./bocas-del-toro-province/bocas-del-toro-province.js","chiriqui-province":"./chiriqui-province/chiriqui-province.js","cocle":"./cocle/cocle.js","colon":"./colon/colon.js","panama":"./panama/panama.js","panama-oeste-province":"./panama-oeste-province/panama-oeste-province.js","pedregal":"./pedregal/pedregal.js","pedregal-a":"./pedregal-a/pedregal-a.js","veraguas-province":"./veraguas-province/veraguas-province.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
