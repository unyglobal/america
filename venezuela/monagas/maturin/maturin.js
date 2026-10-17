// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"maturin","repository":"america","path":"venezuela/monagas/maturin","depth":3,"parent":"venezuela/monagas","children":["barrio-andres-eloy-blanco","barrio-colombia","barrio-viento-colado","el-banquiao","las-palmeras","urbanizacion-ruiz-pineda"]});
export const childModules = Object.freeze({"barrio-andres-eloy-blanco":"./barrio-andres-eloy-blanco/barrio-andres-eloy-blanco.js","barrio-colombia":"./barrio-colombia/barrio-colombia.js","barrio-viento-colado":"./barrio-viento-colado/barrio-viento-colado.js","el-banquiao":"./el-banquiao/el-banquiao.js","las-palmeras":"./las-palmeras/las-palmeras.js","urbanizacion-ruiz-pineda":"./urbanizacion-ruiz-pineda/urbanizacion-ruiz-pineda.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
