let calculationNumbers = document.getElementById('calculation_numbers')
let result = document.getElementById('result_of_calc')


let clsAll = document.getElementById('clear_all')
let clsLastElement = document.getElementById('del_one_num')

let num0 = document.getElementById('num0')
let num1 = document.getElementById('num1')
let num2 = document.getElementById('num2')
let num3 = document.getElementById('num3')
let num4 = document.getElementById('num4')
let num5 = document.getElementById('num5')
let num6 = document.getElementById('num6')
let num7 = document.getElementById('num7')
let num8 = document.getElementById('num8')
let num9 = document.getElementById('num9')


let plus =  document.getElementById('plus')
let multipy =  document.getElementById('multipy')
let del =  document.getElementById('del')
let minus =  document.getElementById('minus')

let dote = document.getElementById('dote')
let res_b = document.getElementById('res')
let sqrt = document.getElementById('sqrt')


let calc_nums = ''
let operation = ''
let calc_num_u = ''


let appendNumberOrDote = function (numOrDote,calc = calc_nums){
    result.innerHTML = `${calc}` + `${numOrDote}`
    return `${numOrDote}`
}

let appendOperator = function (operator) {
    calc_num_u = `${calc_nums}`
    calculationNumbers.innerHTML = `${operator}` + `${calc_nums}`
    return operator
}

let calculation = function (operator,num1,num2) {
    let s
    if (num1.includes(',')){
        num1 = num1.replace(',' ,'.')
    }
    if (num2.includes(',')){
        num2 = num2.replace(',' ,'.')
    }
    if (operator === '+') {
        s = String(Number(num1) + Number(num2))
        return s.replace('.',',')
    }
    else if (operator === '-'){
        s = String(Number(num1) - Number(num2))
        return s.replace('.',',')
    }
    else if (operator === '*'){
        s = String(Number(num1) * Number(num2))
        return s.replace('.',',')
    }
    else if (operator === '/'){
        s = String(Number(num1) / Number(num2))
        return s.replace('.',',')
    }
}

clsAll.onclick = function () {
    calculationNumbers.innerHTML = ''
    result.innerHTML = '0'
    calc_nums = ''
    operation = ''
}

clsLastElement.onclick = function () {
    result.innerHTML = '0'
    calc_nums = ''
    
}

num0.onclick = function () {
    calc_nums += appendNumberOrDote('0')
}

num1.onclick = function () {
    calc_nums += appendNumberOrDote('1')
}

num2.onclick = function () {
    calc_nums += appendNumberOrDote('2')
}

num3.onclick = function () {
    calc_nums += appendNumberOrDote('3')
}

num4.onclick = function () {
    calc_nums += appendNumberOrDote('4')
}

num5.onclick = function () {
    calc_nums += appendNumberOrDote('5')
}
num6.onclick = function () {
    calc_nums += appendNumberOrDote('6')
}

num7.onclick = function () {
    calc_nums += appendNumberOrDote('7')
}

num8.onclick = function () {
    calc_nums += appendNumberOrDote('8')
}

num9.onclick = function () {
    calc_nums += appendNumberOrDote('9')
}

plus.onclick = function () {
    operation = appendOperator('+')
    calc_nums = ''
}

minus.onclick = function () {
    operation = appendOperator('-')
    calc_nums = ''
}

multipy.onclick = function () {
    operation = appendOperator('*')
    calc_nums = ''
}

del.onclick = function () {
    operation = appendOperator('/')
    calc_nums = ''
}

res_b.onclick = function () {
    calculationNumbers.innerHTML = `${calc_num_u}` + `${operation}` + `${calc_nums}`
    let r = calculation(operation,calc_num_u,calc_nums)
    r = r.slice(0,13)
    calc_nums = r
    result.innerHTML = `${r}`
}

dote.onclick = function () {
    if (calc_nums.indexOf(',') == -1)
        result.innerHTML = `,${calc_nums}`
        calc_nums += ','
}

sqrt.onclick = function () {
    if (calc_nums.includes(',')){
        calc_nums = calc_nums.replace(',' ,'.')
    }
    calc_num_u = calc_nums
    calc_nums = String(Number(calc_nums) ** 2)
    if (calc_nums.includes('.')){
        calc_nums = calc_nums.replace('.' ,',')
    }
    if (calc_num_u.includes('.')){
        calc_num_u = calc_num_u.replace('.' ,',')
    }
    calculationNumbers.innerHTML = `${calc_num_u}`
    result.innerHTML = `${calc_nums}`
}