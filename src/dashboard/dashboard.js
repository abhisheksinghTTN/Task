import React, {useState} from "react";
import Modal from "../Modal/Modal";
import Card from "../Modal/Card";



const Dashboard= () => {


    const [modal, modalHandler]=useState(false);


   const showModal = () => {

       modalHandler(true)

    };

    const closeModal = () => {

        modalHandler(false)

    };


    console.log("Here",modal);

    const [data,setData]=useState([])
    console.log("Here2",data)

    const setClassData = (mappedData) => {

           setData( [...data,mappedData])



    };



    return (
        <main>
            <h1>React Modal</h1>
            <Modal show={modal} closeModal={closeModal} setData={setClassData} data={data} />
            <button type="button"  onClick={()=>showModal()}>
                Add Class
            </button>
            <div>
            {data.map((value)=>(
                <div>
                <span>{value.parent}</span>
                    {
                value.classData.map((value)=>(

                     <Card data={value}/>
                ))}
                </div>

            ))}
            </div>

        </main>




    );


}

export default Dashboard;