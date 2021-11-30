const Nota = require("./nota");

describe("mediaDaNotaSS", () => {
    test('8+1=9', () => {
        expect(somar.nota(8,1).toBe(9))        
    })
    test('9+1=10', () => {
        expect(somar.nota(9,1).toBe(10))
        
    });
    
    describe("mediaDaNotaMS", () => {
        test('7+1=8', () => {
            expect(somar.nota(7,1).toBe(8))        
        })
        test('7+1.9=8.9', () => {
            expect(somar.nota(7,1.9).toBe(8.9))            
        })
        test('7+0=0', () => {
            expect(somar.nota(7,0)toBe(7))
            
        });
    
        
    describe("mediaDaNotaMM", () => {
        test('5+1.9=6.9', () => {
            expect(somar.nota(5+1.9.toBe(6.9))        
    })
        test('5+0=5', () => {
             expect(somar.nota(5+0=5).toBe(5))
        
    });
   
 });

module.exports = Nota;
