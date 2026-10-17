// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"chihuahua","repository":"america","path":"mexico/chihuahua","depth":2,"parent":"mexico","children":["ciudad-delicias","ciudad-juarez","hidalgo-del-parral","jose-mariano-jimenez","madera","manuel-ojinaga","nuevo-casas-grandes","ojinaga","pedro-meoqui","santa-rosalia-de-camargo"]});
export const childModules = Object.freeze({"ciudad-delicias":"./ciudad-delicias/ciudad-delicias.js","ciudad-juarez":"./ciudad-juarez/ciudad-juarez.js","hidalgo-del-parral":"./hidalgo-del-parral/hidalgo-del-parral.js","jose-mariano-jimenez":"./jose-mariano-jimenez/jose-mariano-jimenez.js","madera":"./madera/madera.js","manuel-ojinaga":"./manuel-ojinaga/manuel-ojinaga.js","nuevo-casas-grandes":"./nuevo-casas-grandes/nuevo-casas-grandes.js","ojinaga":"./ojinaga/ojinaga.js","pedro-meoqui":"./pedro-meoqui/pedro-meoqui.js","santa-rosalia-de-camargo":"./santa-rosalia-de-camargo/santa-rosalia-de-camargo.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
