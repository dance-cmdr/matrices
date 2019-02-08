const numberOfCombinations = allArrays => {
    if (!allArrays || !allArrays.length) {
        return 0;
    }
    return allArrays.reduce((acc, a) => acc * a.length, 1);
};

const divisorsCalculator = allArrays => {
    const divisors = [];
    for (let i = allArrays.length - 1; i >= 0; i--) {
        divisors[i] = divisors[i + 1] ? divisors[i + 1] * allArrays[i + 1].length : 1;
    }
    return divisors;
};

const getCombination = (n, allArrays, divisors) => {
    const combination = [];
    let curArray;

    for (let i = 0; i < allArrays.length; i++) {
        curArray = allArrays[i];
        combination.push(curArray[Math.floor(n / divisors[i]) % curArray.length]);
    }
    return combination;
};

const combinationObjectReducer = keys =>
    (acc, v, i) => {
        acc[keys[i]] = v;
        return acc;
    };

const allPropertyCombinations = props => {
    const keys = Object.keys(props);
    const allArrays = Object.values(props);
    const NoC = numberOfCombinations(allArrays);
    const divisors = divisorsCalculator(allArrays);
    const results = [];

    for (let n = 0; n < NoC; n++) {
        results.push(
            getCombination(n, allArrays, divisors)
                .reduce(combinationObjectReducer(keys), {})
        );
    }

    return results;
};

export {
    allPropertyCombinations,
    numberOfCombinations,
    divisorsCalculator,
    getCombination,
    combinationObjectReducer,
};
