
var faker = require('faker')
var cpf = require('gerador-validador-cpf')


export default {

    deliver: function () {

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data = {
            name: `${firstName} ${lastName}`,
            cpf: cpf.generate(),
            email: faker.internet.email(firstName),
            whatsapp: '11959854578',
            address: {
                postalcode: '26292093',
                street: 'Rua Matteo Palladino',
                number: '55',
                details: 'casa',
                district: 'Campo Alegre',
                city_state: 'Nova Iguaçu/RJ'
            },
            delivery_method: 'Moto',
            cnh: 'cnh-digital.jpg'
        }

        return data
    }
}