
import Navbar from "./components/Navbar";
import ItemContainer from './components/Item/ItemContainer'
import Modal from "./components/Item/Modal";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { calculateTotal } from "./features/cartSlice";

function App() {
  const { isOpen } = useSelector((state) => state.modal);
  const {cartItems} = useSelector((state)=> state.cart)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(calculateTotal())
  }, [cartItems])
  return <main>
    {isOpen && <Modal />}
    <Navbar />
    <ItemContainer />
  </main>;
}
export default App;
