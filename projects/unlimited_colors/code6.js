const randomColor = function () {
    const hex = '01234ABCDE'
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color
}

console.log(randomColor());
