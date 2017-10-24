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
	"nOde": "Arduino",
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


APIS

## CULTURA
```
URL:'/planting/crop/:crop'
```
* RECEBE: ID DA CULTURA 
* RETORNA: DADOS ESPECÍFICOS PARA ESSA CULTURA EM FORMATO JSON
* EXEMPLO: {'number': 1, "name": "Abobrinha", "quantity": 1, "un": 'Kg/m2', "harvest": 1, "intercropping": "Abobrinha,Cenoura,Milho", "companion": "", "enemy": ""}

## LISTA DE CULTURAS
``` URL:'/planting/crop/' ```
* RECEBE: NÃO HÁ PARÂMETROS DE ENTRADA
* RETORNA:LISTA EM FORMATO JSON DE INFORMACOES RESUMIDAS DE TODAS AS CULTURAS
* EXEMPLO: { 'id' : xxx, 'name' : 'MILHO', 'id': yyy, 'name' : 'FEIJAO' }

## COMPANHEIRAS
``` URL: '/planting/crop/:id/companion' ```
* RECEBE: id da cultura
* RETORNA:LISTA EM FORMATO JSON DE INFORMACOES DE CULTURAS COMPANHEIRAS PARA UMA CULTURA
* EXEMPLO: { 'id' : xxx, 'companion':'Cenoura,Espinafre,Tomate,Repolho,Salsa' }

## CULTURAS INIMIGAS
``` URL: '/planting/crop/:id/enemy' ```
* RECEBE: id da cultura
* RETORNA:LISTA EM FORMATO JSON DE INFORMACOES DE CULTURAS INIMIGAS PARA UMA CULTURA
* EXEMPLO: { 'id' : xxx, 'enemy':'Cenoura,Espinafre,Tomate,Repolho,Salsa' }

## CONSÓRCIO
``` URL: '/planting/crop/:id/intercropping' ```
* RECEBE: id da cultura
* RETORNA:LISTA EM FORMATO JSON DE INFORMACOES DE CULTURAS EM CONSORCIO PARA UMA CULTURA
* EXEMPLO: { 'id' : xxx, 'intercropping':'Salsa,Tomate,Milho,Cenoura' }

## SENSORES
``` URL: '/sensors' ```
* RECEBE: NÃO HÁ PARÂMETROS DE ENTRADA
* RETORNA: LEITURA IMEDIATA DOS SENSORES CONECTADOS AO ARDUINO.

``` URL: '/sensor/water/level' ```
* RECEBE: NÃO HÁ PARÂMETROS DE ENTRADA
* RETORNA: LEITURA IMEDIATA DOS SENSOR DE NÍVEL.

``` URL: '/sensor/water/ph' ```
* RECEBE: NÃO HÁ PARÂMETROS DE ENTRADA
* RETORNA: LEITURA IMEDIATA DO SENSOR DE PH.

``` URL: '/sensor/soil/moisture' ```
* RECEBE: NÃO HÁ PARÂMETROS DE ENTRADA
* RETORNA: LEITURA IMEDIATA DO SENSOR DE UMIDADE DO SOLO.

## CIRCULOS DA VIDA (APIS BACKEND FOR FRONT END)

``` URL: '/circles/life' ```
* RECEBE: NÃO HÁ PARÂMETROS DE ENTRADA
* RETORNA: ÁREAS EM USO (PLANTADAS) DENTRO DOS CÍRCULOS CORRESPONDENTES À QUALIDADE DE VIDA.
![alt text](https://raw.githubusercontent.com/felipexbenevides/mandallaproject/master/files/3.jpg)


``` URL: '/circles/economic' ```
* RECEBE: NÃO HÁ PARÂMETROS DE ENTRADA
* RETORNA: ÁREAS EM USO (PLANTADAS) DENTRO DOS CÍRCULOS CORRESPONDENTES À PRODUTIVIDADE ECONÔMICA.
![alt text](https://raw.githubusercontent.com/felipexbenevides/mandallaproject/master/files/2.jpg)


``` URL: '/circles/environment' ```
* RECEBE: nada
* RETORNA: ÁREAS EM USO (PLANTADAS) DENTRO DOS CÍRCULOS CORRESPONDENTES À EQUILÍBRIO AMBIENTAL.
![alt text](https://raw.githubusercontent.com/felipexbenevides/mandallaproject/master/files/1.jpg)


## PLANTIO
``` URL:/planting/' ```
* POST
* INSERE UM NOVO PLANTIO NO BANCO DE DADOS
* RECEBE JSON COM SECTOR_ID,CROP_ID,PLANTING_DATE

``` URL:'/planting/sector' ```
* RECEBE: NÃO HÁ PARÂMETROS DE ENTRADA
* RETORNA INFORMAÇÕES SOBRE OS SETORES DA MANDALA

``` URL:/planting/sector/planted' ```
* RECEBE: NÃO HÁ PARÂMETROS DE ENTRADA
* RETORNA INFORMAÇÕES SOBRE TODOS OS SETORES PLANTADOS E AS CULTURAS COM DATA DE PLANTIO.

``` URL:/sector/enabled' ```
* POST
* DESATIVA OU ATIVA UM SETOR DA MANDALA
* RECEBE: boolean
* RETORNA: NÃO HÁ RETORNO.

``` URL:/planting/sector/sector:id' ```
* RECEBE: NÃO HÁ PARÂMETROS DE ENTRADA
* RETORNA INFORMAÇÕES SOBRE UM SETOR DA MANDALA

``` URL:/planting/sector/sector:id/planted' ```
* RECEBE: NÃO HÁ PARÂMETROS DE ENTRADA
* RETORNA INFORMAÇÕES SOBRE AS CULTURAS COM STATUS DE PLANTIO EM UM SETOR

``` URL:/planting/sector/sector:id/harvested' ```
* RECEBE: NÃO HÁ PARÂMETROS DE ENTRADA
* RETORNA INFORMAÇÕES SOBRE O HISTÓRICO DE COLHEITA DE UM SETOR

## COLHER
``` URL:/harvest/' ```
* POST
* INSERE UMA COLHEITA PARA UM SETOR
* RECEBE JSON COM SECTOR_ID,HARVEST_DATE

