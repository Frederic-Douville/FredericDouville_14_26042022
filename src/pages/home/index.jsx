import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector, useStore } from 'react-redux';
import { selectForm, selectEmployees } from '../../utils/selectors';
import { checkingData, formReset } from '../../features/form';
import { employeesAddNewOne, getEmployeesData } from '../../features/employees';
import EmployeeListIcon from '../../assets/address-card-solid.svg';
import department from '../../datas/department.js';
import americanStates from '../../datas/americanStates.js';
import { InputField, InputSelect } from '../../components';
import { Modal } from 'p14-react-modal-ocr-fred_dou';

function HomeForm() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const store = useStore();
    const errorMsg = useSelector(selectForm).errorMessages;
    const employeesData = useSelector(selectEmployees).response;

    /** Getting employees data list */
    useEffect(() => {
        getEmployeesData(store);
    }, [store]);

    /**Function that get new employee data in order to push it in the actual employees data list */
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
        checkingData(store, employeeData);

        /**Copy of the employees data array in order to push the new employee data */
        window.setTimeout(() => {
            const formStatus = selectForm(store.getState()).status;
            var newData = employeesData.map((item) =>
                Object.assign({}, item, { selected: false })
            );
            if (formStatus === 'resolved') {
                newData.push(employeeData);
                store.dispatch(employeesAddNewOne(newData));
                setIsModalOpen(true);
            }
        }, 100);
    }

    /**Function that close the modal and rest the form */
    function closeModal() {
        store.dispatch(formReset());
        setIsModalOpen(false);
        document.getElementById('form-employee').reset();
    }

    return (
        <div className="home-ctn">
            {isModalOpen ? (
                <Modal
                    text="Employee Created !"
                    functionBtn={closeModal}
                    textBtn="OK"
                />
            ) : null}

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
                <form className="form-create-employee" id="form-employee">
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
                        <InputSelect
                            label="State"
                            id="state"
                            optionArrayStates={americanStates}
                            errorMsg={errorMsg?.state}
                        />
                        <InputField
                            label="Zip Code"
                            id="zipcode"
                            type="text"
                            errorMsg={errorMsg?.zipcode}
                        />
                    </div>
                    <InputSelect
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
