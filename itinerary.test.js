const Itinerary = require('../cruise-ships/itinerary');
const Port = require('../cruise-ships/port');


describe('Itinerary', () => {
        it('can be instantiated', ()=> {
          expect(new Itinerary()).toBeInstanceOf(Object);
        })

        it('has Ports Property', () => {
           const dover = new Port('Dover')
           const calais = new Port('Dover')
           const itinerary = new Itinerary([dover,calais])
           expect(itinerary.ports).toEqual([dover,calais]);

        }) 
    } 
)

