O TESTE


O teste consiste em criar uma API em Node utilizando preferencialmente express e sequelize, conectada ao banco de dados que iremos disponibilizar (clique aqui para ir para o SQL do banco de dados).

Após a criação dessa API, você  terá que construir uma tela desenhada no Figma (clique aqui para ir para o Figma), preferencialmente em vue.js, consultando essa API criada por você e exibindo os dados que estão retornando dessa API.


Explicando melhor o banco de dados


O banco de dados possuem alguns relacionamentos


Na tabela de orders os campos cnpjId, userId, buyerId e providerId tem relacionamento com as tabelas cnpjs, users, buyers e providers respectivamente.
buyers = sacados; providers = cedentes


O status que está sendo exibido no front-end é o status do buyer (orderStatusBuyer), segue a ordem dos status de 0 á 8


['Pendente de confirmação', 'Pedido confirmado', 'Não reconhece o pedido', 'Mercadoria não recebida', 'Recebida com avaria', 'Devolvida', 'Recebida com devolução parcial', 'Recebida e confirmada', 'Pagamento Autorizado']


Assim que terminar o teste, nos envie o link do github para avaliarmos,qualquer dúvida em relação ao teste ou a vaga estou à disposição!


Prazo até quarta-feira 04/01, ok?