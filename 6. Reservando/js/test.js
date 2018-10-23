var expect = chai.expect;

describe('Reserva de horario', function () {
    it('Selecciona un horario y lo elimina de array', function () {
        let restaurant = new Restaurant(1, 'Cremona', 'rubro', 'ubicación', ['10', '11', '12'], 'image', [2,3]);

        var cantidadPrevia = restaurant.horarios.length;
        restaurant.reservarHorario('11');

        expect(restaurant.horarios).to.not.include('11');
        expect(restaurant.horarios.length).to.equal(cantidadPrevia - 1);
    })
})