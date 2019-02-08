import
{
    allPropertyCombinations as propertyMatrix,
    numberOfCombinations,
    divisorsCalculator,
    getCombination,
    combinationObjectReducer,
} from './propertyMatrix';
import randomInt from '../../integrationTests/utils/randomNumber';

describe('propertyMatrix', () => {
    describe('input is an object with 1 possible value', () => {
        const input = { a: [true] };

        it('should return an array length 1 and the with an item {a:true}', () => {
            const expectation = [{ a: true }];
            expect(propertyMatrix(input)).toEqual(expectation);
        });
    });

    describe('input is an object with 2 possible values', () => {
        const input = { a: [true, false] };

        it('should return an array [{a:true}, {a:false}]', () => {
            const expectation = [{ a: true }, { a: false }];
            expect(propertyMatrix(input)).toEqual(expectation);
        });
    });

    describe('input is an object with 2 properties each with 2 possible values', () => {
        const input = {
            a: [true, false],
            b: [true, false],
        };

        it('should return an array length 4', () => {
            expect(propertyMatrix(input)).toHaveLength(4);
        });

        it('should return an the correct matrix of the values', () => {
            const expectation = [
                {
                    a: true,
                    b: true,
                },
                {
                    a: true,
                    b: false,
                },
                {
                    a: false,
                    b: true,
                },
                {
                    a: false,
                    b: false,
                },
            ];
            expect(propertyMatrix(input)).toEqual(expectation);
        });
    });

    describe('input is an object with 3 properties each with 2 possible values', () => {
        const input = {
            a: [true, false],
            b: [true, false],
            c: [true, false],
        };

        it('should return an array length 8', () => {
            expect(propertyMatrix(input)).toHaveLength(8);
        });

        it('should return an the correct matrix of the values', () => {
            const expectation = [
                {
                    a: true,
                    b: true,
                    c: true,
                },
                {
                    a: true,
                    b: true,
                    c: false,
                },
                {
                    a: true,
                    b: false,
                    c: true,
                },
                {
                    a: true,
                    b: false,
                    c: false,
                },
                {
                    a: false,
                    b: true,
                    c: true,
                },
                {
                    a: false,
                    b: true,
                    c: false,
                },
                {
                    a: false,
                    b: false,
                    c: true,
                },
                {
                    a: false,
                    b: false,
                    c: false,
                },
            ];
            expect(propertyMatrix(input)).toEqual(expectation);
        });
    });

    describe('input is an object with 2 properties each with 3 possible values', () => {
        const input = {
            a: [-1, 0, 1],
            b: [-1, 0, 1],
        };

        it('should return an array length 9', () => {
            expect(propertyMatrix(input)).toHaveLength(9);
        });

        it('should return an the correct matrix of the values', () => {
            const expectation = [
                {
                    a: -1,
                    b: -1,
                },
                {
                    a: -1,
                    b: 0,
                },
                {
                    a: -1,
                    b: 1,
                },
                {
                    a: 0,
                    b: -1,
                },
                {
                    a: 0,
                    b: 0,
                },
                {
                    a: 0,
                    b: 1,
                },
                {
                    a: 1,
                    b: -1,
                },
                {
                    a: 1,
                    b: 0,
                },
                {
                    a: 1,
                    b: 1,
                },
            ];
            expect(propertyMatrix(input)).toEqual(expectation);
        });
    });
});

describe('numberOfCombinations', () => {
    describe('it should return 0', () => {
        it('when the input is undefined', () => {
            expect(numberOfCombinations(undefined)).toEqual(0);
        });
        it('when the input is an empty array', () => {
            expect(numberOfCombinations([])).toEqual(0);
        });
        it('when the input is an array of empty arrays', () => {
            expect(numberOfCombinations([[],[],[]])).toEqual(0);
        });
    });
    describe('it should return NaN', () => {
        it('when the input is invalid', () => {
            expect(numberOfCombinations([1,2])).toEqual(NaN);
        });
    });
    describe('has input array of arrays ', () => {
        it('should return 1', () => {
            expect(numberOfCombinations([[1]])).toEqual(1);
        });
        it('should return 8', () => {
            expect(numberOfCombinations([
                Array(2),
                Array(2),
                Array(2),
            ])).toEqual(8);
        });
        it('should return expectation', () => {
            const items = [22323, 232133, 123];
            const [a,b,c] = items;

            const expectation = items.reduce((acc, x) => x * acc, 1);

            expect(numberOfCombinations([
                Array(a),
                Array(b),
                Array(c),
            ])).toEqual(expectation);
        });
        it('should return 20', () => {
            expect(numberOfCombinations(['1233', '13213'])).toEqual(20);
        });
    });
});

describe('divisorsCalculator', () => {
    it('should return [1]', () => {
        const allArrays = [
            Array(100),
        ];
        const expectation = [1];

        expect(divisorsCalculator(allArrays)).toEqual(expectation);
    });

    it('should return [y,1]', () => {
        const [x, y] = [100, 50];
        const allArrays = [
            Array(x),
            Array(y),
        ];
        const expectation = [y,1];

        expect(divisorsCalculator(allArrays)).toEqual(expectation);
    });

    it('should return [z, y,1]', () => {
        const [x, y, z] = [
            randomInt(1, 1000),
            randomInt(1, 1000),
            randomInt(1, 1000),
        ];
        const allArrays = [
            Array(x),
            Array(y),
            Array(z),
        ];
        const expectation = [
            y * z,
            z,
            1,
        ];

        expect(divisorsCalculator(allArrays)).toEqual(expectation);
    });

    it('should return [z, y, 1]', () => {
        const [a, b, c, d] = [
            randomInt(1, 1000),
            randomInt(1, 1000),
            randomInt(1, 1000),
            randomInt(1, 1000),
        ];
        const allArrays = [
            Array(a),
            Array(b),
            Array(c),
            Array(d),
        ];
        const expectation = [
            b * c * d,
            c * d,
            d,
            1,
        ];

        expect(divisorsCalculator(allArrays)).toEqual(expectation);
    });
});

describe('getCombination', () => {
    describe('2 x 2 matrix', () => {
        const input = [
            [true, false],
            [true, false],
        ];
        const divisors = [2, 1];

        it('should return the 1st combination', () => {
            const combination = getCombination(0, input, divisors);
            expect(combination).toEqual([true, true]);
        });

        it('should return the 4th combination', () => {
            const combination = getCombination(3, input, divisors);
            expect(combination).toEqual([false, false]);
        });
    });

    describe('3 x 3 matrix', () => {
        const input = [
            [1, 2, 3],
            [1, 2, 3],
            [1, 2, 3],
        ];
        const divisors = [9, 3, 1];

        it('should return the 1st combination', () => {
            const combination = getCombination(0, input, divisors);
            expect(combination).toEqual([1, 1, 1]);
        });

        it('should return the 3rd combination', () => {
            const combination = getCombination(2, input, divisors);
            expect(combination).toEqual([1, 1, 3]);
        });

        it('should return the 27th combination', () => {
            const combination = getCombination(26, input, divisors);
            expect(combination).toEqual([3, 3, 3]);
        });
    });
});

describe('combinationObjectReducer', () => {
    const keys = ['a', 'b'];
    const corWithKeys = combinationObjectReducer(keys);

    it('returns the {a: 1}', () => {
        const accumulator = {};
        const value = 1;
        const index = 0;
        expect(
            corWithKeys(
                accumulator,
                value,
                index
            ))
            .toEqual({ a: 1 });
    });

    it('returns the {a: 1, b: 2}', () => {
        const accumulator = { a: 2 };
        const value = 2;
        const index = 1;
        expect(
            corWithKeys(
                accumulator,
                value,
                index,
            ))
            .toEqual({
                a: 2,
                b: 2,
            });
    });
});
