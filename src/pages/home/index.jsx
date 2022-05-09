import { Link } from 'react-router-dom';
import EmployeeListIcon from '../../assets/address-card-solid.svg';
import department from '../../datas/department.js';
import americanStates from '../../datas/americanStates.js';
import { InputField, ScrollingMenu } from '../../components';

function HomeForm() {
    const firstName = document.getElementById('firstname');
    const lastName = document.getElementById('lastname');
    const birthDay = document.getElementById('birthday');
    const startDay = document.getElementById('startdate');
    const street = document.getElementById('street');
    const city = document.getElementById('city');
    const stateSelect = document.getElementById('state');
    const zipCode = document.getElementById('zipcode');
    const departmentSelect = document.getElementById('department');

    function CreateEmployee(event) {
        event.preventDefault();
        console.log(
            firstName.value,
            lastName.value,
            birthDay.value,
            startDay.value,
            street.value,
            city.value,
            zipCode.value,
            stateSelect.value,
            departmentSelect.value
        );
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
                    <InputField label="First Name" id="firstname" type="text" />
                    <InputField label="Last Name" id="lastname" type="text" />
                    <InputField
                        label="Date of Birth"
                        id="birthday"
                        type="date"
                    />
                    <InputField label="Start Date" id="startdate" type="date" />
                    <div className="form-input-adress">
                        <h2>Adress</h2>
                        <InputField label="Street" id="street" type="text" />
                        <InputField label="City" id="city" type="text" />
                        <ScrollingMenu
                            label="State"
                            id="state"
                            optionArray={americanStates}
                        />
                        <InputField label="Zip Code" id="zipcode" type="text" />
                    </div>
                    <ScrollingMenu
                        label="Department"
                        id="department"
                        optionArray={department}
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
