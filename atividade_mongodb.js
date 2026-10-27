use('LojaVirtual_DB');

const idsPedidoDemo = ['PED-10045'];
const idsProdutosDemo = [
    'PROD-001',
    'PROD-002',
    'PROD-003',
    'PROD-004',
    'PROD-005',
    'PROD-TESTE'
];

db.pedidos.deleteMany({ _id: { $in: idsPedidoDemo } });
db.produtos.deleteMany({ _id: { $in: idsProdutosDemo } });

db.pedidos.insertOne({
    _id: 'PED-10045',
    data_pedido: '2026-10-18',
    status: 'Em Processamento',
    valor_total: 2399.80,

    cliente: {
        nome: 'Carlos Eduardo Silva',
        email: 'carlos.silva@email.com',

        endereco_entrega: {
            rua: 'Rua das Flores',
            numero: 125,
            bairro: 'Centro',
            cidade: 'Campinas'
        }
    },

    itens: [
        {
            produto: 'Notebook',
            quantidade: 1,
            preco_unitario: 1999.90
        },
        {
            produto: 'Mouse sem fio',
            quantidade: 2,
            preco_unitario: 199.95
        }
    ]
});

db.produtos.insertMany([
    {
        _id: 'PROD-001',
        nome: 'Teclado Mecânico',
        categoria: 'Periféricos',
        preco: 249.90,
        estoque: 12,
        tags: ['teclado', 'gamer']
    },
    {
        _id: 'PROD-002',
        nome: 'Monitor 24 polegadas',
        categoria: 'Monitores',
        preco: 899.90,
        estoque: 8,
        tags: ['monitor', 'full-hd']
    },
    {
        _id: 'PROD-003',
        nome: 'Mouse USB',
        categoria: 'Periféricos',
        preco: 89.90,
        estoque: 20,
        tags: ['mouse', 'usb']
    },
    {
        _id: 'PROD-004',
        nome: 'Headset Gamer',
        categoria: 'Áudio',
        preco: 179.90,
        estoque: 3,
        tags: ['headset', 'gamer']
    },
    {
        _id: 'PROD-005',
        nome: 'Webcam HD',
        categoria: 'Acessórios',
        preco: 129.90,
        estoque: 0,
        tags: ['webcam', 'hd']
    },
    {
        _id: 'PROD-TESTE',
        nome: 'Produto de Teste',
        categoria: 'Acessórios',
        preco: 10.00,
        estoque: 0,
        tags: ['teste']
    }
]);

db.produtos.updateOne(
    { _id: 'PROD-001' },
    {
        $set: {
            preco: 199.90
        }
    }
);

db.produtos.updateMany(
    { estoque: { $gt: 5 } },
    {
        $set: {
            status_promocao: 'ativo'
        }
    }
);

db.produtos.updateOne(
    { _id: 'PROD-001' },
    {
        $push: {
            tags: 'liquidacao'
        }
    }
);

db.produtos.find({
    preco: { $lt: 150.00 }
});

db.produtos.find({
    categoria: {
        $in: ['Periféricos', 'Monitores']
    }
});

db.produtos.deleteOne({
    _id: 'PROD-TESTE'
});

db.produtos.deleteMany({
    estoque: 0
});

console.log('Pedido completo:');
db.pedidos.find({
    _id: 'PED-10045'
});

console.log('Produtos restantes:');
db.produtos.find({});

console.log('Produtos em promoção:');
db.produtos.find({
    status_promocao: 'ativo'
});

console.log('Produtos com tags e promoção:');
db.produtos.find(
    {},
    {
        _id: 1,
        nome: 1,
        preco: 1,
        estoque: 1,
        tags: 1,
        status_promocao: 1
    }
);
