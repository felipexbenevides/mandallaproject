/*---------------------------------------------------------------------
* Código cuja finalidade é disponibilizar, para a rede, os valores de saída das portas 
* analógicas 0, 1 e 2, onde nelas terão sensores conectados. Estes valores são 
* disponibilizados em formato JSON.
/---------------------------------------------------------------------*/
#include <SPI.h>
#include <Ethernet.h>
//Endereço MAC e IP do controlador, nesse IP que serão acessados os dados.
byte mac[] = { 0xDE, 0xAD, 0xBE, 0xEF, 0xFE, 0xED };
IPAddress ip(192, 168, 1, 177);
//Inicializa a biblioteca do servidor Ethernet com o IP na porta 80 (Padrão para HTML).
EthernetServer server(80);

void setup() {
    //Abre a comunicação serial e aguarda a abertura da porta.
    Serial.begin(9600);
    while (!Serial) {
    ; // Aguarda a porta serial ser conectada.
    }
  // Inicia a conexão Ethernet e o servidor:
  Ethernet.begin(mac, ip);
  server.begin();
  //Escreve na serial o local do servidor
  Serial.print("O servidor esta em ");
  Serial.println(Ethernet.localIP());
}

void loop() {
  // Ouve os clientes recebidos, quem acessa o servidor.
  EthernetClient client = server.available();
  if (client) {
    Serial.println("Novo cliente");
    // Um pedido HTTP termina com uma linha em branco
    boolean currentLineIsBlank = true;
    while (client.connected()) {
      if (client.available()) {
        //Se o cliente estiver acessível ficamos escutando o cliente e imprimindo na série.
        char c = client.read();
        Serial.write(c);
        //Se chegou ao fim da linha e a linha está em branco significa que a solicitação
        //HTTP finalizou, logo já pode enviar a resposta.
        if (c == '\n' && currentLineIsBlank) {
          // Envia para o cliente o cabeçalho padrão.
          client.println("HTTP/1.1 200 OK");
          client.println("Content-Type: application/json; charset=utf-8");
          client.println("Access-Control-Allow-Origin: *");
          client.println("Connection: close"); // Após concluir a resposta a conexão será encerrada
          // A página atualizará a cada 5 segundos (O tempo de atualização para os valores dos sensores)
          client.println("Refresh: 5");  
          client.println();
        // JSON DOS SENSORES seguindo o padrão
            client.print("{\"id\":\"977D205F4CDD43E39AE67A90903B48D0\",");
            client.print("\"name\":\"Arduino\",");
            client.print("\"version\":\"0.1\",");
            client.print("\"sensors\":[");
            client.print("{\"id\":\"F752CBA595774EF7B07B68639B3D3506\",");
            client.print("\"version\":\"0.1\",");
            client.print("\"sensors\":[{");
            client.print("\"id\":\"01\",");
            client.print("\"name\":\"nivel_tanque\",");
            client.print("\"type\":\"nivel\",");
            client.print("\"value\":\"");
            //Valor do sensor da porta analógica 0, que nesse caso foi suposto o de nível do tanque.
            client.print(analogRead(0));
            client.print("\"}]");
            client.print("},");
            client.print("{\"id\":\"58B3D398114B46D99DBF8A8C9FB8881D\",");
            client.print("\"version\":\"0.1\",");
            client.print("\"sensors\":[{");
            client.print("\"id\":\"02\",");
            client.print("\"name\":\"ph_tanque\",");
            client.print("\"type\":\"ph\",");
            client.print("\"value\":\"");
            //Valor do sensor da porta analógica 1, que nesse caso foi suposto o de Ph do tanque.
            client.print(analogRead(1));
            client.print("\"}]");
            client.print("},");
            client.print("{\"id\":\"A69C588D122D4892B4837F66C1E96082\",");
            client.print("\"version\":\"0.1\",");
            client.print("\"sensors\":[{");
            client.print("\"id\":\"03\",");
            client.print("\"name\":\"umidade_solo_A1\",");
            client.print("\"type\":\"umidade\",");
            client.print("\"value\":\"");
            //Valor do sensor da porta analógica 2, que nesse caso foi suposto o de umidade.
            client.print(analogRead(2));
            client.print("\"}]");
            client.print("}]}");
          break;
        }
        if (c == '\n') {
        // Quando inicializa uma nova linha
          currentLineIsBlank = true;
        } else if (c != '\r') {
          // Há um caractere na linha atual
          currentLineIsBlank = false;
      }
    }
  }
  // Dando um tempo de resposta ao navegador para receber os dados
    delay(1);
    // Fecha a conexão com o cliente atual
    client.stop();
    //Imprime na serial que o cliente foi desconectado.
    Serial.println("Cliente desconectado");
    }
}
