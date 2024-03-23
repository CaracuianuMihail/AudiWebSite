// creati o functie care primeste un obiect ca argument si arata in consola tipul la fiecare valoare din obiect. //
const object ={
    name: 'Andrew',
    age: 21,
    hobby: ['volleyball','drifting'],
    homeless: false,
    height: 186.2
}
const functions = (objects) => {
    for(let key in objects) console.log(typeof objects[key])
}
functions(object)
// creati un obiect, dupa un alt obiect care este identic primului ar in afara de asta mai are cateva proprietati iar una din din valorile existente este schimbata. //
    console.log("\n")
    const object1 ={
        ...object,
        car:'Alfa Romeo',
        city: 'Chisinau',
        hasChildren: false
    }
functions(object1)
// creati o functie care primeste un array de cifre si va intoarce acelasi array doar ca fiecarui element ii va fi adaugat 1, folositi metoda reduce // 
    console.log("\n")
    const array=[1,2,3,4,5,6,7,8,9]
    const func = (list) => {
        return list.reduce((accumulator, current) => [...accumulator, current + 1], [])
    }
    console.log(func(array))