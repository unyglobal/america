// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"cienfuegos-province","repository":"america","path":"cuba/cienfuegos-province","depth":2,"parent":"cuba","children":["abreus","aguada-de-pasajeros","cienfuegos","cruces","cumanayagua","lajas","palmira","rodas"]});
export const childModules = Object.freeze({"abreus":"./abreus/abreus.js","aguada-de-pasajeros":"./aguada-de-pasajeros/aguada-de-pasajeros.js","cienfuegos":"./cienfuegos/cienfuegos.js","cruces":"./cruces/cruces.js","cumanayagua":"./cumanayagua/cumanayagua.js","lajas":"./lajas/lajas.js","palmira":"./palmira/palmira.js","rodas":"./rodas/rodas.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
