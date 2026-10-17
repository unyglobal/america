// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bello","repository":"america","path":"colombia/antioquia/bello","depth":3,"parent":"colombia/antioquia","children":["andalucia","barrio-la-milagrosa","barrio-panamericano","cairo","cairo-mesa","central","ciudad-niquia","el-carmelo","el-rosario","la-meseta","paraiso","pinon","puerto-bello","salento","suarez","urbanizacion-la-selva"]});
export const childModules = Object.freeze({"andalucia":"./andalucia/andalucia.js","barrio-la-milagrosa":"./barrio-la-milagrosa/barrio-la-milagrosa.js","barrio-panamericano":"./barrio-panamericano/barrio-panamericano.js","cairo":"./cairo/cairo.js","cairo-mesa":"./cairo-mesa/cairo-mesa.js","central":"./central/central.js","ciudad-niquia":"./ciudad-niquia/ciudad-niquia.js","el-carmelo":"./el-carmelo/el-carmelo.js","el-rosario":"./el-rosario/el-rosario.js","la-meseta":"./la-meseta/la-meseta.js","paraiso":"./paraiso/paraiso.js","pinon":"./pinon/pinon.js","puerto-bello":"./puerto-bello/puerto-bello.js","salento":"./salento/salento.js","suarez":"./suarez/suarez.js","urbanizacion-la-selva":"./urbanizacion-la-selva/urbanizacion-la-selva.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
