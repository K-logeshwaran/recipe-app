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

const key = "your Api Key"
export async function fetchByCusine(setter,cuisine){
    
    let cache = localStorage.getItem(cuisine)
    if(cache){
      setter(cache);
    }else{
      try{
        let res =await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${key}&cuisine=${cuisine}&number=98`)
        let data = await res.json()
        console.log(data.results);
        localStorage.setItem(cuisine,JSON.stringify(data.results))
        setter(JSON.parse(localStorage.getItem(cuisine)));
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
      let res2 =await fetch("https://api.spoonacular.com/recipes/random?apiKey=your-api-key&number=90&tags=nonvegetarian")
      let data2 = await res2.json()
      localStorage.setItem("nonveg",JSON.stringify(data2))
    }catch(err){
      console.log(err);
    }
  }
}


