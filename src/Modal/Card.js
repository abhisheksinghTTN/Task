import React from "react";



const Card= ({data}) => {


    return (



                <div className="wrapper2">
                    {/* <div className="title">
                        Add Class
                    </div> */}
                    <div className="form">
                        <div className="inputfield">
                            <label>Class Name: </label>
                            <span>{data.className}</span>
                        </div>

                        <div className="inputfield">
                            <label>Number of Students: </label>
                            <span> {data.noOfStudent}</span>
                        </div>

                        
                        <div className="inputfield">
                            <label>Time Table: </label>
                            <span> {data.timeTable}</span>
                        </div>
                        {/*<div className="inputfield">*/}
                        {/*    <label>Time table</label>*/}
                        {/*    <div className="custom_select">*/}
                        {/*        <select>*/}
                        {/*            <option value="">Select</option>*/}
                        {/*            <option value="yes">yes</option>*/}
                        {/*            <option value="no">No</option>*/}
                        {/*        </select>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        <div className="inputfield">
                            <label>Number of Teachers: </label>
                            <span>{data.noOfTeacher}</span> </div>


                        <div className="inputfield">
                            <label>Mandatory Subjects: </label>
                            <span>{data.mandatorySubjects}</span>

                            

                            {/*    <select width=300 style="width: 450px"*/}
                            {/*     size="4" multiple>*/}
                            {/*    <option value="A">A</option>*/}
                            {/*    <option value="B">B</option>*/}
                            {/*    <option value="C">C</option>*/}
                            {/*    <option value="D">D</option>*/}
                            {/*</select>*/}
                        </div>
                        <div className="inputfield">
                            <label>Optional Subject: </label>
                            <span>{data.optionalSubject}</span>
                        </div>
                    </div>

                    


                    <div className="inputfield">
                        <input type="submit" value="Edit" className="btn" />
                    </div>

                </div>



    );


}

export default Card;