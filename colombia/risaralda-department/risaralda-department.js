// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"risaralda-department","repository":"america","path":"colombia/risaralda-department","depth":2,"parent":"colombia","children":["anserma","belen-de-umbria","dosquebradas","la-virginia","marsella","pereira","quinchia","santa-rosa-de-cabal"]});
export const childModules = Object.freeze({"anserma":"./anserma/anserma.js","belen-de-umbria":"./belen-de-umbria/belen-de-umbria.js","dosquebradas":"./dosquebradas/dosquebradas.js","la-virginia":"./la-virginia/la-virginia.js","marsella":"./marsella/marsella.js","pereira":"./pereira/pereira.js","quinchia":"./quinchia/quinchia.js","santa-rosa-de-cabal":"./santa-rosa-de-cabal/santa-rosa-de-cabal.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
