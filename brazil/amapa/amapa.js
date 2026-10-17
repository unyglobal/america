// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"amapa","repository":"america","path":"brazil/amapa","depth":2,"parent":"brazil","children":["laranjal-do-jari","macapa","mazagao","oiapoque","pedra-branca-do-amapari","porto-grande","tartarugalzinho"]});
export const childModules = Object.freeze({"laranjal-do-jari":"./laranjal-do-jari/laranjal-do-jari.js","macapa":"./macapa/macapa.js","mazagao":"./mazagao/mazagao.js","oiapoque":"./oiapoque/oiapoque.js","pedra-branca-do-amapari":"./pedra-branca-do-amapari/pedra-branca-do-amapari.js","porto-grande":"./porto-grande/porto-grande.js","tartarugalzinho":"./tartarugalzinho/tartarugalzinho.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
