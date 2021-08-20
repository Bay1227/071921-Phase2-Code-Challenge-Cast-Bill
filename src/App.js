import React, {useState, useEffect} from 'react';
import BillCollection from './components/BillCollection';
import BillsCast from './components/BillsCast';

export default function App() {
  //start here with your code for step one

  const [bills, setBills] = useState([])


  useEffect(() => {
    fetch('http://localhost:8002/bills')
    .then((r) => r.json())
    .then((bills)=> setBills(bills))
  }, []);

  function enlistBill(id) {
    setBills(
      bills.map((bill) => (bill.id === id ? {...bill, enlisted: true} : bill))
    );
  }

  function releaseBill(id) {
    setBills(
      bills.map((bill) => (bill.id === id ? {...bill, enlisted: false} : bill))
    );
  }

  function dischargeBill(id) {
    setBills(bills.filter((bill) => bill.id !== id));
  }

  return (
    <div>
      <BillsCast bills={bills.filter((bill) => bill.enlisted)} handleClick={releaseBill} dischargeBill={dischargeBill} />
      <BillCollection bills={bills} handleClick={enlistBill} dischargeBill={dischargeBill} />
    </div>
  );
}
