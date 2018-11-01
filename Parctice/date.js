var createdDate = new Date()
var currentDate = new Date()
var finishDate = new Date()


createdDate.setDate(1)
createdDate.setMonth(10)
createdDate.setFullYear(2018)
console.log('Дата создания заявки:', createdDate.getDate(),createdDate.getMonth()+1,createdDate.getFullYear())


finishDate.setDate(createdDate.getDate())
finishDate.setMonth(createdDate.getMonth())
finishDate.setFullYear(createdDate.getFullYear())

finishDate.setDate(createdDate.getDate()+30)

console.log('Дата окончания сервисных работ:', finishDate.getDate(),finishDate.getMonth()+1,finishDate.getFullYear())

var days = new Date(finishDate - currentDate)
console.log('days', days.getDate())
var a = days.getDate()
console.log(a)