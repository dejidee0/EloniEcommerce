// store.ts
import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { db } from '../firebaseConfig/firebaseConfig'; // Firebase config file
import { collection, doc, getDoc, increment, updateDoc } from 'firebase/firestore';

// Types
interface Voucher {
  code: string;
  isRedeemed: boolean;
  expiration: Date;
}

interface PurchaseState {
  purchaseCount: number;
  vouchers: Voucher[];
  error: string | null;
}

const initialState: PurchaseState = {
  purchaseCount: 0,
  vouchers: [],
  error: null,
};



// Fetch the current purchase count
export const fetchPurchaseCount = createAsyncThunk(
    'purchases/fetchPurchaseCount',
    async (sellerId: string, { rejectWithValue }) => {
      try {
        const userRef = doc(db, 'users', sellerId);
        const userSnap = await getDoc(userRef);
        if (userSnap.exists()) {
          const purchaseCount = userSnap.data().purchaseCount || 0;
          return purchaseCount;
        }
        return 0;
      } catch (error) {
        return rejectWithValue('Failed to fetch purchase count');
      }
    }
  );
  
  // Increment purchase count and check for voucher eligibility
  export const incrementPurchaseCount = createAsyncThunk(
    'purchases/incrementPurchaseCount',
    async (sellerId: string, { dispatch, rejectWithValue }) => {
      try {
        const userRef = doc(db, 'users', sellerId);
        await updateDoc(userRef, {
          purchaseCount: increment(1),
        });
  
        // Fetch updated count and check if eligible for a voucher
        const updatedDoc = await getDoc(userRef);
        const updatedCount = updatedDoc.data()?.purchaseCount;
  
        if (updatedCount >= 10) {
          // Generate and add a voucher if eligible
          const newVoucher: Voucher = {
            code: `VOUCHER-${Math.random().toString(36).substr(2, 9).toUpperCase()}`,
            isRedeemed: false,
            expiration: new Date(new Date().setMonth(new Date().getMonth() + 1)), // 1 month expiry
          };
          await updateDoc(userRef, {
            vouchers: [...(updatedDoc.data()?.vouchers || []), newVoucher],
            purchaseCount: 0, // Reset count after voucher issuance
          });
        }
        dispatch(fetchPurchaseCount(sellerId));
      } catch (error) {
        return rejectWithValue('Failed to increment purchase count');
      }
    }
  );
  
  // Redeem a voucher
  export const redeemVoucher = createAsyncThunk(
    'purchases/redeemVoucher',
    async ({ sellerId, voucherCode }: { sellerId: string; voucherCode: string }, { rejectWithValue }) => {
      try {
        const userRef = doc(db, 'users', sellerId);
        const userSnap = await getDoc(userRef);
  
        if (userSnap.exists()) {
          const vouchers: Voucher[] = userSnap.data().vouchers || [];
          const voucherIndex = vouchers.findIndex((v) => v.code === voucherCode && !v.isRedeemed);
          
          if (voucherIndex >= 0) {
            vouchers[voucherIndex].isRedeemed = true;
            await updateDoc(userRef, { vouchers });
          }
        }
      } catch (error) {
        return rejectWithValue('Failed to redeem voucher');
      }
    }
  );
  

  const purchasesSlice = createSlice({
    name: 'purchases',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchPurchaseCount.fulfilled, (state, action: PayloadAction<number>) => {
          state.purchaseCount = action.payload;
        })
        .addCase(incrementPurchaseCount.rejected, (state, action) => {
          state.error = action.payload as string;
        })
        .addCase(redeemVoucher.fulfilled, (state, action) => {
          const voucher = state.vouchers.find((v) => v.code === action.meta.arg.voucherCode);
          if (voucher) voucher.isRedeemed = true;
        })
        .addCase(redeemVoucher.rejected, (state, action) => {
          state.error = action.payload as string;
        });
    },
  });
  
  export default purchasesSlice.reducer;
  