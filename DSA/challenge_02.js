function dinoTripletLottery(communications, lotteryNumber) {

    let winners = [];

    for (let i = 0; i < communications.length - 1; i++) {
        let tagName = new Map();
        for (let j = i + 1; j < communications.length; j++) {
            let difference = lotteryNumber - (communications[i].tag + communications[j].tag)
            if (tagName.has(difference)) {
                winners.push([tagName.get(difference), communications[i].name, communications[j].name].toSorted())
            }
            tagName.set(communications[j].tag, communications[j].name);
        }
    }

    if (winners.length > 0) {
        return winners;
    }
    return 'No Winners';
}

const communications = [
    { tag: 12, name: "Arlo" },
    { tag: 18, name: "Bella" },
    { tag: 22, name: "Cross" },
    { tag: 30, name: "Dina" },
    { tag: 38, name: "Ezra" },
    { tag: 40, name: "Fang" }
];

const lotteryNumber = 72;

console.log(dinoTripletLottery(communications, lotteryNumber));