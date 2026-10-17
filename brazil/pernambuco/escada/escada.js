// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"escada","repository":"america","path":"brazil/pernambuco/escada","depth":3,"parent":"brazil/pernambuco","children":["alto-da-vitoria","corrego-da-paz","invasao-riacho-do-navio","invasao-sapucaji"]});
export const childModules = Object.freeze({"alto-da-vitoria":"./alto-da-vitoria/alto-da-vitoria.js","corrego-da-paz":"./corrego-da-paz/corrego-da-paz.js","invasao-riacho-do-navio":"./invasao-riacho-do-navio/invasao-riacho-do-navio.js","invasao-sapucaji":"./invasao-sapucaji/invasao-sapucaji.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
