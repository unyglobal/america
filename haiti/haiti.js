// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"haiti","repository":"america","path":"haiti","depth":1,"parent":"","children":["artibonite","centre","grand-anse","nippes","nord","nord-est","nord-ouest","ouest","sud","sud-est"]});
export const childModules = Object.freeze({"artibonite":"./artibonite/artibonite.js","centre":"./centre/centre.js","grand-anse":"./grand-anse/grand-anse.js","nippes":"./nippes/nippes.js","nord":"./nord/nord.js","nord-est":"./nord-est/nord-est.js","nord-ouest":"./nord-ouest/nord-ouest.js","ouest":"./ouest/ouest.js","sud":"./sud/sud.js","sud-est":"./sud-est/sud-est.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
