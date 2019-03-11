# infracoes-prf
Esse projeto foi criado com o objetivo de fornecer gráficos expressando as infrações de trânsito registradas pela Polícia Rodoviária Federal (PRF) de 2007 até 2018.
Os dados foram obtidos [aqui](https://www.prf.gov.br/portal/dados-abertos/infracoes). 
O board com o roadmap do projeto está disponível [aqui](https://trello.com/b/H3kq61ZE/infracoes-transito-prf).

## Por quê
Em virtude da Lei da Transparência, o governo disponibilza [dados](http://dados.gov.br/) sobre os mais diversos orgaões. Diante disso, torna-se nossa responsabilidade (desenvolvedores) implementar ferramentas que facilitem o entendimento e visualização desses dados.
Por isso, esse projeto foi criado, com o intuito de disponibilizar dados referentesa infrações de trânsito registradas pela PRF em âmbito nacional.

## Como
A PWA que será hospeado no Firebase com a finalidade de exibir gráficos que expressam esses dados. Esse projeto segue a arquitetura server-less e utiliza as Cloud Functions do Firebase com NodeJS. A camada do frontend, utiliza VueJS, juntamente com o AmCharts (versão free) para exibir os gráficos.

## Featutres previstas
- Gráfico expressando os estados com maiores infrações de trânsito.
- Gráfico expressando o percentual de veículos infratores nacionais e internacionais (PieChart).
- Gráfico expressando as top 10 cidades com maiores infrações de trânsita registrada.
- Gráfico expressando as top 10 marcas de veículos (fabricantes) com maior número de infrações.
- Gráfico expressando os horários com as maiores ocorrências.
- Um filtro com o horário de registro da ocorrência que será aplicado em todos os gráficos.

### Project setup
```
yarn install
```

#### Compiles and hot-reloads for development
```
yarn run serve
```

#### Compiles and minifies for production
```
yarn run build
```

#### Run your tests
```
yarn run test
```

#### Lints and fixes files
```
yarn run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
