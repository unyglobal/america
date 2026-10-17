// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"jalostotitlan","repository":"america","path":"mexico/jalisco/jalostotitlan","depth":3,"parent":"mexico/jalisco","children":["buenos-aires","centro","don-bosquito","el-deposito","el-panteon","el-refugio","el-santuario","huachilisco","la-alameda","la-asuncion","la-salve","linda-vista","perros-bravos","plaza-de-toros"]});
export const childModules = Object.freeze({"buenos-aires":"./buenos-aires/buenos-aires.js","centro":"./centro/centro.js","don-bosquito":"./don-bosquito/don-bosquito.js","el-deposito":"./el-deposito/el-deposito.js","el-panteon":"./el-panteon/el-panteon.js","el-refugio":"./el-refugio/el-refugio.js","el-santuario":"./el-santuario/el-santuario.js","huachilisco":"./huachilisco/huachilisco.js","la-alameda":"./la-alameda/la-alameda.js","la-asuncion":"./la-asuncion/la-asuncion.js","la-salve":"./la-salve/la-salve.js","linda-vista":"./linda-vista/linda-vista.js","perros-bravos":"./perros-bravos/perros-bravos.js","plaza-de-toros":"./plaza-de-toros/plaza-de-toros.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
