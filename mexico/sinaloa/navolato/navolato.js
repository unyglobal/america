// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"navolato","repository":"america","path":"mexico/sinaloa/navolato","depth":3,"parent":"mexico/sinaloa","children":["ampliacion-primavera-ii","ejidal","heriberto-zazueta","jardin","los-alcanfores","los-angeles","manuel-avila-camacho","nayarit","primavera-seccion-i","primavera-seccion-ii","pueblo-nuevo-numero-dos","pueblo-nuevo-numero-uno"]});
export const childModules = Object.freeze({"ampliacion-primavera-ii":"./ampliacion-primavera-ii/ampliacion-primavera-ii.js","ejidal":"./ejidal/ejidal.js","heriberto-zazueta":"./heriberto-zazueta/heriberto-zazueta.js","jardin":"./jardin/jardin.js","los-alcanfores":"./los-alcanfores/los-alcanfores.js","los-angeles":"./los-angeles/los-angeles.js","manuel-avila-camacho":"./manuel-avila-camacho/manuel-avila-camacho.js","nayarit":"./nayarit/nayarit.js","primavera-seccion-i":"./primavera-seccion-i/primavera-seccion-i.js","primavera-seccion-ii":"./primavera-seccion-ii/primavera-seccion-ii.js","pueblo-nuevo-numero-dos":"./pueblo-nuevo-numero-dos/pueblo-nuevo-numero-dos.js","pueblo-nuevo-numero-uno":"./pueblo-nuevo-numero-uno/pueblo-nuevo-numero-uno.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
