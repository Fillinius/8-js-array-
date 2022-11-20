const peopleWaiting = [
  'Кристина',
  'Олег',
  'Кирилл',
  'Мария',
  'Светлана',
  'Артем',
  'Глеб',
]

const giveParcel = () => {
  for (let i = 0; i < 3; i++) {
    let peopleHasLeft = peopleWaiting.shift()
    alert(
      `${peopleHasLeft} получил(а) посылку. В очереди осталось ${peopleWaiting.length}`
    )
  }
  return
}
console.log(peopleWaiting.length)

const leaveQueueWithoutParcel = () => {
  // for (let i = 0; i < peopleWaiting.length; i++) {
  //   let peopleNotGet = peopleWaiting.pop()
  //   alert(`${peopleNotGet}  не получил(а) посылку и ушел из очереди`)
  while (peopleWaiting.length > 0 || peopleWaiting.pop()) {
    alert(`${peopleWaiting} получил(а) посылку. `)
  }

  return
}

console.log(peopleWaiting.length)

const total1 = giveParcel()
const total2 = leaveQueueWithoutParcel()
