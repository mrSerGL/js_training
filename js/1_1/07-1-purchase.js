/*
* Напиши скрипт обработки покупки в магазине
*
* - Баланс пользователя хроанится в переменной balance
* - Сумма покупки хранится в переменной payment
*
* - Перед проверклй вывести сообщение:
* "Общая стоимоcть заказа [число] кредитов. Проверяем количество
* доступных средств на счету."
*
* Если сумма покупки не превышает баланс:
* - вычесть баланес из суссы покупки
* - вывести сообщение "На счету осталось [число] кредитов."  
*
* Если сумма покупки превышает баланс:  
* - вывести сообщение "На счету недостаточно средств для проведения
* операции."
*
* В конце вывести сообщение "Операция завершена."
*
*/

let balance = 100000;
const payment = 10000;

alert(`Общая стоимоcть заказа ${payment} кредитов. Проверяем количество доступных средств на счету.`)

alert(`Доступно ${balance} кредитов.`)

if (payment <= balance) {
    balance = (balance - payment);
    alert(`На счету осталось ${balance} кредитов.`)
    alert("Спасибо за покупку!.")
} else {
    alert("На счету недостаточно средств для проведения операции.")
    alert("Операция завершена.")
}





