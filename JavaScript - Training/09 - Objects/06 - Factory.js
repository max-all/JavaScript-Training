// A factory function that accepts 'name',
// 'age', and 'breed' parameters to return
// a customized dog object.

const dogFactory = (name, age, breed) => {
    return {
        name: name,
        age: age,
        breed: breed,
        bark(){
            console.log("Woog!");            
        },        
    };
};