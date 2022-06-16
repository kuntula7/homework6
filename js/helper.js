/*
 * შექმენი MyArr კლასი ისე რომ არ გამოიყენოთ Array built-in მეთოდები
 * მიაქციეთ ყურადღება როგორ არის იმპლემენტირებული მასივის კონსტრუქტორი , 
 * დაგჭირდებათ ობიექტის გამოყენება . 
 * მაგალითისთვის 
 * let arr = new MyArr('elem1','elem2','elem3') 
 * განსხვავებით Array კონსტრუქტორისგან თქვენ კლასის კონსტრუქტორს გადაეცით ის ელემენტები რაც გინდათ რომ საწყისად იყოს მასივში
 * arr.length - დააბრუნებს ელემენტების რაოდენობას ანუ მასივის ზომას
 * arr.pop() - უნდა დააბრუნოს ბოლო ელემენტი მასივიდან და თან წაშალოს, თუ კი ცარიელია მასივი მაშინ undefined
 * arr.push(elem) - გადაცემული ელემენტი უნდა დაამატოს და შესაბამისად ზომაც უნდა გაიზარდოს 
 */
export default class MyArr{
    constructor(...args){
        this.args = args;
        return this.length = args.length
    }
    arrLength(...items){
        return this.args.push(...items)
    }
    arrPop(index,amount){
        if(this.args.length == 0 ){
            return 'undefined'
        }else{
            let splice2 = this.args.splice(index,amount)
            return splice2
        }
    }
    arrPush(elem){
            this.args.push(elem);
            return this.args
    }
}
// let arr = new MyArr('elem1','elem2','elem3')
// console.log(arr)
// console.log(arr.arrLength())
// console.log(arr.arrPop(arr.args.length - 1,1))
// console.log(arr.arrrPush('glu'))
 /* part 2 : 


 * შექმნილი კლასი დააიმპორტეთ მთავარ ჯს ფაილში , გამოიყენეთ ESmodules ანუ import/export მექანიზმი . 
 * ამ ფაილში ქმნით მასივს და html დოკუმენტში გამოგაქვთ ეს ელემენტები ul/li , ლისტის სახით . 
 * 
 */
export let array3 = [2,3,4,5,7,1,2,3]
/*
 * part 3 : 
 * გამოიყენეთ webpack რომ არ მოუხდეს ბრაუზერს ორივე ფაილის ცალცალკე ჩამოტვირთვა. 
 *  
 *
 */
