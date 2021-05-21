// "esta clase es muy divertida"
// divertida muy clase esta
const assert = require('assert');

function reverseSentence(sentence) {
    if (typeof sentence === 'string')
        return sentence.split(" ").reverse().join(" ");
    return false;
}

describe('cuando la funcion es correcta', () => {  

    const variable = '';

    describe('casos positivos', () => {

        it('debe de retornar la oracion al reves', () => {
            assert.strictEqual(
                reverseSentence('esta clase es muy divertida'), 'divertida muy es clase esta');
        })
    });  
    
    describe.skip('casos negativos', () => {

        it('returns false when is not string', () => {
            assert.ok(!reverseSentence(1))
        })

        it('returns something when is empty', () => {
            assert.strictEqual(
                reverseSentence(''), '');
        })

    });
})