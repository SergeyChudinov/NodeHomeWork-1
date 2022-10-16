import colors from 'colors';

const searchForPrimeNumbers = () => {
    const args = process.argv.slice(2);

    if (args.length != 2) {
        console.log(colors.red('Вы должны указаьб диапазон чисел от и до!'));
        return;
    }
    let [min, max] = args;

    if (isNaN(+min) || isNaN(+max)) {
        console.log(colors.red('Аргумент, переданный при запуске, не считается числом!'));
        return;
    }

    if (min < 2) {
        min = 2
    };

    let numbers = [];
    for (let i = +min; i <= max; i++) {
        numbers.push(i)
    }

    let primeArray = [];
    numbers.map(arg => {
        let i = 2;
        while (arg % i != 0) {
            i++;
        }

        if (i === arg) {
            primeArray.push(arg)
        }
    });

    let i = 0;
    primeArray.map(arg => {
        if (i > 2) {
            i = 0;
        }
        if (i == 0) {
            console.log(colors.green(arg));
        } else if (i == 1) {
            console.log(colors.yellow(arg));
        } else if (i == 2) {
            console.log(colors.red(arg));
        };
        i++
    })
    if (primeArray.length == 0) {
        console.log(colors.red('Простых чисел в диапазоне нет!'));
    }
};

searchForPrimeNumbers();