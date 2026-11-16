# RVG Soluções em Tecnologia

Projeto de Extensão em Empreendedorismo — **UNINOVE** (Universidade Nove de Julho), Diretoria dos Cursos de Informática.

**Autor:** Arthur Barros Venancio — RA 2126201100
**Disciplina:** Projeto em Empreendedorismo
**Orientador:** Prof. Hebert Bratefixe Alquimim
**Ano:** 2026

> A **RVG Soluções em Tecnologia** é uma empresa **fictícia**, criada para este projeto. Ela oferece suporte, redes, sites e monitoramento a pequenos e médios negócios.

🔗 **Site publicado:** [inserir link do site publicado]

---

## Sobre o projeto

Pequenos negócios dependem de tecnologia todos os dias, mas quase nunca têm alguém para cuidar dela. O projeto estrutura, de ponta a ponta, uma empresa de tecnologia que resolve esse problema, reunindo em uma única entrega:

- a definição da empresa (descrição, missão, visão e valores);
- a escolha de sistemas operacionais e equipamentos, com valores estimados;
- um projeto de Internet das Coisas (monitor de temperatura com Arduino);
- um site institucional funcional.

## Serviços da empresa

| Serviço | O que inclui |
|---|---|
| Suporte e manutenção | Formatação, limpeza, troca de peças e atendimento remoto de computadores e notebooks |
| Redes e infraestrutura | Projeto de rede cabeada e Wi-Fi, organização de rack, servidor de arquivos e rotina de backup |
| Sites e sistemas web | Páginas responsivas, com formulário de contato e integração com APIs |
| Monitoramento com IoT | Sensores que acompanham o ambiente e avisam quando algo sai do normal |

## Missão, visão e valores

- **Missão:** simplificar a tecnologia para pequenos negócios, com soluções seguras, acessíveis e eficientes.
- **Visão:** ser a parceira de tecnologia mais confiável das empresas da nossa região, crescendo junto com os clientes, um atendimento de cada vez.
- **Valores:** transparência, segurança, inovação, compromisso com o cliente e aprendizado contínuo.

---

## Site institucional

Feito com **HTML, CSS e JavaScript**, em três arquivos:

```
├── index.html   # estrutura e conteúdo (início, história, serviços, equipe e contato)
├── style.css    # cores, fontes e layout responsivo
└── script.js    # validação do formulário e consulta de CEP
```

### Funcionalidades

- **Seções com navegação por menu:** início, história, serviços, equipe e contato.
- **Produtos e serviços** com imagem e texto descritivo.
- **Equipe de desenvolvimento** com avatar e função.
- **Layout responsivo:** no celular, o menu vira um botão e o conteúdo passa a uma única coluna.
- **Cores da marca em variáveis CSS**, o que facilita a manutenção.
- **Formulário de contato** com validação em JavaScript.
- **Consulta de CEP pela API [ViaCEP](https://viacep.com.br):** ao digitar o CEP e clicar em "Buscar endereço", o site preenche rua, bairro e cidade automaticamente. Se o CEP for inválido ou a internet falhar, exibe uma mensagem de erro.

### Como executar

Não há dependências nem etapa de build. Baixe os arquivos e abra o `index.html` no navegador. A consulta de CEP precisa de conexão com a internet.

### Capturas de tela

| Página inicial | Nossa história |
|:---:|:---:|
| ![Página inicial](imagens/home.png) | ![Nossa história](imagens/historia.png) |

| Produtos e serviços | Equipe de desenvolvimento |
|:---:|:---:|
| ![Produtos e serviços](imagens/servicos.png) | ![Equipe](imagens/equipe.png) |

![Formulário de contato com consulta de CEP](imagens/formulario.png)

---

## Monitor de temperatura (Internet das Coisas)

Monitor para a **sala de servidores**: se o ar-condicionado falhar e a sala esquentar, a equipe é avisada na hora, com luz e som.

### Componentes

| Componente | Função | Conexão |
|---|---|---|
| Arduino Uno | Placa que lê o sensor e controla os avisos | — |
| Sensor de temperatura TMP36 | Informa a temperatura do ambiente | Pino analógico A0 |
| LED verde | Indica temperatura normal | Pino 8 |
| LED vermelho | Indica temperatura alta | Pino 9 |
| Alarme sonoro (buzzer) | Dispara quando passa do limite | Pino 10 |
| Resistores de 220 Ω (recomendado) | Protegem os LEDs | Em série com cada LED |

### Esquema de ligação

![Esquema de ligação do monitor de temperatura](imagens/circuito.png)

### Como funciona o código

O programa (`monitor_temperatura_rvg.ino`) repete três passos a cada meio segundo:

1. Lê o valor do sensor, que vai de 0 a 1023.
2. Converte a leitura em tensão e a tensão em graus Celsius: `temperatura = (tensao - 0.5) * 100.0`.
3. Compara a temperatura com o limite de **30 °C** e aciona os avisos.

| Situação | LED verde | LED vermelho | Alarme |
|---|:---:|:---:|:---:|
| Temperatura ≤ 30 °C | aceso | apagado | desligado |
| Temperatura > 30 °C | apagado | aceso | ligado |

Quando a temperatura volta ao normal, o sistema retorna ao estado seguro. A leitura também pode ser acompanhada no monitor serial (9600 baud).

---

## Sistemas operacionais e equipamentos

Escolhidos considerando custo, desempenho e compatibilidade com os programas usados pela empresa.

| Equipamento | Descrição | Qtde. | Sistema operacional | Valor (R$) |
|---|---|:---:|---|---:|
| Notebook de desenvolvimento | Core i5, 16 GB de RAM, SSD de 512 GB | 1 | Windows 11 Pro | 3.800,00 |
| Computador de mesa (bancada de suporte) | Ryzen 5, 16 GB de RAM, SSD de 1 TB | 1 | Windows 11 Pro | 3.200,00 |
| Servidor de arquivos e backup | Arquivos e rotina de backup dos clientes | 1 | Ubuntu Server (Linux) | 9.500,00 |
| Roteador Wi-Fi 6 e switch de 16 portas | Rede cabeada e sem fio da empresa | 1 + 1 | Firmware do fabricante | 900,00 |
| Nobreak 1500 VA | Mantém servidor e rede ligados nas quedas de energia | 1 | — | 1.100,00 |
| Kit Arduino Uno | Usado no projeto de Internet das Coisas | 1 | — | 150,00 |
| **Total** | | | | **18.650,00** |

*Valores aproximados de mercado. O valor das licenças do Windows 11 Pro está incluído no preço estimado de cada equipamento.*

---

## Limitações e próximos passos

**Limitações**

- O site é de demonstração: o formulário não envia a mensagem a um servidor.
- O circuito foi pensado para um único ambiente.

**Próximos passos**

- Enviar os alertas de temperatura para o celular do cliente.
- Ampliar o site com novos serviços.

## Referências principais

- DUCKETT, Jon. *HTML e CSS: projete e construa websites*. Alta Books, 2016.
- FLANAGAN, David. *JavaScript: o guia definitivo*. 6. ed. Bookman, 2013.
- MONK, Simon. *Programação com Arduino: começando com sketches*. 2. ed. Bookman, 2017.
- [ViaCEP — Webservice gratuito de CEP](https://viacep.com.br)

A lista completa está no relatório do projeto.

---

*Projeto acadêmico, sem fins comerciais. A RVG Soluções em Tecnologia é uma empresa fictícia.*
