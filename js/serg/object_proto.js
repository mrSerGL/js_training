const one = {
    text: 'bla-bla',
    color: 'red',
    bold: true,
    show: function () {
        console.log(this.color);
    },
};

const two = {
    __proto__: one,
    fontSize: '24px',
    color: 'yellow',

};

two.text = 'hurra';

one.show();
two.show();
// two.show.bind();

console.log(one.hasOwnProperty('bold'));
console.log(two.hasOwnProperty('bold'));


