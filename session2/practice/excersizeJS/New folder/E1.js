let input1 = "Lorem ipsum dolor sit amet, ipsum adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ipsum felis, ipsum nec, pellentesque eu, ipsum quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, ipsum ipsum, vulputate eget, arcu. In enim justo, rhoncus ut";
let input2 = "ipsum"

function find(input, word) {

    let lengthSen = input.length;
    let lengthWord = word.length;
    let i = 0;
    let offset = 0;
    let place;
    let count = 0;
    while (i < lengthSen) {
        place = input.indexOf(word, offset);
        offset = place + lengthWord;
        i = offset + 50;
        count++;
    }
    return count;
}
console.log(find(input1, input2));