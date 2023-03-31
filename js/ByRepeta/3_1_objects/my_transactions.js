//=====  Example 4 - Комплексні завдання

//? Напиши скрипт управління особистим кабінетом інтернет банку. Є об'єкт `account` в якому необхідно реалізувати методи для роботи з балансом та історією  транзакцій.

//-   Типів транзакцій всього два.
//-   Можна покласти чи зняти гроші з рахунку.
//-   Кожна транзакція це об'єкт із властивостями: id, type та amount транзакція це {id: '', type: '', amount: ''}

//*   createTransaction(amount, type)  створює та повертає об'єкт транзакції.
//-   Приймає суму та тип транзакції.

//*   deposit(amount) відповідає за додавання суми до балансу.
//-   Приймає суму транзакції.
//-   Викликає createTransaction для створення об'єкта транзакції
//-   після чого додає його до історії транзакцій

//*   withdraw(amount) відповідає за зняття суми з балансу.
//  - Приймає суму транзакції.
//  - Викликає createTransaction для створення об'єкта транзакції
//  - після чого додає його до історії транзакцій.
//  -
//  - Якщо amount більше ніж поточний баланс, виводь повідомлення
//  - про те, що зняття такої суми не можливе, недостатньо коштів.

//*   getBalance() повертає поточний баланс

//*   getTransactionDetails(id) шукає та повертає об'єкт транзакції по id

//*   getTransactionTotal(type) повертає кількість коштів певного типу транзакції з усієї історії транзакцій

const DEFAULT_NAME = 'name';
const DEFAULT_AMOUNT = 100;
const TIMEOUT = 3000;

const TRANSACTION = {
    DEPOSIT: 'deposit', //покласти
    WITHDRAW: 'withdraw', //зняти
};

const account = {
    balance: 0, // Поточний баланс рахунку
    transactions: [], // Історія транзакцій

    createTransaction(amount, type) {
        return {
            type,
            amount,
            id: this.transactions.length,
        };
    },

    deposit(amount) {
        this.balance += amount;
        const { DEPOSIT: deposit } = TRANSACTION;
        const transaction = this.createTransaction(amount, deposit);
        account.transactions.push(transaction);
    },

    withdraw(amount) {
        if (account.balance >= amount) {
            this.balance -= amount;
            const { WITHDRAW: withdraw } = TRANSACTION;
            const transaction = this.createTransaction(amount, withdraw);
            account.transactions.push(transaction);
        } else {
            console.log('Недостаточно средст на счету!');
            return;
        }
    },

    getBalance() {
        return this.balance;
    },

    getTransactions() {
        return this.transactions;
    },

    getTransactionDetails(id) {
        for (const transaction of account.transactions) {
            if (id === transaction.id) {
                return transaction;
            }
        }

        console.error(`Транзакція з ID:${id} не знайдена`);
        return null;
    },

    getTransactionTotal(type) {
        let TransactionTotal = 0;

        for (const transaction of this.transactions) {
            // const { DEPOSIT: deposit } = TRANSACTION;
            // const { WITHDRAW: withdraw } = TRANSACTION;

            if (type === transaction.type) {
                TransactionTotal += transaction.amount;
            }
        }
        return TransactionTotal;
    },
};

console.log('====== ТРАНЗАКцИИ =============');

account.deposit(120);
account.withdraw(180);
account.deposit(400);
account.withdraw(100);
account.withdraw(30);
account.deposit(300);
account.deposit(200);
account.deposit(230);
account.withdraw(56);

console.table(account.transactions);
console.log('Balance:', account.balance);

// console.log('TransactionDetails:', account.getTransactionDetails(5));

console.log('TotalDeposit:', account.getTransactionTotal(TRANSACTION.DEPOSIT));
console.log('TotalWithdraw:', account.getTransactionTotal(TRANSACTION.WITHDRAW));


