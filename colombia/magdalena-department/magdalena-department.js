// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"magdalena-department","repository":"america","path":"colombia/magdalena-department","depth":2,"parent":"colombia","children":["aracataca","chivolo","cienaga","el-banco","el-reten","fundacion","guamal","nueva-granada","pivijay","plato","puebloviejo","santa-marta","sitionuevo"]});
export const childModules = Object.freeze({"aracataca":"./aracataca/aracataca.js","chivolo":"./chivolo/chivolo.js","cienaga":"./cienaga/cienaga.js","el-banco":"./el-banco/el-banco.js","el-reten":"./el-reten/el-reten.js","fundacion":"./fundacion/fundacion.js","guamal":"./guamal/guamal.js","nueva-granada":"./nueva-granada/nueva-granada.js","pivijay":"./pivijay/pivijay.js","plato":"./plato/plato.js","puebloviejo":"./puebloviejo/puebloviejo.js","santa-marta":"./santa-marta/santa-marta.js","sitionuevo":"./sitionuevo/sitionuevo.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
