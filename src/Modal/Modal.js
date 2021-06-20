import React from "react";
import { useFormik } from 'formik'


const Modal= ({show,closeModal,setData,data}) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    const formik = useFormik({

        initialValues: {
            parentClassname: '',
            className: '',
            studentNo: '',
            timeTable: '',
            noOfTeachers: '',
            mandatorySubjects: '',
            optionalSubject: ''
        },

        onSubmit: values => {
            alert(JSON.stringify(values, null, 2))
            console.log("running");
            setData({parent:values.parentClassname,classData:[{className:values.className,noOfStudent:values.studentNo,noOfTeacher:values.noOfTeachers,timeTable:values.timeTable,mandatorySubjects:values.mandatorySubjects,optionalSubject:values.optionalSubject}]})
           // setData([...data,{parent:values.parentClassname,classData:[{noOfStudent:values.noOfstudent,noOfTeacher:values.noOfstudent}]}]);

                   }


    })


    return (
        <form onSubmit={formik.handleSubmit}>

        <div className={showHideClassName}>
        <div className="wrapper">
            <div className="title">
               Add Class
            </div>
            <div className="form">
                <div className="inputfield">
                    <label>Parent className</label>
                    <input type="text" className="input" name={'parentClassname'}    onChange={formik.handleChange}  value={formik.values.parentClassname} required/>
                </div>
                <div className="inputfield">
                    <label>className</label>
                    <input type="text" className="input"  name={'className'} onChange={formik.handleChange}  value={formik.values.className}/>
                </div>

                <div className="inputfield">
                    <label>Number of students</label>
                    <input type="text" className="input"  name={'studentNo'} onChange={formik.handleChange}  value={formik.values.studentNo}/>
                </div>


                <div className="inputfield">
                    <label>Time table</label>
                    <div className="custom_select">
                        <select name={'timeTable'} onChange={formik.handleChange} value={formik.values.timeTable}>
                            <option value="">Select</option>
                            <option value="yes">yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                </div>
                <div className="inputfield">
                    <label>Number of teachers</label>
                    <input type="text" className="input" name={'noOfTeachers'} onChange={formik.handleChange} value={formik.values.noOfTeachers} />
                </div>

                <div className="inputfield">
                    <label>Mandatory Subjects</label>


                   <select name={'mandatorySubjects'} onChange={formik.handleChange} value={formik.values.mandatorySubjects}
                     size="4" multiple>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                   <option value="D">D</option>
                </select> 
             </div>
        </div>

    <div className="inputfield">
        <label>Optional subjects</label>
        <div className="custom_select">
            <select name={'optionalSubject'} onChange={formik.handleChange} value={formik.values.optionalSubject}>
                <option value="">Select</option>
                <option value="A">A</option>
                <option value="B">B</option>

            </select>
        </div>
    </div>


    <div className="inputfield">
        <input type="submit" value="Submit" className="btn" onClick={closeModal} />
    </div>

</div>
        </div>
        </form>



    );


}

export default Modal;