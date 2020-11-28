var parser = require("fast-xml-parser");
const request = require("request");

const adress = //CEP

const url = "http://viacep.com.br/ws/";
const path = `${adress}/xml/`;

request(`${url}${path}`, (err, res, body) => {
  var { xmlcep } = parser.parse(body);

  console.log(
    `${xmlcep.logradouro}, ${xmlcep.bairro} - ${xmlcep.localidade}/${xmlcep.uf}`
  );
});