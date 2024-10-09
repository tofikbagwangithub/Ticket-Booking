
import { useSelector, useDispatch } from "react-redux";
import { MdDelete} from "react-icons/md";
import { deleteBooking } from "../redux/actions";

const Table = () => {

  const data = useSelector((state)=> state.data);
  const dispatch = useDispatch();
  const handleDelete = (e) => {
  const id = parseInt(e.currentTarget.id)
    dispatch(deleteBooking(id));
  };
  //console.log(data);
  return (
    <> 
    {data.length && (
    <div className='max-w-6xl mx-auto mt-5 bg-white'>
      <div className='overflow-x-auto'>
        <table className='table'> 
          <thead className='bg-blue-400 text-black rounded-sm'> 
            <tr> 
              <th> DESTINATION FROM </th>
              <th> DESTINATION TO </th>
              <th> JOURNEY DATE </th>
              <th> GUESTS </th>
              <th> TRAVEL CLASS </th>
              <th> DELETE </th>
            </tr>
          </thead>
          <tbody>
            {data.map((data, i) => (
            <tr key ={i}>
              <td className="text-gray-950">{data.from}</td>
              <td className="text-gray-950">{data.to}</td>
              <td className="text-gray-950">{data.date}</td>
              <td className="text-gray-950">{data.guests}</td>
              <td className="text-gray-950">{data.ticketclassName}</td>
              <td><button className='btn-xs bg-red-500 text-white' id={`${data.id}`} onClick={(e) => handleDelete(e)}> <MdDelete/> </button></td>
            </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  )}
  </>
  );
};

export default Table