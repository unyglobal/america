// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"la-guajira-department","repository":"america","path":"colombia/la-guajira-department","depth":2,"parent":"colombia","children":["albania","barrancas","fonseca","hatonuevo","maicao","riohacha","san-juan-del-cesar"]});
export const childModules = Object.freeze({"albania":"./albania/albania.js","barrancas":"./barrancas/barrancas.js","fonseca":"./fonseca/fonseca.js","hatonuevo":"./hatonuevo/hatonuevo.js","maicao":"./maicao/maicao.js","riohacha":"./riohacha/riohacha.js","san-juan-del-cesar":"./san-juan-del-cesar/san-juan-del-cesar.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
