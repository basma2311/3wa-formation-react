
import { useState, useEffect } from "react";

const Calculator = () => {
    const [billAmount, setBillAmount] = useState(0);
    const [tipPercent, setTipPercent] = useState(5);
    const [total,setTotal]=useState (0);

    const calculateTip = () => {
        const bill = parseFloat(billAmount);
        const tip = (bill * tipPercent) / 100;
        const totalAmount = bill + tip;
    
        setTotal(totalAmount.toFixed(2));
      };

    // const handelInput=(e)=>{
    //     setBill(e.target.value)
    // }
  return(
    <div>
    <input 
     value={billAmount}
     onChange={(e) => setBillAmount(e.target.value)}
     type='text'
     placeholder='$'
     className='border-2 rounded-lg bg-gray'/>
    </div>
  )

}