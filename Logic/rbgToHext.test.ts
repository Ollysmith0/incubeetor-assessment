import { rbg } from "./rbgToHex";
import { componentToHex } from "./rbgToHex";

describe('component to hex should run properly', () => {
    it('should return base 16 string', () => {
        expect(componentToHex(255)).toBe('ff');
    })

    it('should return ff when value > 255', () => {
        expect(componentToHex(300)).toBe('ff');
    })

    it('should return ff when value = 0', () => {
        expect(componentToHex(0)).toBe('00');
    })
})

describe('rbg should run properly', () => {
    it('should return # at beginning', () => {
        expect(rbg(0, 0, 0)).toBe('#000000')
    })

    it('should return #ffffff', () => {
        expect(rbg(255, 255, 255)).toBe('#ffffff')
    })

    it('should return #ffffff', () => {
        expect(rbg(300, 255, 300)).toBe('#ffffff')
    })

    it('should return error', () => {
        expect(rbg(255, 255, -1)).toBe('number cant be negative!')
    })
})