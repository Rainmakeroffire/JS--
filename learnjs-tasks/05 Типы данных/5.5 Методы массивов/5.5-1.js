string = 'my-long-word'

function camelize(str) {
    return str.split('-').map(function(word, index) {
        return index == 0 ? word : word[0].toUpperCase() + word.substring(1)
    }).join('');
}

console.log(camelize(string))