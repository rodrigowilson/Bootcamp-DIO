/* O que são vetores ou Arrays

// Como declarar um array

let array = ["string", 1 , true];
console.log (array);*/

//let array = ["string",1,true,['array1'],['array2'],['array3'],['array4']]//
//console.log(array)//
//ForEach
/*array.forEach(function(item,index){
    console.log (item,index)
});*/

//push
/*array.push('novo item')
console.log (array)*/
//pop
//array.pop ();
//console.log(array);//

//shift
//array.shift();
//console.log (array);/*


//array.unshift ('novo item');
//console.log (array);//

//console.log (array.indexOf(true))//

//array.splice (0,3);
//console.log (array);//

//let novoarray = array.slice(0,3);
//console.log(novoarray);//

let object = {string:'string', number:1, Boolean:'true',array: ['array01'], objectinterno: 
{objectinterno:'objectinterno'}}
console.log (object.Boolean);

var string = object.string;
console.log (string);

var {string,Boolean,objectinterno} = object
console.log (string,Boolean,objectinterno);