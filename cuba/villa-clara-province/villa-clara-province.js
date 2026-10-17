// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"villa-clara-province","repository":"america","path":"cuba/villa-clara-province","depth":2,"parent":"cuba","children":["caibarien","camajuani","cifuentes","corralillo","encrucijada","manicaragua","placetas","ranchuelo","remedios","sagua-la-grande","santa-clara","santo-domingo"]});
export const childModules = Object.freeze({"caibarien":"./caibarien/caibarien.js","camajuani":"./camajuani/camajuani.js","cifuentes":"./cifuentes/cifuentes.js","corralillo":"./corralillo/corralillo.js","encrucijada":"./encrucijada/encrucijada.js","manicaragua":"./manicaragua/manicaragua.js","placetas":"./placetas/placetas.js","ranchuelo":"./ranchuelo/ranchuelo.js","remedios":"./remedios/remedios.js","sagua-la-grande":"./sagua-la-grande/sagua-la-grande.js","santa-clara":"./santa-clara/santa-clara.js","santo-domingo":"./santo-domingo/santo-domingo.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
