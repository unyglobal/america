// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"recife","repository":"america","path":"brazil/pernambuco/recife","depth":3,"parent":"brazil/pernambuco","children":["favela-do-rato","rua-maciel-monteiro","santo-amaro","soledade"]});
export const childModules = Object.freeze({"favela-do-rato":"./favela-do-rato/favela-do-rato.js","rua-maciel-monteiro":"./rua-maciel-monteiro/rua-maciel-monteiro.js","santo-amaro":"./santo-amaro/santo-amaro.js","soledade":"./soledade/soledade.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
