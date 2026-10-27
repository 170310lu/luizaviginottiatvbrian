# Projeto de Banco de Dados — Loja Virtual

## Objetivo
Este projeto foi desenvolvido para representar a continuidade das atividades de Modelagem NoSQL e Documentos Incorporados e Operações de Manipulação de Dados. O tema central é uma loja virtual, com foco em pedidos e produtos armazenados em MongoDB usando JavaScript no ambiente do Mongo Shell.

## Tecnologias utilizadas
- MongoDB
- MongoDB Shell
- JavaScript

## Estrutura do projeto

```text
luiza/
├── atividade_mongodb.js
├── README.md
```

## Banco de dados e coleções
O script cria e utiliza o banco:

```javascript
use('LojaVirtual_DB');
```

Em seguida, trabalha com as coleções:
- pedidos
- produtos

## O que está implementado
1. Criação do banco LojaVirtual_DB
2. Inserção de um pedido completo com documento incorporado
3. Inserção de produtos fictícios para uma loja eletrônica
4. updateOne com $set para alterar um preço
5. updateMany com $set para definir promoção em produtos com estoque maior que 5
6. updateOne com $push para acrescentar a tag liquidacao
7. Consulta com $lt para listar produtos abaixo de 150.00
8. Consulta com $in para buscar categorias específicas
9. deleteOne para remover um produto de teste
10. deleteMany para remoção em massa de produtos sem estoque
11. Consultas finais para conferência dos resultados

## Execução
No terminal, na pasta do projeto, execute:

```bash
mongosh --file atividade_mongodb.js
```

Ou, se quiser conectar explicitamente ao banco:

```bash
mongosh "mongodb://localhost:27017/LojaVirtual_DB" --file atividade_mongodb.js
```

## Observações
- O script foi preparado para ser executado mais de uma vez sem gerar erro de chave duplicada.
- A limpeza feita é restrita aos documentos de demonstração da atividade, sem deletar registros externos do usuário.
- Os dados são fictícios e usados apenas para fins de aprendizado.

## Finalidade acadêmica
Este projeto tem como objetivo praticar modelagem de dados em MongoDB, atualização de documentos, consultas comparativas e por lista, exclusão segura de registros e organização lógica dos comandos em sequência didática.
