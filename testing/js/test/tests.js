var expect = chai.expect;

describe('Test de suma', function(){
	it('resultado positivo', function(){
		var a = suma(2,3);
		expect(a).to.be.above(0);
	})
	it('resultado negativo', function(){
		var a = suma(-1,-3);
		expect(0).to.be.above(a);
	})
});


describe('Test de Resta', function(){
	it('resultado positivo',function(){
        var a = resta(6,2);
        console.log(a)
		expect(a).to.be.above(0);
	})
	it('resultado negativo',function(){
        var a = resta(-4,-4);
        console.log(a)
		expect(a).to.be.equal(0);
	})
});