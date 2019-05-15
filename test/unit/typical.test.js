require('../helpers/disable-console')();

const { Ferrari, Jelcz } = require('../../src');

describe('Ferrari', () => {
    it('has drive method', () => {
        const o = new Ferrari();
        expect(o.drive).toEqual(jasmine.any(Function));
    });

    it('should print engine signal', () => {
        const o = new Ferrari();
        const mySpy = spyOn(global.console, 'log');
        o.drive();
        expect(mySpy).toHaveBeenCalledWith('wruuu');
    });
});

describe('Jelcz', () => {
    it('has drive method', () => {
        const o = new Jelcz();
        expect(o.drive).toEqual(jasmine.any(Function));
    });

    it('should print engine signal', () => {
        const o = new Jelcz();
        const mySpy = spyOn(global.console, 'log');
        o.drive();
        expect(mySpy).toHaveBeenCalledWith('grrr');
    });
});

it('Jelcz and Ferrari should have the same parent constructor', () => {
    const f = new Ferrari();
    const fProto = Object.getPrototypeOf(f);
    const j = new Jelcz();
    const jProto = Object.getPrototypeOf(j);
    expect(fProto).toEqual(jProto);
});
