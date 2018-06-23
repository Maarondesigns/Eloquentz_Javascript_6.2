class Group{
//creates empty array when new Group is called
    constructor (){
        this.group = [];
    }

//adds number to group if it doesn't exist    
    add(num){
        if (this.group.indexOf(num) === -1){
            this.group.push(num);
        }
    }

//deletes number from group if it exists
    delete(num){
        let index = this.group.indexOf(num);
        if (index !== -1){
            this.group.splice(index, 1);
        }
    }

 //checks if group has number and returns true or false
    has(num){
        if (this.group.indexOf(num) !== -1){
            return true;
        } 
        return false;
    }
//iterates over arguments and adds them to group
    static from([...args]){
        let group = new Group;
        for (let num in args){
            group.add(args[num]);
        
        }
        return group;
    }
//iterates over range from num1 to num2 and adds everything in range to group
    // static from([num1, num2]){
    //     let group = new Group;
    //     while (num1 <= num2){
    //         group.add(num1);
    //         num1++;
    //     //iterates over range from num1 to num2 and adds everything in range to group
    //     }
    //     return group;
    // }
}