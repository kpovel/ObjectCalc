function Calc(operator, a, b) {
    const isNotValid = (operator === undefined) || (typeof a !== 'number') || (typeof b !== 'number')
    const operations = {
        sub: a - b,
        sum: a + b,
        mult: a * b,
        div: a / b,
    }
    if (isNotValid) {
        return 'Error'
    }
    for (let key in operations) {
        if (key === operator) {
            return operations[operator]
        }
    }
    return 'Unknown operator'
}

console.log(Calc('div', 3, 5))