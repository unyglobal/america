// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"delgado","repository":"america","path":"el-salvador/san-salvador-department/delgado","depth":3,"parent":"el-salvador/san-salvador-department","children":["colonia-california","colonia-quinta-gloria","colonia-san-francisco","colonia-santa-lucia","comunidad-el-carmen","comunidad-ferrocarril-norte","residencial-joya","residencial-paleca"]});
export const childModules = Object.freeze({"colonia-california":"./colonia-california/colonia-california.js","colonia-quinta-gloria":"./colonia-quinta-gloria/colonia-quinta-gloria.js","colonia-san-francisco":"./colonia-san-francisco/colonia-san-francisco.js","colonia-santa-lucia":"./colonia-santa-lucia/colonia-santa-lucia.js","comunidad-el-carmen":"./comunidad-el-carmen/comunidad-el-carmen.js","comunidad-ferrocarril-norte":"./comunidad-ferrocarril-norte/comunidad-ferrocarril-norte.js","residencial-joya":"./residencial-joya/residencial-joya.js","residencial-paleca":"./residencial-paleca/residencial-paleca.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
