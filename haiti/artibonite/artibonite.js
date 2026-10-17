// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"artibonite","repository":"america","path":"haiti/artibonite","depth":2,"parent":"haiti","children":["desarmes","dessalines","gonaives","saint-marc","saint-michel-de-l-atalaye","verrettes"]});
export const childModules = Object.freeze({"desarmes":"./desarmes/desarmes.js","dessalines":"./dessalines/dessalines.js","gonaives":"./gonaives/gonaives.js","saint-marc":"./saint-marc/saint-marc.js","saint-michel-de-l-atalaye":"./saint-michel-de-l-atalaye/saint-michel-de-l-atalaye.js","verrettes":"./verrettes/verrettes.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
