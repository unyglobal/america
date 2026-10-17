// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"buenos-aires","repository":"america","path":"argentina/buenos-aires-f-d/buenos-aires","depth":3,"parent":"argentina/buenos-aires-f-d","children":["adrogue","arrecifes","ayacucho","azul","bahia-blanca","balcarce","banfield","baradero","benito-juarez","berazategui","berisso","bragado"]});
export const childModules = Object.freeze({"adrogue":"./adrogue/adrogue.js","arrecifes":"./arrecifes/arrecifes.js","ayacucho":"./ayacucho/ayacucho.js","azul":"./azul/azul.js","bahia-blanca":"./bahia-blanca/bahia-blanca.js","balcarce":"./balcarce/balcarce.js","banfield":"./banfield/banfield.js","baradero":"./baradero/baradero.js","benito-juarez":"./benito-juarez/benito-juarez.js","berazategui":"./berazategui/berazategui.js","berisso":"./berisso/berisso.js","bragado":"./bragado/bragado.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
