// Решение через циклы

let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

function printListReversed(list) {
    let lst = [];
    let interim = list;

    do {
        lst.push(interim.value);
        temporate = interim.next;
    } while (interim)

    for (let i = lst.length - 1; i >= 0; i--) {
        console.log((lst[i]));
    }
}

printListReversed(list);


// Решение через рекурсию

function printListReversed(list) {

    if (list.next) {
        printListReversed(list.next);
    }

    console.log((list.value));

}

printListReversed(list);