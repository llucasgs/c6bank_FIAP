const aereasNacional = ['Latam', 'Gol', 'Azul'];

const airCompanies = [...aereasNacional, 'Delta', 'United AirLines', 'Emirates'];

console.log(airCompanies);

const user = {
    name: "Lucas Garcia",
    email: "llucasgarcia@hotmail.com",
    password: "zdba0500"
};

// atribuição por desestruturação
const {password, ...data} = user;

console.log("Oh meu Deus!", data);