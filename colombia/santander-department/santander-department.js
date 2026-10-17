// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"santander-department","repository":"america","path":"colombia/santander-department","depth":2,"parent":"colombia","children":["barrancabermeja","bucaramanga","cimitarra","el-carmen-de-chucuri","floridablanca","giron","malaga","piedecuesta","puerto-wilches","sabana-de-torres","san-gil","socorro","velez"]});
export const childModules = Object.freeze({"barrancabermeja":"./barrancabermeja/barrancabermeja.js","bucaramanga":"./bucaramanga/bucaramanga.js","cimitarra":"./cimitarra/cimitarra.js","el-carmen-de-chucuri":"./el-carmen-de-chucuri/el-carmen-de-chucuri.js","floridablanca":"./floridablanca/floridablanca.js","giron":"./giron/giron.js","malaga":"./malaga/malaga.js","piedecuesta":"./piedecuesta/piedecuesta.js","puerto-wilches":"./puerto-wilches/puerto-wilches.js","sabana-de-torres":"./sabana-de-torres/sabana-de-torres.js","san-gil":"./san-gil/san-gil.js","socorro":"./socorro/socorro.js","velez":"./velez/velez.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
