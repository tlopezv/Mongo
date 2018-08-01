db.createUser({
    user: 'Fazt',
    pwd: '123',
    roles: ['readWrite', 'dbAdmin']
});

db.clientes.insert({
    firstName: 'Isaac',
    lastName: 'Asimov'
});

db.clientes.insert([
    { firstName: 'Elena', lastName: 'Soraya'},
    { firstName: 'Joe', lastName: 'McMillan'}
]);

db.clientes.find({firstName: 'Isaac'});

db.clientes.update(
    {lastName: 'Soraya'},
    {
        firstName: 'Elena',
        lastName: 'Soraya',
        gender: 'female'
    }
);

db.clientes.find(
    {$or: [{firstName: 'Joe'},{firstName: 'Isaac'}]}
);

db.clientes.insert(
    [
        {name: 'Alejandro', age: 20},
        {name: 'Maria', age: 30},
        {name: 'Jose', age: 81}
    ]
);

db.clientes.find(
    {age: {$gt:30}}
).pretty();

db.clientes.find(
    {age: {$gt:18, $lt: 81}}
).pretty();

db.clientes.insert(
    { 
        firstName: 'Zack',
        address: {
            city: 'London'
        }
    }
);

db.clientes.find(
    {"address.city":"London"}
);