/** @jsxImportSource theme-ui */
import { useState } from 'react'
import { PaystackButton } from "react-paystack";
import { RootState } from "../../store/store";
import { useSelector } from "react-redux";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Payment() {
    const totalAmount = useSelector((state: RootState) => state.cart.totalAmount);
    const [ name, setName ] = useState("")
    const [ email, setEmail ] = useState("")
    const [ amount, setAmount ] = useState(totalAmount);
    const [ phoneNumber, setPhoneNumber ] = useState("");

   

    const publicKey = import.meta.env.VITE_TEST_PAYSTACK_PUBLIC_KEY;

    console.log(totalAmount);
    const componentProps = {
        amount: totalAmount * 100,
        name,
        phoneNumber,
        email,
        publicKey,
        text: "Pay",
        onSuccess: () => alert("Thank you for paying"),
        onClose: () => alert("Are you sure you want to close")
      }

  return (
    <>
    <Header />
    <div sx={{
        display: 'flex',
        justifyContent: 'center', alignItems: 'center', marginTop: '5rem', marginBottom: '3rem'

    }}>
        <div sx={{
            width: '50%', display: 'grid', gap: '1rem', maxWidth: '30rem'

        }} >
            <h1 sx={{textAlign: 'center'}}>Make Payment</h1>
        <input type="text" placeholder='Name' onChange={(e) => setName(e.target.value)} sx={{padding: '0.5rem', outline: 'none', borderRadius: '5px', }} value={name} />

        <input type="text" placeholder='Email Adress' value={email} onChange={(e) => setEmail(e.target.value)} sx={{padding: '0.5rem', outline: 'none', borderRadius: '5px', }} />
        
        <input type="number" value={amount} 
        disabled

        sx={{padding: '0.5rem', outline: 'none', borderRadius: '5px', }} />

        <input type="text" placeholder='Phone Number' value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}
        sx={{padding: '0.5rem', outline: 'none', borderRadius: '5px', }} />
        
        <PaystackButton {...componentProps} sx={{background: 'green', color: "white", padding: '0.5rem', borderRadius: '5px', border: 'none', cursor: 'pointer'}}  />
        </div>
    </div>
    <Footer />
    </>
  )
}

export default Payment

