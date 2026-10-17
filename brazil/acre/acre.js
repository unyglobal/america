// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"acre","repository":"america","path":"brazil/acre","depth":2,"parent":"brazil","children":["brasileia","cruzeiro-do-sul","epitaciolandia","feijo","mancio-lima","marechal-thaumaturgo","placido-de-castro","porto-acre","rio-branco","sena-madureira","senador-guiomard","tarauaca","xapuri"]});
export const childModules = Object.freeze({"brasileia":"./brasileia/brasileia.js","cruzeiro-do-sul":"./cruzeiro-do-sul/cruzeiro-do-sul.js","epitaciolandia":"./epitaciolandia/epitaciolandia.js","feijo":"./feijo/feijo.js","mancio-lima":"./mancio-lima/mancio-lima.js","marechal-thaumaturgo":"./marechal-thaumaturgo/marechal-thaumaturgo.js","placido-de-castro":"./placido-de-castro/placido-de-castro.js","porto-acre":"./porto-acre/porto-acre.js","rio-branco":"./rio-branco/rio-branco.js","sena-madureira":"./sena-madureira/sena-madureira.js","senador-guiomard":"./senador-guiomard/senador-guiomard.js","tarauaca":"./tarauaca/tarauaca.js","xapuri":"./xapuri/xapuri.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
