// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"atlantico","repository":"america","path":"colombia/atlantico","depth":2,"parent":"colombia","children":["baranoa","barranquilla","campo-de-la-cruz","galapa","juan-de-acosta","luruaco","malambo","manati","palmar-de-varela","polonuevo","ponedera","puerto-colombia","repelon","sabanagrande","sabanalarga","santa-lucia","santo-tomas","soledad"]});
export const childModules = Object.freeze({"baranoa":"./baranoa/baranoa.js","barranquilla":"./barranquilla/barranquilla.js","campo-de-la-cruz":"./campo-de-la-cruz/campo-de-la-cruz.js","galapa":"./galapa/galapa.js","juan-de-acosta":"./juan-de-acosta/juan-de-acosta.js","luruaco":"./luruaco/luruaco.js","malambo":"./malambo/malambo.js","manati":"./manati/manati.js","palmar-de-varela":"./palmar-de-varela/palmar-de-varela.js","polonuevo":"./polonuevo/polonuevo.js","ponedera":"./ponedera/ponedera.js","puerto-colombia":"./puerto-colombia/puerto-colombia.js","repelon":"./repelon/repelon.js","sabanagrande":"./sabanagrande/sabanagrande.js","sabanalarga":"./sabanalarga/sabanalarga.js","santa-lucia":"./santa-lucia/santa-lucia.js","santo-tomas":"./santo-tomas/santo-tomas.js","soledad":"./soledad/soledad.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
