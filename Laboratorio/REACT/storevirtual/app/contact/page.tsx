'use client'
import { useThemeContext } from "../context/theme";

const contactPage = () =>{

    const {color,setColor} = useThemeContext(); 
    return(
        <div className="p-8">
            <h1 className="text-4xl py-4">Conatct Page</h1>
            <button onClick={()=>{
                setColor('bg-red-700')
            }}>Cambiar Color</button>
        </div>
    );
}
export default contactPage;