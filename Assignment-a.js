//Q1
function countWord(str)
{
    let mp=new Map;
    let word=str.split(" ");
    for(let x of word)
    {
        if(mp.has(x))
        {
            mp.set(x,mp.get(x)+1);
        }
        else
        {
            mp.set(x,1);
        }
    }
    return mp;
}
  
  const sentence = "I am xyz. I am learning web development from PW Skills.";
  console.log(countWord(sentence));

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Q2
let arr1=["apple","mango","mango","banana","pineapple","banana"]
let arr2=[5, 6, 7, 7, 8, 8];

function removeDuplicate(arr)
{
    return new Set(arr);
}
console.log(removeDuplicate(arr1)); 
console.log(removeDuplicate(arr2));

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Q3

 function swap(a,b)
 {
    [a,b]=[b,a]
    return [a,b];
 }
 let x=2;
 let y=3;
[k,l]=swap(x,y);
console.log(k,l);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Q4

function extract(arr)
{
    const [first,second,,,,last]=arr;
    return[first,second,last];
}
const arr=[1,2,3,4,5,6]
console.log(extract(arr));

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Q5

function maxmin(arr)
{
    return{
        maax: Math.max(...arr),
        miin: Math.min(...arr)
    }
}
const arr=[9,7,3,5,1,2,3];
console.log(maxmin(arr));


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Q6

function convertToNumber(str)
 {
    try
     {
      const num = Number(str);
      if (Number.isNaN(num)) 
      {
        throw new Error("Invalid number");
      }
      return num;
    } 
    catch (x) 
    {

    }
  }

    // catch (error) 
    // {
    //   return error.message;
    // }
  
  console.log(convertToNumber("123"));
  console.log(convertToNumber("abc"));