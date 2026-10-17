// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"quetzaltenango","repository":"america","path":"guatemala/quetzaltenango","depth":2,"parent":"guatemala","children":["cabrican","cantel","coatepeque","colomba","el-palmar","la-esperanza","ostuncalco","salcaja"]});
export const childModules = Object.freeze({"cabrican":"./cabrican/cabrican.js","cantel":"./cantel/cantel.js","coatepeque":"./coatepeque/coatepeque.js","colomba":"./colomba/colomba.js","el-palmar":"./el-palmar/el-palmar.js","la-esperanza":"./la-esperanza/la-esperanza.js","ostuncalco":"./ostuncalco/ostuncalco.js","salcaja":"./salcaja/salcaja.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
