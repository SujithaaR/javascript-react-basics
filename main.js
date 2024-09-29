// logical && and ||
//logical && - return when both the stmts are true 
let a=true;
let b=true;

// when one condition fails,it returns false
let x=true;
let y=false;

// when the first condition itself fails,it wont check the other one,it return false
// let s=true;
let s=false;
function getName(name){
    return name;
}
console.log(a && b);
console.log(x && y);
console.log(s && getName("suji"))

// logical ||
// return true when either of the condition is true
console.log(s || getName("suji"))

// --------------------------------------------------------------------------------------
// Template literals
let name1="suji";
let name2="shinchan";

console.log(name1+" "+name2);
// when using template literals
console.log(`${name1} ${name2}`);
//----------------------------------------------------------------------------------------

// Ternary operator
const showRecipeOne=false;
function getRecipeOneName(recipeName){
      return recipeName;
}
function getRecipeTwoName(recipeName){
      return recipeName;
}
// normally how we will do
if(showRecipeOne){
    console.log(getRecipeOneName("ram"));
}
else{
    console.log(getRecipeTwoName("sita"));
}
// we can simply this by using Ternary Operator
// condition ? stmt 1:stmt2;
showRecipeOne?getRecipeOneName("ram"):getRecipeTwoName("sita");

// ------------------------------------------------------------------------------------------------
// Destructuring Objects and Arrays
const id=1;
const productName="Apple Watch";
const rating=5;

const product={
    id:id,
    productName:productName,
    rating:rating
};
// key and values are matching so we can use it in this way
const product2={
    id,
    productName,
    rating
};
console.log(product);
console.log(product2);

const productData={
    description:"product description",
    id,
    productName,
    rating
}
const productDataDetails=productData.description;
console.log(productDataDetails)
// destructuring object
const {description}=productData;
console.log(description);

// destructuring array
const array=[1,2,3];
let getArrayFirstValue=array[0];
let getArraySecondValue=array[1];
console.log(getArrayFirstValue,getArraySecondValue);

const[arrayFirstElement,arraySecondElement,arrayThirdElement,arrayFourthElement]=array
console.log(arrayFirstElement,arraySecondElement,arrayThirdElement,arrayFourthElement)


// ------------------------------------------------------------------------------------------------------------------------------
// default parameter
function mul(num1,num2){
    return num1*num2;
}
console.log(mul(1,2))
// what if dont pass any arguments,it will return NaN.here comes the default parameter
function mul2(number1=2,number2=3){
    return number1*number2;
}
// when i dont pass any arguments it will take the defualt values
console.log(mul2());
// if i pass any arguements it will overrides the default values
console.log(mul2(10,3));
console.log(mul2(10));
// whatever you are passing first num will be num1 and after comma second num2
// we cant define the passsing arguement is for num1 or num2,it will take first value for num1 and second arguement for num2
console.log(mul2(number2=33));
console.log(mul2(number1=33));

// ------------------------------------------------------------------------------------------------------------------------------------------------------------

// spread operator
const array2=[2,3,4];
const array3=[6,7,8];
console.log([...array2]);
console.log([...array3]);
// merge these arrays
console.log([...array2,...array3]);
// adding more values to it
console.log([545,...array2,454534,...array3]);
console.log([545,array2,454534,...array3]);

function getInfo(a,b,c,d,e){
    console.log(a,b,c,d,e);
    
    return "suji";
}
// what if you have more values like 100+ then you cant create 100 parameters

console.log(1,2,3,4,5);

function getInfo2(a,b,...c){
    console.log(a,b,...c);
    console.log(a,b,c);
    
    return "suji";
}
console.log(getInfo2(1,2,3,4,5,6,7,88));

// ----------------------------------------------------------------------------------------------------------------------
// map,filter,find,some,every,includes,indexOf,findIndex
const personArray=[
    {
        name:"person1",
        age:30,
        country:"AMERICA"
    },
    {
        name:"person2",
        age:50,
        country:"india"
    },
    {
        name:"person3",
        age:45,
        country:"japan"
    },
    {
        name:"person4",
        age:25,
        country:"japan"
    }
]
// creating new array that has only names
let 
getAllNames=personArray.map((singlePerson,index)=>{
    console.log(singlePerson,index);
    
    return `${singlePerson.name} age is ${singlePerson.age}`
})
console.log(getAllNames);

// find returns only the first matching one
let getPersonFromJapan=personArray.find((japanPeople,indes)=>{
    return japanPeople.country==="japan"
})
console.log(getPersonFromJapan);

// filter return all the matching one
let getAllPersonFromJapan=personArray.filter((japanPeople,indes)=>{
    return japanPeople.country==="japan"
})
console.log(getAllPersonFromJapan);
// some-any of it condition satisfied->return true or false
let checkSomeArrayMethodWithExample=personArray.some((singleArray,index)=>{
    return singleArray.age>80;
})
console.log((checkSomeArrayMethodWithExample));
// every-every of the condition satified->return true or false
let checkEveryArrayMethodWithExample=personArray.every((singleArray,index)=>{
    return singleArray.age>30
})
console.log(checkEveryArrayMethodWithExample);
// include-check certain element is presen in it or not
const fruitArray=["apple","banana",'grape']
console.log(fruitArray.includes("banana"));
console.log(fruitArray.indexOf("grape"))
// indexOf-returns the index if the element is present in the array otherwise return -1
console.log(fruitArray.indexOf("maddg"));

// ----------------------------------------------------------------------------------------------------------------------------------------------------
let getIndexOfPersonWhoIsFromJapan=personArray.findIndex((singleArray,index)=>{
    return singleArray.country==='japan';
})
console.log(getIndexOfPersonWhoIsFromJapan);






