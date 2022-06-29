// import { useState,useEffect } from "react"
// export function useSessionStorage(key, initialValue) {
//     const [value, setValue] = useState(() => {
//       const jsonValue = sessionStorage.getItem(key)
//       if (jsonValue != null) return JSON.parse(jsonValue)
//       return initialValue
//     })
  
//     useEffect(() => {
//       sessionStorage.setItem(key, JSON.stringify(value))
//     }, [key, value])
  
//     return [value, setValue]
//   }
//const key = "7c4f88478c984f8bab8d38837a634a06"
//const key = "c10f37f433c44188b5e9287283f81aff"
const key = "9c0a9a261144444695bf68a87e5cb7e2"
export async function fetchByCusine(setter,cuisine){
    // const [cache,setCache] = useSessionStorage(cuisine)
    let cache = localStorage.getItem(cuisine)
    if(cache){
      setter(cache);
    }else{
      try{
        let res =await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${key}&cuisine=${cuisine}&number=98`)
        let data = await res.json()
        console.log(data.results);
        localStorage.setItem(cuisine,JSON.stringify(data.results))
        // console.log(localStorage.getItem(cuisine));
        // console.log(JSON.parse(localStorage.getItem(cuisine)));
        setter(JSON.parse(localStorage.getItem(cuisine)));
        //setCache(data.results)
        console.log(data);
      }catch(err){
        console.log(err);
      }
      
    }
}

export async function fetchType(){
  let cache1 = localStorage.getItem("veg")
  let cache2 = localStorage.getItem("nonveg")
  if(cache1){
    console.log("gotted");
  }else{
    try{
      let res1 =await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${key}&number=90&tags=vegetarian`)
      let data1 = await res1.json()
      localStorage.setItem("veg",JSON.stringify(data1))
    }catch(err){
      console.log(err);
    }
  }
  if(cache2){
    console.log("gotted2");
  }else{
    try{
      let res2 =await fetch("https://api.spoonacular.com/recipes/random?apiKey=9c0a9a261144444695bf68a87e5cb7e2&number=90&tags=nonvegetarian")
      let data2 = await res2.json()
      localStorage.setItem("nonveg",JSON.stringify(data2))
    }catch(err){
      console.log(err);
    }
  }
}


