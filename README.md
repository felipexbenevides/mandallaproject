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





