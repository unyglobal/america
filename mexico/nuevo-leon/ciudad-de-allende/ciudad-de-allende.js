// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ciudad-de-allende","repository":"america","path":"mexico/nuevo-leon/ciudad-de-allende","depth":3,"parent":"mexico/nuevo-leon","children":["baudilio-silva","centro-de-allende","centro-sur","doctor-gonzalo-salazar","el-veroin","independencia","residencial-san-javier","valle-de-los-naranjos","valle-dorado","zaragoza"]});
export const childModules = Object.freeze({"baudilio-silva":"./baudilio-silva/baudilio-silva.js","centro-de-allende":"./centro-de-allende/centro-de-allende.js","centro-sur":"./centro-sur/centro-sur.js","doctor-gonzalo-salazar":"./doctor-gonzalo-salazar/doctor-gonzalo-salazar.js","el-veroin":"./el-veroin/el-veroin.js","independencia":"./independencia/independencia.js","residencial-san-javier":"./residencial-san-javier/residencial-san-javier.js","valle-de-los-naranjos":"./valle-de-los-naranjos/valle-de-los-naranjos.js","valle-dorado":"./valle-dorado/valle-dorado.js","zaragoza":"./zaragoza/zaragoza.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
