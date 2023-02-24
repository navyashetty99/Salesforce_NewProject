import { LightningElement, track } from 'lwc';

export default class HelloWorld extends LightningElement 
{
    fullName="SalesForce LWC"
    title="SF"
    name="test"
    //Data Binding
    changeTitle(event)
    {
        this.title=event.target.value
    }
    //using track
    @track users={
        name:"Navya",
        age:23,
        city:"Wgl"

    }
    userAssign(event)
    {
        this.users.name=event.target.value
    }
    //using nedw copy of object
    userAge(event)
    {
        this.users={...this.users, "age":event.target.value}
       // this.users.name=event.target.value
    }
    //Getters
    persons=["John","Smith","XYZ"]
    num1=1
    num2=2
    get firstPerson()
    {
        return this.persons[0]
    }
    get multiply()
    {
        return this.num1*this.num2
    }
    isVisible=false
    visibilityHandle()
    {
        return this.isVisible
    }
}