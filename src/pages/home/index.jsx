import { Link } from 'react-router-dom';
import EmployeeListIcon from '../../assets/address-card-solid.svg';
import ScrollingMenu from '../../components/scrolling menu';
import department from '../../datas/option.js';

function HomeForm() {
    console.log(department);
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
                    <div className="form-input-wrapper form-firstname">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" id="firstName" />
                    </div>
                    <div className="form-input-wrapper form-lastname">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" id="lastName" />
                    </div>
                    <div className="form-input-wrapper form-birthday">
                        <label htmlFor="birthday">Date of Birth</label>
                        <input type="date" id="birthday" />
                    </div>
                    <div className="form-input-wrapper form-startdate">
                        <label htmlFor="startDate">Start Date</label>
                        <input type="date" id="startDate" />
                    </div>
                    <div className="form-input-adress">
                        <h2>Adress</h2>
                        <div className="form-input-wrapper form-street">
                            <label htmlFor="Street">Street</label>
                            <input type="text" id="Street" />
                        </div>
                        <div className="form-input-wrapper form-city">
                            <label htmlFor="City">City</label>
                            <input type="text" id="City" />
                        </div>
                        <div className="form-input-wrapper form-state">
                            <label htmlFor="state">State</label>
                            <select id="state">
                                <option value="alabama">Alabama</option>
                                <option value="illinois">Illinois</option>
                            </select>
                        </div>
                        <div className="form-input-wrapper form-zipcode">
                            <label htmlFor="zipCode">Zip Code</label>
                            <input type="text" id="zipCode" />
                        </div>
                    </div>

                    <ScrollingMenu name="Department" optionArray={department} />

                    <input type="submit" value="Save" className="form-submit" />
                </form>
            </div>
        </div>
    );
}

export default HomeForm;
