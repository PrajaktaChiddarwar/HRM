
// import '../css/Contractor'
import { useFormik} from "formik";
import { contract } from '../schemas/contract'
import '../css/Contractor.css'
function Contractor() {
const initialValues =
{
    actualName :"",
actualAadharNo :"",
actualPanNo :"",
beneficiaryName :"",
beneficiaryAadharNo :"",
beneficiaryPanNo:"",
bankName :"",
bankAccNo :"",
ifscCode :"",
contractName :"",
joinDate :"",
birthday :"",
address :"",
gender :"",
reportTo:"",
nationality :"",
religion :"",
EmergencyContactName :"",
EmergencyContactRelation:"",
EmergencyContactNumber:"",

ActualPan:"",
ActualAadhar:"",
ActualBeneficiaryPan:"",
ActualBeneficiaryAadhar:""
}
    const { values, errors, touched, handleBlur, handleSubmit, handleChange } = useFormik(
        {
            initialValues: initialValues,
            validationSchema: contract,
            onSubmit: (values,  action) => {
              console.log("submitted", values);
              action.resetForm();
              alert("submitted");
        }

     } );
   
  return (
    
    <>

        <h1 className='heading'>Contractor Profile Form</h1>  
        {/* contractor list here */}
        <div className="  contractor container flex flex-col items-center " id="container" style={{background:"white"}}>
        <form className="contractor_form " onSubmit={handleSubmit}>
        <div className='Upper  '>
        <div className="UpperLeft mt-3">
            <div className="ActualName">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold px-4 mb-2 "
              htmlFor="actualName"
            >
              Actual Name :        
            </label>
            <input
              className="common appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded  
              px-4 mb-3  leading-tight focus:outline-none focus:bg-white mx-4"
              id="actualName"
              type="text"
              placeholder="ActualName"
              required
              value={values.actualName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            </div>
            {errors.actualName && touched.actualName ?
                  (<small className='form-error'>{errors.actualName}</small>)
                  : null}

            <div className="ActualAadharNo">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold px-4 mb-2"
              htmlFor="actualAadharNo"
            >
             actualAadharNo  :
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border
               border-gray-200 rounded  px-4 mb-3 leading-tight focus:outline-none focus:bg-white "
              id="actualAadharNo"
              type="number"
              placeholder="actualAadharNo"
              required
              value={values.actualAadharNo}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            </div>
            {errors.actualAadharNo && touched.actualAadharNo ?
                  (<small className='form-error'>{errors.actualAadharNo}</small>)
                  : null}


            <div className="ActuaPanNo">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold  px-4  mb-2"
              htmlFor="actualPanNo"
            >
             actualPanNo :
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border
               border-gray-200 rounded  px-4 mb-3 leading-tight focus:outline-none focus:bg-white  inputField"
              id="actualPanNo"
              type="text"
              placeholder="actualPanNo"
              required
              value={values.actualPanNo}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            </div>
            {errors.actualPanNo && touched.actualPanNo ?
                  (<small className='form-error'>{errors.actualPanNo}</small>)
                  : null}
            <div className="BeneficiaryName">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold px-4  mb-2"
              htmlFor="beneficiaryName"
            >
             beneficiaryName :
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border 
               border-gray-200 rounded  px-4 mb-3 leading-tight focus:outline-none focus:bg-white "
              id="beneficiaryName"
              type="text"
              placeholder="beneficiaryName"
              required
              value={values.beneficiaryName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            </div>
            {errors.beneficiaryName && touched.beneficiaryName ?
                  (<small className='form-error'>{errors.beneficiaryName}</small>)
                  : null}

            <div className="BeneficiaryAadharNo">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold px-4  mb-2"
              htmlFor="beneficiaryAadharNo"
            >
             beneficiaryAadharNo :
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border
               border-gray-200 rounded  px-4 mb-3 leading-tight focus:outline-none focus:bg-white "
              id="beneficiaryAadharNo"
              type="number"
              placeholder="beneficiaryAadharNo"
             required

             value={values.beneficiaryAadharNo}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            </div>
            {errors.beneficiaryAadharNo && touched.beneficiaryAadharNo ?
                  (<small className='form-error'>{errors.beneficiaryAadharNo}</small>)
                  : null}

            <div className="BeneficiaryPanNo">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold px-4  mb-2"
              htmlFor="beneficiaryPanNo"
            >
             beneficiaryPanNo :
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border
               border-gray-200 rounded  px-4 mb-3 leading-tight focus:outline-none focus:bg-white  "
              id="beneficiaryPanNo"
              type="text"
              placeholder="BeneficiaryPanNo"
              required
            
              value={values.beneficiaryPanNo}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            </div>
            {errors.beneficiaryPanNo && touched.beneficiaryPanNo ?
                  (<small className='form-error'>{errors.beneficiaryPanNo}</small>)
                  : null}
            </div>
            <div className="UpperRight mt-3">
            <div className="BankName">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold px-4  mb-2"
              htmlFor="bankName"
            >
             BankName :
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border
               border-gray-200 rounded  px-4 mb-3 leading-tight focus:outline-none focus:bg-white "
              id="bankName"
              type="name"
              placeholder="BankName"
              required
              value={values.bankName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            </div>
            {errors.bankName && touched.bankName ?
                  (<small className='form-error'>{errors.bankName}</small>)
                  : null}
            
            <div className="BankAccNo">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold px-4  mb-2 "
              htmlFor="bankAccNo"
            >
             Bank Account No :
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border
               border-gray-200 rounded  px-4 mb-3 leading-tight focus:outline-none focus:bg-white "
              id="bankAccNo"
              type="number"
              placeholder="Bank Acc No"
              required
              value={values.bankAccNo}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            </div>
            {errors.bankAccNo && touched.bankAccNo ?
                  (<small className='form-error'>{errors.bankAccNo}</small>)
                  : null}
            <div className="IfscCode">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold px-4  mb-2"
              htmlFor="ifscCode"
            >
             Ifsc Code :
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border
               border-gray-200 rounded  px-4 mb-3 leading-tight focus:outline-none focus:bg-white "
              id="ifscCode"
              type="text"
              placeholder="Ifsc Code"
              required
              value={values.ifscCode}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            </div>
            {errors.ifscCode && touched.ifscCode ?
                  (<small className='form-error'>{errors.ifscCode}</small>)
                  : null}
            <div className="ContractorName">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold px-4 mb-2"
              htmlFor="contractName"
            >
             Contractor Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border
               border-gray-200 rounded  px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="contractName"
              type="name"
              placeholder="Contractor Name"
              required
              value={values.contractName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            </div>
            {errors.contractName && touched.contractName ?
                  (<small className='form-error'>{errors.contractName}</small>)
                  : null}

            <div className="JoinDate">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold  px-4 mb-2"
              htmlFor="joinDate"
            >
             Join Date :
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border
               border-gray-200 rounded  px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="joinDate"
              type="date"
              placeholder="Join Date"
              required
              value={values.joinDate}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            </div>
            {errors.joinDate && touched.joinDate ?
                  (<small className='form-error'>{errors.joinDate}</small>)
                  : null}

            <div className="Birthday">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold  px-4 mb-2"
              htmlFor="birthday"
            >
             Birthday :
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border
               border-gray-200 rounded  px-4 mb-3 leading-tight focus:outline-none focus:bg-white "
              id="birthday"
              type="date"
              placeholder="Birthday"
              required
              value={values.birthday}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            </div>
            {errors.birthday && touched.birthday ?
                  (<small className='form-error'>{errors.birthday}</small>)
                  : null}
</div>
</div>
<div className='Lower flex'>
<div className="LowerLeft">
            <div className="Address">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold px-4  mb-2"
              htmlFor="address"
            >
             Address :
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border
               border-gray-200 rounded  px-4 mb-3 leading-tight focus:outline-none focus:bg-white "
              id="address"
              type="text"
              placeholder="Address"
              required
              value={values.address}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            </div>
            {errors.address && touched.address ?
                  (<small className='form-error'>{errors.address}</small>)
                  : null}

            <div className="Gender">
            <label
              className=" uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 px-4 "
              htmlFor="Gender"
            >
              Gender :
            </label>
           
            
             <input type="radio" id="Male" name="fav_language"  />
             <label htmlFor="Male" className='px-2 '>Male</label>
             <input type="radio" id="Female" name="fav_language" />
             <label htmlFor="Female" className='px-2'>Female</label>
             <input type="radio" id="Other" name="fav_language" />
             <label htmlFor="Other" className='px-2'>Other</label>
            </div>
                    

            <div className="ReportTo">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 px-4 "
              htmlFor="reportTo"
            >
             Report To :
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border
               border-gray-200 rounded  px-4 mb-3 leading-tight focus:outline-none focus:bg-white "
              id="reportTo"
              type="text"
              placeholder="Report To"
              required
              value={values.reportTo}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            </div>
            {errors.reportTo && touched.reportTo ?
                  (<small className='form-error'>{errors.reportTo}</small>)
                  : null}

            <div className="Nationality">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 px-4 "
              htmlFor="nationality"
            >
             Nationality :
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border
               border-gray-200 rounded  px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="nationality"
              type="text"
              placeholder="Nationality"
              required
              value={values.nationality}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            </div>
            {errors.nationality && touched.nationality ?
                  (<small className='form-error'>{errors.nationality}</small>)
                  : null}
            <div className="Religion">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 px-4 "
              htmlFor="religion"
            >
             Religion :
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border
               border-gray-200 rounded  px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="religion"
              type="text"
              placeholder="Religion"
              required
              value={values.religion}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            </div>
            {errors.religion && touched.religion ?
                  (<small className='form-error'>{errors.religion}</small>)
                  : null}
            <div className="EmergencyContactName">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold px-4  mb-2"
              htmlFor="EmergencyContactName"
            >
             Emergency Contact Name :
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border
               border-gray-200 rounded  px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="EmergencyContactName"
              type="text"
              placeholder="EmergencyContactName"
              required
              value={values.EmergencyContactName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            </div>
            {errors.EmergencyContactName && touched.EmergencyContactName ?
                  (<small className='form-error'>{errors.EmergencyContactName}</small>)
                  : null}
            </div>

            <div className="LowerRight">
            

            <div className="EmergencyContactRelation">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold px-4  mb-2"
              htmlFor="EmergencyContactRelation"
            >
             Emergency Contact Relation :
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border
               border-gray-200 rounded  px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="EmergencyContactRelation"
              type="text"
              placeholder="EmergencyContactRelation"
              required
              value={values.EmergencyContactRelation}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            </div>
            {errors.EmergencyContactRelation && touched.EmergencyContactRelation ?
                  (<small className='form-error'>{errors.EmergencyContactRelation}</small>)
                  : null}

            <div className="Emergency Contact Number">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold  px-4 mb-2"
              htmlFor="EmergencyContactNumber"
            >
             Emergency Contact Number :
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border
               border-gray-200 rounded  px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="EmergencyContactNumber"
              type="number"
              placeholder="EmergencyContactNumber"
             required
             value={values.EmergencyContactNumber}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            </div>
            {errors.EmergencyContactNumber && touched.EmergencyContactNumber ?
                  (<small className='form-error'>{errors.EmergencyContactNumber}</small>)
                  : null}

            {/* Choose File section */}
            <div className="ActualPan">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold px-4 mb-2"
              htmlFor="ActualPan"
            >
             Actual Pan :
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border
               border-gray-200 rounded  px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="ActualPan"
              type="file"
              placeholder="Actual Pan"
              accept=".pdf, .docx, .jpeg, .png"
              required
              value={values.ActualPan}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            </div>
            {errors.ActualPan && touched.ActualPan ?
                  (<small className='form-error'>{errors.ActualPan}</small>)
                  : null}

            <div className="ActualAadhar">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold px-4  mb-2"
              htmlFor="ActualAadhar"
            >
             Actual Aadhar :
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border
               border-gray-200 rounded  px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="ActualAadhar"
              type="file"
              placeholder="Actual Aadhar"
              accept=".pdf, .docx, .jpeg, .png"
              required
              value={values.ActualAadhar}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            </div>
            {errors.ActualAadhar && touched.ActualAadhar ?
                  (<small className='form-error'>{errors.ActualAadhar}</small>)
                  : null}

            <div className="ActualBeneficiaryPan">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold px-4  mb-2"
              htmlFor="ActualBeneficiaryPan"
            >
             Actual Beneficiary Pan :
            </label>
            <input
              className="appearance-none w-full block  bg-gray-200 text-gray-700 border
               border-gray-200 rounded  px-4 mb-3 leading-tight focus:outline-none focus:bg-white "
              id="ActualBeneficiaryPan"
              type="file"
              placeholder="Actual Beneficiary Pan"
              accept=".pdf, .docx, .jpeg, .png"
              required
              value={values.ActualBeneficiaryPan}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            </div>
            {errors.ActualBeneficiaryPan && touched.ActualBeneficiaryPan ?
                  (<small className='form-error'>{errors.ActualBeneficiaryPan}</small>)
                  : null}

            
            <div className="ActualBeneficiaryAadhar">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold px-4  mb-2"
              htmlFor="ActualBeneficiaryAadhar"
            >
             Actual Beneficiary Aadhar :
            </label>
            <input
              className="appearance-none block  bg-gray-200 text-gray-700 border
               border-gray-200 rounded  px-2 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="ActualBeneficiaryAadhar"
              type="file"
              placeholder="Actual Beneficiary Aadhar"
              accept=".pdf, .docx, .jpeg, .png"
             required
             value={values.ActualBeneficiaryAadhar}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            </div>
            {errors.ActualBeneficiaryAadhar && touched.ActualBeneficiaryAadhar ?
                  (<small className='form-error'>{errors.ActualBeneficiaryAadhar}</small>)
                  : null}
            </div>
            </div>
            <button className='btn-submit'
            type="submit"
             onClick={()=>
            {
                alert("Submitted")
            }}>Submit</button>
        </form>
        </div>

    </>
  )
}

export default Contractor