// console.log("Peter")
// const obj={"name":1}
// for ( let i =0; i< 5; i++){
//     obj[i] = i
// }
// console.log(obj)

// for ( let i=0; i<8; i+=2){
//     if( obj[i]){
//         obj[i]++
//     }
// }
// console.log(obj)
// const array = [1,1,1,1,1,1,1,3,4,6,6,6,6,6,4,4,2,9]

// const obj = {}
// for ( let i = 0; i < array.length; i++){
//     if ( obj[array[i]]){
//         obj[array[i]]++
//     } else{
//         obj[array[i]] = 1
//     }
// }
// console.log(obj["1"])

// Array.prototype.forEach = function(cb){
//     console.log(this)
// }

// Array.prototype.forEach = function (cb) {
//   for (let i = 0; i < this.length; i++) {
//     cb(this[i], i, this);
//   }
// };

// array.forEach( (item, index, array)=>{
//     console.log(item, index, array)
// } )

// const array = [1,2,3,4,5,-3]

// // implementing my own map function
// Array.prototype.map = function (callback) {
//     const resultArray = []
//     for( let i = 0; i < this.length; i++){
//         resultArray.push(callback(this[i], i, this))
//     }
//     return resultArray
// }
// //  code to check if my map function works
//  const resultMap = array.map(  (item, index, array) => {
//     return item *2
// } )
// console.log("Map method result",resultMap)

// // IMPLEMENTING MY OWN FILTER ARRAY
// Array.prototype.filter = function (callback) {
//     const returnArray = []
//     for ( let i = 0; i < this.length; i++){
//         let bool = callback( this[i], i, this)
//         if ( bool) {
//             returnArray.push(this[i])
//         }
//     }
//     return returnArray
// }
// //CODE TO CHECK MY OWN FILTER ARRAY
//  const resultFilter = array.filter( (item, index, arr) =>{
//     return item>=1
// })
// console.log("Filter method result",resultFilter)

// //CRESTING MY OWN REDUCE METHOD
// Array.prototype.reduce = function (callback, acc) {
//     if ( this.length < 1) {
//         throw new Error("Array is Empty")
//     }
//     if ( !acc) {
//         if ( typeof this[0] === 'string' ) {
//             acc =""
//         } else if ( typeof this[0] === "number") {
//             acc = 0
//         }
//     }
//     for ( let i = 0; i < this.length; i++){
//        acc = callback( acc,this[i], i, this)
//     }
//     return acc
// }
// //CODE TO CHECK MY OWN FILTER ARRAY
//  const resultReduce = array.reduce( (item, index, arr) =>{
//     return item+index
// })
// console.log("Reduce method result",resultReduce)

// //CRESTING MY OWN SOME METHOD
// Array.prototype.some = function (callback) {
//     for ( let i = 0; i < this.length; i++ ) {
//         if( callback( this[i], i, this ) ) {
//             return true
//         }
//     }
//     return false
// }
// //CODE TO CHECK MY OWN SOME ARRAY
//  const resultSome = array.some( (item, index, arr) =>{
//     return item === 2
// })
// console.log("Some method result",resultSome)

// //CREATING MY OWN EVERY METHOD
// Array.prototype.every = function (callback) {
//     for ( let i = 0; i < this.length; i++ ) {
//         if( !callback( this[i], i, this ) ) {
//             return false
//         }
//     }
//     return true
// }
// //CODE TO CHECK MY EVERY SOME ARRAY
//  const resultEvery = array.every( (item, index, arr) =>{
//     return item <= 5
// })
// console.log("Every method result", resultEvery)

// const changeColor = () =>{

//     // let btn = document.querySelector(".btn")
//     // btn.backgroundColor("blue")
//     console.log("Peter")
// }

// const data = () =>{ fetch("https://api.giphy.com/v1/gifs/search?api_key=RYPX1Dh9ls2o2pcSRqhauIFV2uUGzGok&q=${props.q}&limit=1&offset=${props.offset}&rating=g&lang=en")
// .then((res)=>{
//     console.log(res)
// })}

// data()

// //CALL BACK FUNCTIONS

// const posts = [
//     {title:"Post 1", body:"the post one"},
//     {title:"Post 2", body:"the post two"},
// ]

// const getPosts= () => {
//     setTimeout(()=>{
//         let output = ""
//         posts.forEach((post, index)=>{
//             output += `<li> ${post.title}</li>`
//         })
//         document.body.innerHTML = output
//     }, 1000)
// }

// const createPost = (post, cb) =>{
//     setTimeout( ()=>{
//         posts.push(post)
//         cb()
//         console.log( "after post created", posts)
//     }, 4000)
// }

// createPost({title: "post 3", body:"the third post"}, getPosts)
// console.log(posts)

//PROMESS

const posts = [
  { title: "Post 1", body: "the post one" },
  { title: "Post 2", body: "the post two" },
];

const getPosts = (data) => {
  setTimeout(() => {
    let output = "";
    posts.forEach((post, index) => {
      output += `<li> ${post.title}</li>`;
    });
    console.log(data)
    data.map((el)=>{
        
        output += `<h1> ${el.title}</h1>`
    })
    document.body.innerHTML = output;
  }, 1000);
};

const createPost = (post) => {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          posts.push(post)
          const err = false
          if(!err){
              resolve(" works!")
          } else{
              reject(" Unsuccessful ")
          }
      }, 2000)
      
  }
  )
};


// createPost({ title: "post 3", body: "the third post" })
//   .then(console.log)
//   .catch( console.log)
//   .then(getPosts)
// console.log(posts);


// const promise1 = Promise.resolve("hello world")
// const promise2 = 10
// const promise3 = new Promise( (rev, rejec) =>{
//     setTimeout(rev, 2000, "Goodbye")
// })
// const promise4 = createPost()
// const promise5 = fetch("https://api.giphy.com/v1/gifs/search?api_key=RYPX1Dh9ls2o2pcSRqhauIFV2uUGzGok&q=${props.q}&limit=1&offset=${props.offset}&rating=g&lang=en").then((res)=>{
//    return res.json()
// })

// Promise.all([promise1, promise2, promise3, promise4, promise5]).then(console.log)
// getPosts()


// ASYNC / AWAIT

// const init = async () =>{
//     await createPost({ title: "post 3", body: "the third post" })
//     getPosts()
// }
// init()
const init = async () =>{
    const res = await fetch("https://api.giphy.com/v1/gifs/search?api_key=RYPX1Dh9ls2o2pcSRqhauIFV2uUGzGok&q=${props.q}&limit=3&offset=${props.offset}&rating=g&lang=en")
    const response = await res.json()
    const data = response.data
    console.log(data)
    getPosts(data)
}
init()