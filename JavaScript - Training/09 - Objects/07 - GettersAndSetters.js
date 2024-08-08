const user = {
    _name: "",
    get name() {
        return this._name;
    },
    set name(newName) {
        if (typeof newName ==="string" && newName.length > 0){
            this._name = newName;
        }
        else {
            console.log("Invalid name");
        }
    },
};

const userInput = "Max";
user.name = userInput;
console.log(`O nome do Usuario é ${user.name}`);

const userInputInvalid = 1;
user.name = userInput;