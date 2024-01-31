const Ship = require('../cruise-ships/ship');
const Port = require('../cruise-ships/port');
const Itinerary = require('../cruise-ships/itinerary');


describe("Ship", () => {
    it('can be instantiated', () => {
        const port = new Port ('Dover');
        const itinerary = new Itinerary([[port]])
        const ship = new Ship(itinerary)
        expect(ship).toBeInstanceOf(Object);
    })
  

    it('it has a starting Port', () => {
        const port = new Port('Dover');
        const itinerary = new Itinerary([port]);
       
        const ship = new Ship(itinerary);
        expect(ship.currentPort).toBe(port);
      
    })

    it('it can set sail', () => {
        const port = new Port('Dover');
        const itinerary = new Itinerary([port])
        const ship = new Ship(itinerary)
        ship.setSail();
        expect(ship.startingPort).toBeFalsy();
        expect(ship.currentPort).toBeFalsy();
        expect(ship.previousPort).toBe(port);
    })

    it('can dock at different port', () => {
        const dover = new Port('Dover');
        const calais = new Port('Calais');
        const itinerary = new Itinerary([dover,calais])
        const ship = new Ship(itinerary)
        ship.setSail();
        ship.dock();
        expect(ship.currentPort).toBe(calais);
    })
})

