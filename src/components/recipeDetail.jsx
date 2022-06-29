import { useState } from "react";



function DetailsRec({img,summary,Procedure,healthscore}) {
    const [ing,setIng] = useState([]);
    const [disp,setDisp] = useState("none");
    const [dispPro,setDispPro] = useState("none");
    function refine(array){
        let rearr =[];
        for (let i of array ){
            if(rearr.includes(i)===true){
                console.log('copy');
            }else{
                rearr.push(i);
            }
        }
        return rearr
    }
    return ( 
        <section className="detail">
        <div className="details-right">
            <img src={img} alt="" />
            <h1>Dish Summary:</h1>
            <p 
                className="summary" 
                dangerouslySetInnerHTML={{__html:summary}}
            />
        </div>
        <div className="details-left">
            <div className="details-btns">
                <button
                    onClick={(e)=>{
                        setDispPro('block')
                        setDisp('none')
                    }}
                >Procedure</button>
                <button
                     onClick={(e)=>{
                        setDispPro('none')
                        setDisp('block')
                    }}
                > Ingredient</button>
            </div>
            <ol className="procedure" style={{"display":`${dispPro}`}} >
                { Procedure &&
                    Procedure.map(e=><li >{e.step}</li>)}
                {
                    !Procedure && <h1>Loading</h1>
                }
            </ol>
            <div className="ingredient" style={{"display":`${disp}`}}>
                { Procedure &&
                    
                    Procedure.forEach(element => {
                        element.ingredients.forEach((e)=>ing.push(e))
                    })    
                }
                {
                    !Procedure && <h1>Loading</h1>
                }
                { 
                    ing.length !=0 && refine(ing).map(e=><li className="ing-itm">{e.name}</li>)
                }
            </div>
        </div>
    </section>
     );
}

export default DetailsRec;