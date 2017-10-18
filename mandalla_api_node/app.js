var express = require('express');
var app = express();

var http = require('http');
var bodyParser = require('body-parser');

var mongo = require('mongodb');
const MongoClient = mongo.MongoClient;

var serverParam = { mode: 'debug', port: '80', sign: 'mandallaProjectServer' };

app.listen(80, function () {
  status('ON');
});

var request = require('request');
// request('http://192.168.1.177', function (error, response, body) {
//   console.log('request')
//   if (!error && response.statusCode == 200) {
//     console.log(body) // Print the google web page.
//   }
// })


/**
 * UTIL
 */

function find(collection, filter, fields) {
  return new Promise((resolve, reject) => {
    MongoClient.connect('mongodb://localhost:27017/mandalla', (err, db) => {
      if (err) return console.log(err);
      return db.collection(collection).find(filter, fields).toArray(function (err, docs) {
        db.close();
        resolve(docs);
      });
    });
  });
}

/**
 * Middleware
 */
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  var d = new Date();
  console.warn('Request Time:', d.toUTCString());
  console.log('Request Type:', req.method);
  console.log('Request URL:', req.originalUrl);
  next();
});

app.use(bodyParser.json());

/**
 * TESTES
 */
app.get('/', (req, res) => {
  res.send('Hello World - Mandalla IoT');
});

/**
 * ARDUINO
 */
app.get('/arduino', (req, res) => {
  res.send('{"id":"977D205F4CDD43E39AE67A90903B48D0","name":"Arduino","version":"0.1","sensors":[{"id":"F752CBA595774EF7B07B68639B3D3506","version":"0.1","sensors":[{"id":"01","name":"nivel_tanque","type":"nivel","value":"271"}]},{"id":"58B3D398114B46D99DBF8A8C9FB8881D","version":"0.1","sensors":[{"id":"02","name":"ph_tanque","type":"ph","value":"303"}]},{"id":"A69C588D122D4892B4837F66C1E96082","version":"0.1","sensors":[{"id":"03","name":"umidade_solo_A1","type":"umidade","value":"337"}]}]}');
});

/*
   _____ ______ _   _  _____  ____  _____   _____ 
  / ____|  ____| \ | |/ ____|/ __ \|  __ \ / ____|
 | (___ | |__  |  \| | (___ | |  | | |__) | (___  
  \___ \|  __| | . ` |\___ \| |  | |  _  / \___ \ 
  ____) | |____| |\  |____) | |__| | | \ \ ____) |
 |_____/|______|_| \_|_____/ \____/|_|  \_\_____/ 
*/

/**
 * SENSORS LIST
 */
app.get('/sensors', (req, res) => {
  request('http://192.168.1.177', (error, response, body) => {
    console.log('request')
    if (!error && response.statusCode == 200) {
      console.log(body)
      res.send(body);
    }
  })
});
/*
*
*/
app.get('/sensor/water/level', (req, res) => {
  request('http://192.168.1.177', (error, response, body) => {
    console.log('request')
    if (!error && response.statusCode == 200) {
      console.log(body)
      var data = JSON.parse(body);
      res.send(data.sensors.filter((obj) => {
        return (obj['sensors'][0]['name'] == "nivel_tanque") ? true : false
      }));
    }
  })
});
/*
*
*/
app.get('/sensor/water/ph', (req, res) => {
  request('http://192.168.1.177', (error, response, body) => {
    console.log('request')
    if (!error && response.statusCode == 200) {
      console.log(body)
      var data = JSON.parse(body);
      res.send(data.sensors.filter((obj) => {
        return (obj['sensors'][0]['name'] == "ph_tanque") ? true : false
      }));
    }
  })
});
/*
*
*/
app.get('/sensor/soil/moisture', (req, res) => {
  request('http://192.168.1.177', (error, response, body) => {
    console.log('request')
    if (!error && response.statusCode == 200) {
      console.log(body)
      var data = JSON.parse(body);
      res.send(data.sensors.filter((obj) => {
        return (obj['sensors'][0]['name'] == "umidade_solo_A1") ? true : false
      }));
    }
  })
});

/**
   _____ _____ _____   _____ _      ______  _____ 
  / ____|_   _|  __ \ / ____| |    |  ____|/ ____|
 | |      | | | |__) | |    | |    | |__  | (___  
 | |      | | |  _  /| |    | |    |  __|  \___ \ 
 | |____ _| |_| | \ \| |____| |____| |____ ____) |
  \_____|_____|_|  \_\\_____|______|______|_____/ 
                                                  
                                                  
 */


 /*
 *life
 */
app.get('/circles/life', (req, res) => {
      res.send('life');

});
/*
*economic
*/
app.get('/circles/economic', (req, res) => {
  res.send('economic');
  
});
/*
*environment
*/
app.get('/circles/environment', (req, res) => {
  res.send('environment');
  
});




/*
 _____  _               _   _ _______ _____ _   _  _____ 
|  __ \| |        /\   | \ | |__   __|_   _| \ | |/ ____|
| |__) | |       /  \  |  \| |  | |    | | |  \| | |  __ 
|  ___/| |      / /\ \ | . ` |  | |    | | | . ` | | |_ |
| |    | |____ / ____ \| |\  |  | |   _| |_| |\  | |__| |
|_|    |______/_/    \_\_| \_|  |_|  |_____|_| \_|\_____|
                                                         
*/

/**
 * CROP LIST
 */
app.get('/planting/crop/', (req, res) => {
  find('crop', {}, { "name": 1 }).then((result) => {
    res.send(result);
  });
});

/**
 * CROP ID
 */
app.get('/planting/crop/:crop', (req, res) => {
  find('crop', { "_id": new mongo.ObjectId(req.params.crop) }, {}).then((result) => {
    res.send(result);
  });
});

/**
 * CROP COMPANION
 */
app.get('/planting/crop/:crop/companion', (req, res) => {
  find('crop', { "_id": new mongo.ObjectId(req.params.crop) }, { "companion": 1 }).then((result) => {

    res.send(result);
  });
  // res.send('informacoes: ' + req.params.crop);
});

/**
 * CROP ENEMY
 */
app.get('/planting/crop/:crop/enemy', (req, res) => {
  find('crop', { "_id": new mongo.ObjectId(req.params.crop) }, { "enemy": 1 }).then((result) => {

    res.send(result);
  });
});


/**
 * CROP INTERCROPPING
 */
app.get('/planting/crop/:crop/intercropping', (req, res) => {
  find('crop', { "_id": new mongo.ObjectId(req.params.crop) }, { "intercropping": 1 }).then((result) => {
    res.send(result);
  });
});

/**
 * CROP PLANTING
 */
app.post('/planting/', (req, res) => {
  console.log(req.body);
  res.json(req.body);

});

/**
 * CROP CLIMATIC
 */
app.get('/planting/crop/climatic', (req, res) => {
});


/**
  _    _          _______      ________  _____ _______ 
 | |  | |   /\   |  __ \ \    / /  ____|/ ____|__   __|
 | |__| |  /  \  | |__) \ \  / /| |__  | (___    | |   
 |  __  | / /\ \ |  _  / \ \/ / |  __|  \___ \   | |   
 | |  | |/ ____ \| | \ \  \  /  | |____ ____) |  | |   
 |_|  |_/_/    \_\_|  \_\  \/   |______|_____/   |_|   
                                                       
 */

/**
 * Harvest
 */
app.get('/harvest/', (req, res) => {
});


/**
 * INIT DB
 */
app.get('/db/init/', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.send('init');
  init();
});




function status(status) {
  console.group("Server Info:");
  console.log('Port: ' + serverParam.port);
  console.log('Mode: ' + serverParam.mode);
  console.group("Status:");
  console.log(serverParam.sign + ': ' + status);
  console.groupEnd();
  console.groupEnd();
}


function init() {
  MongoClient.connect('mongodb://localhost:27017/mandalla', (err, db) => {
    if (err) return console.log(err);
    db.collection("crop").insertMany(
      [
        { 'number': 1, "name": "Abobrinha", "quantity": 1, "un": 'Kg/m2', "harvest": 1, "intercropping": "Abobrinha,Cenoura,Milho", "companion": "", "enemy": "" },
        { 'number': 2, "name": "Alface", "quantity": 2, "un": 'Kg/m2', "harvest": 1, "intercropping": "Abobrinha,Alface,Cenoura,Rabanete,Beterraba,Feijao,Milho,Cebola,Tomate", "companion": "abobrinha, cenoura, rabanete, morango, alho-poró, beterraba, rúcula, acelga, feijão, alho, chicória, milho, alho, nabo, hortelã, ervilha, cebola, couve-flor, tomate.", "enemy": "Pepino, salsa, morango, aipo." },
        { 'number': 3, "name": "Berinjela", "quantity": 1, "un": 'Kg/m2', "harvest": 1, "intercropping": "Berinjela,Feijao", "companion": "feijao, vagem", "enemy": "" },
        { 'number': 4, "name": "Beterraba", "quantity": 44, "un": 'pes/m2', "harvest": 1, "intercropping": "Beterraba,Cebola,Feijao", "companion": "alface, alho, cebola, couve, nabo, vagem, couve, rabano", "enemy": "" },
        { 'number': 5, "name": "Cebola", "quantity": 44, "un": 'pes/m2', "harvest": 1, "intercropping": "Cebola,Beterraba,Salsa,Pepino,Cenoura,Tomate,2", "companion": "Beterraba, macela, salsa, pepino, abóbora, morango, cenoura, camomila, tomate, sálvia, segurelha, alface, rosa, alecrim, couve, caruru", "enemy": "Ervilha, feijao, couve-flor, espargo" },
        { 'number': 6, "name": "Cebolinha", "quantity": 10, "un": 'molhos/m2', "harvest": 1, "intercropping": "Cenoura,Espinafre,Tomate,Repolho,Salsa", "companion": "Cenoura, mostarda, espinafre, tomate, rosa, repolho, couve-flor", "enemy": "Ervilha, feijão." },
        { 'number': 7, "name": "Cenoura", "quantity": 8.5, "un": 'pes/m2', "harvest": 1, "intercropping": "Cenoura,Alface,Feijao,Rabanete,Tomate,Cebola,Cebolinha,Salsa", "companion": "Ervilha, alface, manjerona, feijão, rabanete, tomate, cravo-de-defunto, sálvia, cebola, cebolinha, bardana, salsa, hortelã, chicória, abóbora, alho, alho-poró, alecrim, bardana,", "enemy": "" },
        { 'number': 8, "name": "Couve", "quantity": 1.6, "un": 'molhos/m2', "harvest": 1, "intercropping": "Couve,Feijao,Cebolinha,Salsa,Espinafre,2,Pepino,Rabanete", "companion": "Feijão, ervilha, salsão, nastúrcio, camomila, hortelã, endro, sálvia, alecrim, tomilho, losna, cebolinha, aipo, salsa, acelga, espinafre, alface, pepino, rabanete", "enemy": "" },
        { 'number': 9, "name": "Espinafre", "quantity": 5, "un": 'molhos/m2', "harvest": 1, "intercropping": "Espinafre,Feijao,Beterraba,Cebolinha", "companion": "Morango, feijão, beterraba, couve- flor, cebolinha.", "enemy": "" },
        { 'number': 10, "name": "Pepino", "quantity": 24.4, "un": 'frutos/m2', "harvest": 1, "intercropping": "Pepino,Milho,Feijao,Salsa,Beterraba,Cebola", "companion": "girassol, feijao, milho, ervilha, aipo, salsa, beterraba, cebola", "enemy": "Rabanete, tomate, alface" },
        { 'number': 11, "name": "Pimentao", "quantity": 30, "un": 'frutos/m2', "harvest": 1, "intercropping": "Pimentao,Alface,Coentro,Couve,Espinafre", "companion": "", "enemy": "" },
        { 'number': 12, "name": "Quiabo", "quantity": 5, "un": 'kg/m2', "harvest": 1, "intercropping": "Quiabo,Milho", "companion": "maxixe, milho", "enemy": "" },
        { 'number': 13, "name": "Rabanete", "quantity": 85, "un": 'pes/m2', "harvest": 1, "intercropping": "Rabanete,Tomate,Salsa,Couve,Feijao,Cenoura,Espinafre,Milho,2", "companion": "aspargo, tomate, ervilha, salsa, couve, batata, feijao, agriao, cenoura, espinafre, vagem, chicoria, cerefolio, milho, nasturcio, alface", "enemy": "pepino" },
        { 'number': 14, "name": "Repolho", "quantity": 3.6, "un": 'pes/m2', "harvest": 1, "intercropping": "Repolho,Beterraba,Alface,Tomate,Cebola,Cebolinha", "companion": "Batata, beterraba, alface, aspargo, tomate, endro, alecrim, salsão, nastúrcio, estragão, cebola, cebolinha, ervas aromáticas, hortela", "enemy": "morango" },
        { 'number': 15, "name": "Tomate", "quantity": 6.4, "un": 'Kg/m2', "harvest": 1, "intercropping": "Tomate,Cebola,Cebolinha,Salsa,Cenoura,Espinafre,Alface,Milho,Feijao,Rabanete", "companion": "Aspargo, alecrim, alho, cebola, cebolinha, hortelã, salsa, cenoura, calêndula, serralha, salsão, sálvia, tomilho, malmequer , aipo, nabo, chicória, espinafre, alface, milho, feijão, rabanete, nastúrcio, urtiga, borragem, erva-cidreira, menta, manjericão, cravo-de-defunto", "enemy": "Pimenta, soja, batatinha, ervilha, pepino, batata" },
        { 'number': 16, "name": "Coentro", "quantity": 12, "un": 'molhos/m2', "harvest": 1, "intercropping": "Coentro,Alface,Beterraba,Cebola,Cebolinha,Repolho,Tomate", "companion": "", "enemy": "" },
        { 'number': 17, "name": "Milho", "quantity": 6, "un": 'espigas/m2', "harvest": 1, "intercropping": "Milho,Feijao,Pepino,Abobrinha,Rabanete,Quiabo,Berinjela,Salsa,Tomate,Alface", "companion": "Batatas,    ervilha,    feijão,    pepino, abóbora,   melão,   melancia,   trigo, rúcula,    nabo,    rabanete,    quiabo, maxixe, mostarda, serralha, moranga, girassol, endro, beldroega, caruru, mucuna, berinjela, feijão-de-porco, amendoim, salsa,tomate, alface", "enemy": "funcho, aipo, beterraba" },
        { 'number': 18, "name": "Feijao", "quantity": 0.18, "un": 'Kg/m2', "harvest": 1, "intercropping": "Feijao,Berinjela,Alface,Cenoura,Pepino,Couve,Repolho,Salsa,Beterraba,Rabanete,Tomate", "companion": "Milho, girassol, berinjela, alface, alho-poró, batata, cenoura, pepino, couves, repolho, petúnia, alecrim, segurelha, nabo, aipo, salsa, beterraba, rabanete, tomate, ervas aromaticas.", "enemy": "mandioca, alho, ervilha, cebola." },
        { 'number': 19, "name": "Salsa", "quantity": 12, "un": 'molhos/m2', "harvest": 1, "intercropping": "Salsa,Tomate,Milho,Cenoura", "companion": "tomate, aspargo, pimenta, salsa", "enemy": "alface" }
      ], function (err, r) {
      });
    db.close();

  });

  /*
  {"id":"977D205F4CDD43E39AE67A90903B48D0","name":"Arduino","version":"0.1","sensors":[{"id":"F752CBA595774EF7B07B68639B3D3506","version":"0.1","sensors":[{"id":"01","name":"nivel_tanque","type":"nivel","value":"271"}]},{"id":"58B3D398114B46D99DBF8A8C9FB8881D","version":"0.1","sensors":[{"id":"02","name":"ph_tanque","type":"ph","value":"303"}]},{"id":"A69C588D122D4892B4837F66C1E96082","version":"0.1","sensors":[{"id":"03","name":"umidade_solo_A1","type":"umidade","value":"337"}]}]}
  */

}