function calculate(a, b, operator) {
    switch (operator) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            return a / b;
        default:
            return "Неизвестный оператор";
    }
}
const values = {
    a: 2,
    b: 3,
    operator: "+"
};

const result = calculate.apply(null, [values.a, values.b, values.operator]);

console.log(result); // Вывод: 5
