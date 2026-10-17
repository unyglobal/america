// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"marianao","repository":"america","path":"cuba/havana/marianao","depth":3,"parent":"cuba/havana","children":["los-angeles","los-pocitos","medrano","sanguily"]});
export const childModules = Object.freeze({"los-angeles":"./los-angeles/los-angeles.js","los-pocitos":"./los-pocitos/los-pocitos.js","medrano":"./medrano/medrano.js","sanguily":"./sanguily/sanguily.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
