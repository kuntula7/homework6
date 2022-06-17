import MyArr, {array3} from "./helper.js";
let newArr = new MyArr('ana','nino','gela','bacho')
console.log(newArr.arrPush('bla'))



function getLies(){
    setTimeout(() => {
        let output = '';
        array3.forEach(element => {
            output += `<li>this is ${element}</li>`
        });
        document.body.innerHTML = output
    }, 2000);
}
getLies()