require('jasmine');
require('../helpers/disable-console')();

const { Ferrari, Jelcz } = require('../../src');

describe('Ferrari', () => {
    it('has drive method', () => {
        const o = new Ferrari();
        expect(o.drive).toEqual(jasmine.any(Function));
    });

    it('should print engine signal', () => {
        const o = new Ferrari();
        const display = spyOn(console, 'log');
        o.drive();
        expect(display).toHaveBeenCalledWith('wruuu');
    });
});

describe('Jelcz', () => {
    it('has drive method', () => {
        const o = new Jelcz();
        expect(o.drive).toEqual(jasmine.any(Function));
    });

    it('should print engine signal', () => {
        const o = new Jelcz();
        const display = spyOn(console, 'log');
        o.drive();
        expect(display).toHaveBeenCalledWith('grrr');
    });
});

it('Jelcz and Ferrari should have the same parent constructor', () => {
    const f = new Ferrari();
    const fProto = Object.getPrototypeOf(f);
    const j = new Jelcz();
    const jProto = Object.getPrototypeOf(j);
    expect(fProto).toEqual(jProto);
});
