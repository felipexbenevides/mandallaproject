# MandallaProject
Mandalla é um tipo de produção de alimentos que utiliza os princípios universais da permacultura. Ou seja, baseia-se em um projeto consciente de um ecossistema agrícola com produção diversificada, estável e resiliente. Tal ecossistema fornece alimento, energia, abrigo e outras necessidades materiais e não materiais de forma sustentável, promovendo a autossuficiência da família rural envolvida.

É neste contexto que presente trabalho se propõe a projetar uma arquitetura baseada em internet das coisas (IoT) para o modelo de produção Mandalla, levando em consideração a produção de hortaliças, proteínas e a gestão de todo o sistema.

## Estrutura do projeto
* WebService
* Aplicativo Hibrido
* IaaS
* Virtualização de sensores

### WebService

Desenvolvido em Node.js

* Iniciando:

```
cd mandalla_api_node
node app.js
```

### Aplicativo

Desenvolvido em Ionic

* Iniciando:

```
cd mandalla_app/app
ionic serve
```

### Iaas

Digital Ocean


# Virtualização de sensores

## Arduino

O arduino funciona como um serviço online que disponibiliza a leitura dos sensores utilizados

```
{
	"id": "0019B9FBE258",
	"nade": "Arduino",
	"version": "0.1",
	"sensors": [
		{
			"id": "0019B9FBE25801",
			"version": "0.1",
			"sensors": [
				{
					"id": "01",
					"name": "nivel-tanque",
					"type": "nivel",
					"value": "7.5"
				}
			]
		},
		{
			"id": "0019B9FBE25802",
			"version": "0.1",
			"sensors": [
				{
					"id": "02",
					"name": "ph-tanque",
					"type": "ph",
					"value": "4.5"
				}
			]
		},
		{
			"id": "0019B9FBE25803",
			"version": "0.1",
			"sensors": [
				{
					"id": "03",
					"name": "umidade-solo-A1",
					"type": "umidade",
					"value": "78"
				}
			]
		}
	]
}

```


APIS de Plantio

app.get('/planting/crop/:crop', (req, res) => {
  find('crop', { "_id": new mongo.ObjectId(req.params.crop) }, {}).then((result) => {
    res.send(result);
  });
  // res.send('informacoes: ' + req.params.crop);
});

RECEBE: ID DA CULTURA 
RETORNA: DADOS ESPECÍFICOS PARA ESSA CULTURA EM FORMATO JSON
EXEMPLO: {'number': 1, "name": "Abobrinha", "quantity": 1, "un": 'Kg/m2', "harvest": 1, "intercropping": "Abobrinha,Cenoura,Milho", "companion": "", "enemy": ""}

/**
 * CROP LIST
 */
app.get('/planting/crop/', (req, res) => {
  find('crop', {}, { "name": 1 }).then((result) => {
    res.send(result);
  });
});

RECEBE: NÃO HÁ PARÂMETROS DE ENTRADA
RETORNA:LISTA EM FORMATO JSON DE INFORMACOES RESUMIDAS DE TODAS AS CULTURAS
EXEMPLO: { 'id' : xxx, 'name' : 'MILHO', 'id': yyy, 'name' : 'FEIJAO' }

/**
 * CROP COMPANION
 */
app.get('/planting/crop/:id/companion', (req, res) => {
  find('crop', { "_id": new mongo.ObjectId(req.params.crop) }, {"companion":1}).then((result) => {
    res.send(result);
  });
});


RECEBE: id da cultura
RETORNA:LISTA EM FORMATO JSON DE INFORMACOES DE CULTURAS COMPANHEIRAS PARA UMA CULTURA
EXEMPLO: { 'id' : xxx, 'companion':'Cenoura,Espinafre,Tomate,Repolho,Salsa' }


/**
 * CROP ENEMY
 */
app.get('/planting/crop/:id/enemy', (req, res) => {
  find('crop', { "_id": new mongo.ObjectId(req.params.crop) }, {"enemy":1}).then((result) => {
    res.send(result);
  });
});


RECEBE: id da cultura
RETORNA:LISTA EM FORMATO JSON DE INFORMACOES DE CULTURAS INIMIGAS PARA UMA CULTURA
EXEMPLO: { 'id' : xxx, 'enemy':'Cenoura,Espinafre,Tomate,Repolho,Salsa' }


/**
 * CROP INTERCROPPING
 */
app.get('/planting/crop/:id/intercropping', (req, res) => {
  find('crop', { "_id": new mongo.ObjectId(req.params.crop) }, {"intercropping":1}).then((result) => {
    res.send(result);
  });
});


RECEBE: id da cultura
RETORNA:LISTA EM FORMATO JSON DE INFORMACOES DE CULTURAS EM CONSORCIO PARA UMA CULTURA
EXEMPLO: { 'id' : xxx, 'intercropping':'Salsa,Tomate,Milho,Cenoura' }

NAO IMPLEMENTADO CRIAR NOVO PLANTIO
/**
 * CROP PLANTING
 */
app.post('/planting/', (req, res) => {
  console.log(req.body);
  res.json(req.body);

});
NAO IMPLEMENTADO: DADOS CLIMATICOS INMET
/**
 * CROP CLIMATIC
 */
app.get('/planting/crop/climatic', (req, res) => {

});

NAO IMPLEMENTADO: COLHEITAS A OCORRER
/**
 * Harvest
 */
app.get('/harvest/', (req, res) => {

});


