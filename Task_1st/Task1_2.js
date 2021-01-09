//Lava

function sortDesc(arg) {

    for (var i = 0; i < arg.length - 1; i++) {

        for (var j = i + 1; j < arg.length; j++) {

            if (arg[i] < arg[j]) {
                var tmp = arg[i];
                arg[i] = arg[j];
                arg[j] = tmp;
            }

        }

    }
    return arg;
}

console.log(sortDesc([1, -5, -1, 5, 4]));