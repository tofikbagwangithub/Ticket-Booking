import React, {useState} from 'react'
import { FaPlusCircle } from "react-icons/fa";
import { useSelector, useDispatch } from 'react-redux';
import { makeBooking  } from '../redux/actions';
const Book = () => {
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const size = data.length; 

  const [bookingData, setBookingData] = useState({});

  const handleChange = (event) =>{
    console.log(event.target.value);
    const newBookingData = {...bookingData};
    newBookingData[event.target.name] = event.target.value;
    setBookingData(newBookingData);
  }

  const handleBook =(e) =>{
    e.preventDefault();
    //console.log(e.target.value);
    if(Object.keys(bookingData).length === 5){
      dispatch(makeBooking({...bookingData, id: size+1}));
    }else{
      alert("Please select data properly!");
    }
  }

  console.log(bookingData);


  return (
    <div className='mt-[160px] mx-4 md:mt-[160px] relative'>
      <div className='bg-white rounded-md max-w-6xl w-full mx-auto'>
        <form className='flex flex-col md:flex-row'> 
          <div className='py-1.5 px-2.5 flex-1 border-r-2 text-black'> 
            <p> Destination From </p>
            <div className='flex flex-row'>
              <select required onChange={(event)=>handleChange(event)} className='outline-none px-2 py-2 w-full text-white' name='from' id='from'> 
                <option value=''> Please Select </option>
                <option> India </option>
                <option> New York </option>
                <option> London </option>
                <option> Paris </option>
                <option> Rome </option>
                <option> Dubai </option>
              </select>
            </div>
          </div>

          <div className='py-1.5 px-2.5 flex-1 border-r-2 text-black'> 
            <p> Destination To </p>
            <div className='flex flex-row'>
              <select required onChange={(event)=>handleChange(event)} className='outline-none px-2 py-2 w-full text-white' name='to' id='to'> 
                <option value=''> Please Select </option>
                <option> Dubai </option>
                <option> Rome </option>
                <option> Paris </option>
                <option> London </option>
                <option> New York </option>
                <option> India </option>
              </select>
            </div>
          </div>

          <div className='py-1.5 px-2.5 flex-1 border-r-2 text-black'>
            <p> Journey Date</p>
            <input type='date' name='date' required onChange={(event)=>handleChange(event)} className='outline-none px-2 py-2 w-full date text-white' />
          </div>

          <div className='py-1.5 px-2.5 flex-1 border-r-2 text-black'> 
            <p> Guests </p>
            <div className='flex flex-row'>
              <select required onChange={(event)=>handleChange(event)} className='outline-none px-2 py-2 w-full text-white' name='guests' id='guests'> 
                <option value=''> Please Select </option>
                <option value='1'> 1 Person </option>
                <option value='2'> 2 Person </option>
                <option value='3'> 3 Person </option>
                <option value='4'> 4 Person </option>
              </select>
            </div>
          </div>

          <div className='py-1.5 px-2.5 flex-1 border-r-2 text-black'> 
            <p> Travel Class </p>
            <div className='flex flex-row'>
              <select required onChange={(event)=>handleChange(event)} className='outline-none px-2 py-2 w-full text-white' name='ticketclassName' id='ticketclassName'> 
                <option value=''> Please Select </option>
                <option> Business </option>
                <option> Economy </option>
              </select>
            </div> 
          </div>

          <button onClick ={(e) => handleBook(e)} type='submit' className='inline-flex items-center bg-blue-500 text-white px-8 py-1 space-x-2'><FaPlusCircle className='mr-2' /> Book Now </button>

        </form>
      </div>
    </div>
  );
};

export default Book;