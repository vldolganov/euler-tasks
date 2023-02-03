

function test() {
    [[0, 1], [2, 3]].reduce(
        (acc, cur) => {
       console.log(acc.concat(cur));
        },
        [1, 2]
    );
}

test()