function Calc(operation, a, b) {
    const isNotValid = (typeof a !== 'number') || (typeof b !== 'number')
    const operations = {
        sub: a - b,
        sum: a + b,
        mult: a * b,
        div: a / b,
    }
    if (isNotValid) {
        return 'Error'
    } else if (operations[operation]) {
        return operations[operation]
    }
    return 'Unknown operation'
}

console.log(Calc('div', 3, 5))