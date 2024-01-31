const Port = require('../cruise-ships/port');


describe('Port',() => {
    it('it can be instantiated', () => {
        expect(new Port()).toBeInstanceOf(Object);
    })

    it('has a name', () => {
        const port = new Port('Dover')
        expect(port.name).toBe('Dover');
    })
})
