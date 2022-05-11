import { Link } from 'react-router-dom';
import { useSelector, useStore } from 'react-redux';
import { selectForm } from '../../utils/selectors';
import { checkingData } from '../../features/form';
import EmployeeListIcon from '../../assets/address-card-solid.svg';
import department from '../../datas/department.js';
import americanStates from '../../datas/americanStates.js';
import { InputField, ScrollingMenu } from '../../components';

function HomeForm() {
    const store = useStore();
    const errorStatus = useSelector(selectForm).status;
    const errorMsg = useSelector(selectForm).errorMessages;

    function CreateEmployee(event) {
        event.preventDefault();

        const employeeData = {
            firstname: document.getElementById('firstname').value,
            lastname: document.getElementById('lastname').value,
            birthday: document.getElementById('birthday').value,
            startday: document.getElementById('startdate').value,
            street: document.getElementById('street').value,
            city: document.getElementById('city').value,
            state: document.getElementById('state').value,
            zipcode: document.getElementById('zipcode').value,
            department: document.getElementById('department').value,
        };
        console.log(employeeData);
        checkingData(store, employeeData);
    }
    return (
        <div className="home-ctn">
            <Link to="/employees" className="home-employee-link">
                <img
                    src={EmployeeListIcon}
                    alt="Employee list icon"
                    className="home-employee-icon"
                />
                <span className="home-employee-msg">
                    View current employees
                </span>
            </Link>
            <div className="home-form-ctn">
                <h1 className="home-form-title">Create Employee</h1>
                <form className="form-create-employee">
                    <InputField
                        label="First Name"
                        id="firstname"
                        type="text"
                        errorMsg={errorMsg?.firstname}
                    />
                    <InputField
                        label="Last Name"
                        id="lastname"
                        type="text"
                        errorMsg={errorMsg?.lastname}
                    />
                    <InputField
                        label="Date of Birth"
                        id="birthday"
                        type="date"
                        errorMsg={errorMsg?.birthday}
                    />
                    <InputField
                        label="Start Date"
                        id="startdate"
                        type="date"
                        errorMsg={errorMsg?.startday}
                    />
                    <div className="form-input-adress">
                        <h2>Adress</h2>
                        <InputField
                            label="Street"
                            id="street"
                            type="text"
                            errorMsg={errorMsg?.street}
                        />
                        <InputField
                            label="City"
                            id="city"
                            type="text"
                            errorMsg={errorMsg?.city}
                        />
                        <ScrollingMenu
                            label="State"
                            id="state"
                            optionArray={americanStates}
                            errorMsg={errorMsg?.state}
                        />
                        <InputField
                            label="Zip Code"
                            id="zipcode"
                            type="text"
                            errorMsg={errorMsg?.zipcode}
                        />
                    </div>
                    <ScrollingMenu
                        label="Department"
                        id="department"
                        optionArray={department}
                        errorMsg={errorMsg?.department}
                    />
                    <input
                        type="submit"
                        value="Save"
                        className="form-submit"
                        onClick={CreateEmployee}
                    />
                </form>
            </div>
        </div>
    );
}

export default HomeForm;
