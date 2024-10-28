import  { useEffect } from 'react';
import { useAppDispatch } from '../../store/hook'; 
import { useSelector } from 'react-redux';
import { fetchPurchaseCount, incrementPurchaseCount, redeemVoucher } from '../../store/purchasesSlice';
import Header from "../Header/Header"




const BecomeASeller = ({ sellerId }: { sellerId: string }) => {
    const dispatch = useAppDispatch(); // Typed dispatch
    const purchaseCount = useSelector((state: any) => state.purchases.purchaseCount)
    const vouchers = useSelector((state: any) => state.purchases.vouchers);


    useEffect(() => {
        dispatch(fetchPurchaseCount(sellerId));
      }, [dispatch, sellerId]);

      const handlePurchase = () => {
        dispatch(incrementPurchaseCount(sellerId));
      };
    
      const handleRedeemVoucher = (voucherCode: string) => {
        dispatch(redeemVoucher({ sellerId, voucherCode }));
      };

  return (
    <div>
        {/* BecomeASeller */}
        <Header />
        <div>
      <h2>Purchase Count: {purchaseCount}</h2>
      <button onClick={handlePurchase}>Make a Purchase</button>
      <h3>Available Vouchers:</h3>
      <ul>
        {vouchers.map((voucher: Voucher) => (
          <li key={voucher.code}>
            {voucher.code} - {voucher.isRedeemed ? 'Redeemed' : 'Available'}
            {!voucher.isRedeemed && <button onClick={() => handleRedeemVoucher(voucher.code)}>Redeem</button>}
          </li>
        ))}
      </ul>
    </div>

        
        </div>
  )
}

export default BecomeASeller