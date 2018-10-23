
let arr = [1,2,3,4,5,6];

console.log(arr.map(mapper));

function mapper(value) {
    return value + 1
}

let sc = [
    { _id: "5bcea6360c898a5cbe269f9a", scTitle: "HPE Russia СЦ", scVendors: "HP, HP Enterprise", scAdress: "129626, Москва, Проспект Мира 102 стр. 12 первый п…ки: 7 (495) 106-82-72, сайт: http://hp-russia.net"},
    { _id: "5bcea6a20c898a5cbe269ffe", scTitle: "Сервисный центр CISCO Russia", scVendors: "CISCO", scAdress: "Адрес: г. Москва, ул. Энтузиастов 1-я, д. 15, стр.…ussia.ru сайт: http://www.cisco-russia.ru/service"},
    { _id: "5bceaaeb0c898a5cbe26a397", scTitle: "Мастерская Иваныча", scVendors: "APPLE, Samsung", scAdress: "Москва, ул. Москва, тел +74951234567"}
    ]

var item = sc.find(item => item._id === '5bcea6360c898a5cbe269f9a');

let scOptions=[]

sc.map((element)=>(scOptions.push({value: element._id, label: element.scTitle})))

var item = myArray.find(item => item.id === 2);

// print
console.log(item.name);
// print
console.log(scOptions);

console.log()