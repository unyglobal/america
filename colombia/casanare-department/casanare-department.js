// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"casanare-department","repository":"america","path":"colombia/casanare-department","depth":2,"parent":"colombia","children":["aguazul","paz-de-ariporo","tauramena","yopal"]});
export const childModules = Object.freeze({"aguazul":"./aguazul/aguazul.js","paz-de-ariporo":"./paz-de-ariporo/paz-de-ariporo.js","tauramena":"./tauramena/tauramena.js","yopal":"./yopal/yopal.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
