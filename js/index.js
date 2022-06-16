import MyArr, {array3} from "./helper.js";
let newArr = new MyArr('ana','nino','gela','bacho')
console.log(newArr.arrPush('bla'))

document.getElementById('dachera').addEventListener('click',()=>{
    const resultText = array3.join('');
    const para = document.createElement('li');
    const textNode = document.createTextNode(resultText);
    para.appendChild(textNode);
    document.querySelector("#liebi").appendChild(para)
})
