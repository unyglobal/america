// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"olinda","repository":"america","path":"brazil/pernambuco/olinda","depth":3,"parent":"brazil/pernambuco","children":["alto-da-nacao","amparo","azeitona","barreira-do-rosario","boa-hora","bonsucesso","corrego-do-monte","corrego-do-monte-ii","guadalupe","monte","varadouro","vila-esperanca","vila-esperanca-alto-da-nacao"]});
export const childModules = Object.freeze({"alto-da-nacao":"./alto-da-nacao/alto-da-nacao.js","amparo":"./amparo/amparo.js","azeitona":"./azeitona/azeitona.js","barreira-do-rosario":"./barreira-do-rosario/barreira-do-rosario.js","boa-hora":"./boa-hora/boa-hora.js","bonsucesso":"./bonsucesso/bonsucesso.js","corrego-do-monte":"./corrego-do-monte/corrego-do-monte.js","corrego-do-monte-ii":"./corrego-do-monte-ii/corrego-do-monte-ii.js","guadalupe":"./guadalupe/guadalupe.js","monte":"./monte/monte.js","varadouro":"./varadouro/varadouro.js","vila-esperanca":"./vila-esperanca/vila-esperanca.js","vila-esperanca-alto-da-nacao":"./vila-esperanca-alto-da-nacao/vila-esperanca-alto-da-nacao.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
