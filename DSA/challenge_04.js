/* Challenge:
**********

A stream of dinosaurs of various ages show up for an event. Some of them have a unique age, while others have ages with frequencies greater than 1, i.e. there are others with the same age. Find the age of the earliest or first dinosaur who shows up and has a unique age. If there weren't any dinosaurs with a unique age, return the string "No unique age was found.". Let's use a queue to remember the order of the dinosaurs in the stream of event attendees.


Examples:
**********

Example 1:
```
ages = 12, 14, 12, 12, 16, 15, 16, 17, 16, 12
result = 14
```

Example 2:
```
ages = 14, 16, 16, 14, 17, 18, 19
result = 17
```

Example 3:
```
ages = 14, 16, 14, 14, 16, 14, 14
result = "No unique age was found."
```


Task:
*****

Implement the function `findFirstUniqueDinosaurAge()` that takes an array representing the stream of dinosaurs, and returns the first unique age or the string "No unique age was found.".
1. Write the algorithm.
2. Implement it.
3. Run the tests to make sure it works as expected.
4. Analyze its time and space complexity.


Constraints:
************

1. ages.length > 0

 */

import { Queue } from "./07_queque.js";

export function findFirstUniqueDinosaurAge(ages) {

    const queue = new Queue();
    const ageFrequency = new Map();

    for (const age of ages) {

        queue.enqueue(age);

        if (!ageFrequency.has(age)) {

            ageFrequency.set(age, 1)

        } else {

            ageFrequency.set(age, ageFrequency.get(age) + 1);

        }
    }

    while (!queue.isEmpty()) {
        let age = queue.dequeue();

        if (ageFrequency.get(age) === 1) {

            return age;
        }
    }

    return "No unique age was found."
}
