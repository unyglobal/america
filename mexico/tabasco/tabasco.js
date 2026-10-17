// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tabasco","repository":"america","path":"mexico/tabasco","depth":2,"parent":"mexico","children":["comalcalco","cunduacan","huimanguillo","jalpa-de-mendez","macuspana","paraiso","playas-del-rosario","rio-de-teapa","teapa","tenosique","villahermosa"]});
export const childModules = Object.freeze({"comalcalco":"./comalcalco/comalcalco.js","cunduacan":"./cunduacan/cunduacan.js","huimanguillo":"./huimanguillo/huimanguillo.js","jalpa-de-mendez":"./jalpa-de-mendez/jalpa-de-mendez.js","macuspana":"./macuspana/macuspana.js","paraiso":"./paraiso/paraiso.js","playas-del-rosario":"./playas-del-rosario/playas-del-rosario.js","rio-de-teapa":"./rio-de-teapa/rio-de-teapa.js","teapa":"./teapa/teapa.js","tenosique":"./tenosique/tenosique.js","villahermosa":"./villahermosa/villahermosa.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
