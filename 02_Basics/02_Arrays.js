const marvals_heros = ["thor", "Ironman", "Spiderman"]
const dc_heros = ["superman", "flash", "batman"]

marvals_heros.push(dc_heros)
console.log(marvals_heros)
console.log(marvals_heros[3][1])

const allHeroes = marvals_heros.concat(dc_heros)
console.log(marvals_heros)

const all_new_heros = [...marvals_heros, ...dc_heros]
console.log(all_new_heros)

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("Utkarsh"))
console.log(Array.from("Utkarsh"))
console.log(Array.from({name: "Utkarsh"})) // intresting

let score1 = 100
let score2 = 200 
let score3 = 300

console.log(Array.of(score1,score2,score3))
