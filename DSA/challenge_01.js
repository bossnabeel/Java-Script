/*
Challenge:
**********

The Dinosaur social network management team wants to hold a daily lottery for all participants in the social network. The way it works is that each communication initiated on the network is tagged with a unique number, and at the end of the day pairs of winners are selected. The pairs of winners are selected by first generating a random lottery number, then finding all the pairs of names of those who initiated the communications with the tags that add up to the lottery number. 

There are billions of communications taking place every day, so the team needs a super fast algorithm that can find the pairs of winners quickly.

Take a look at the algorithm currently proposed. It's very slow. It runs in O(n^2) time. 

Your job is to improve the time complexity to something better than O(n^2).


Tasks:
*******

1. Write a faster algorithm.
2. Implement it.
3. Analyze its time complexity.


Example:
********

communications = [
  { tag: 10, name: "Tim the T-Rex" },
  { tag: 26, name: "Vince the Veloci" },
  { tag: 40, name: "Sue the Bellu" },
  { tag: 47, name: "Dean the Edmon" },
  { tag: 15, name: "Sam the Seismo" },
  { tag: 24, name: "Karen the Cryol" }
]
lotteryNumber = 50
winners = [
  ["Sue the Bellu", "Tim the T-Rex"],
  ["Karen the Cryol", "Vince the Veloci"]
]


Constraints:
************

- communications.length >= 0


Notes:
******

1. Each pair of names must be two different names. You cannot pair a name with itself.
2. The names in each pair must be sorted in alphabetical order.
3. Feel free to go back to the maps lesson to brush up if needed. 
4. Check out `hints.md` if needed.
*/

function tagSumLottery(communications, lotteryNumber) {

    let winners = [];
    let tagName = new Map();

    for (let i = 0; i < communications.length; i++) {
        const different = lotteryNumber - communications[i].tag;
        if (tagName.has(different)) {
            winners.push([tagName.get(different), communications[i].name].toSorted());
        }
        tagName.set(communications[i].tag, communications[i].name)

    }
    if (winners.length > 0) {
        return winners;
    }

    return 'No Winners';
}



const communications = [
    { tag: 10, name: "Tim the T-Rex" },
    { tag: 26, name: "Vince the Veloci" },
    { tag: 40, name: "Sue the Bellu" },
    { tag: 47, name: "Dean the Edmon" },
    { tag: 15, name: "Sam the Seismo" },
    { tag: 24, name: "Karen the Cryol" }
];
const lotteryNumber = 50;

console.log(tagSumLottery(communications, lotteryNumber));