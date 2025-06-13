/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  let brr = arr.map((element)=>{if(element.profession=="developer")return element;
                               else return null;})
  console.log(brr);
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.foreach((element)=>{
    if(element.profession==="developer")console.log(element)}
    )
}

function addData() {
  //Write your code here, just console.log
  arr.push({id:4, name:"susan", age:"20", profession:"intern"});
}

function removeAdmin() {
  //Write your code here, just console.log
  arr = arr.filter((item)=>item.profession!=="admin");
  console.log(arr);
}

function concatenateArray() {
  //Write your code here, just console.log
}
