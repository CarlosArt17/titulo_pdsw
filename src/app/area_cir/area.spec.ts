import {area} from "./area";

describe ('area', () =>{
    it('Should return area ', ()=> {
        const circulo = area(0.5);
        expect(circulo).toBe(0.7853981633974483);
    })
})

describe ('area', () =>{
    it('Should return area ', ()=> {
        const circulo = area(2);
        expect(circulo).toBe(12.566370614359172);
    })
})

describe ('area', () =>{
    it('Should return area ', ()=> {
        const circulo = area(1);
        expect(circulo).toBe(3.141592653589793);
    })
})

describe ('area', () =>{
    it('Should return area ', ()=> {
        const circulo = area(8);
        expect(circulo).toBe(201.06192982974676);
    })
})

describe ('area', () =>{
    it('Should return area ', ()=> {
        const circulo = area(9);
        expect(circulo).toBe(254.46900494077323);
    })
})

