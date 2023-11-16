import React, {useState, useContext} from 'react'
import { GlobalContext } from '../components/context/GlobalState';


export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const { AddTransaction } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount : +amount
    }
    AddTransaction({newTransaction});
  }

  return (
    <>
        <h3>Add new transaction</h3>
        <form onSubmit={onSubmit}>
            <div class='form-control'>
                <label for='text'>Text</label>
                <input type='text' value={text} onChange={(e) => setText(e.target.value)} placeholder='Enter Text...'/>
            </div>
            <div>
              <label htmlFor='amount'
              
                > Amount <br />
                (negative - expense, positive - income)
              </label>
              <input type='number' value={amount} onChange={(e) => setAmount(e.target.value)} placeholder='enter the amount...' />
              <button class='btn'>Add transaction</button>
            </div>
        </form>
    </>
  )
}


export default AddTransaction