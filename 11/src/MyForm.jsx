import React from 'react';

// BEGIN (write your solution here)
const MyForm = () => {
    const [submitted,   setSubmitted]   = React.useState(false);

    const [email,       setEmail]       = React.useState("");
    const [password,    setPassword]    = React.useState("");
    const [country,     setCountry]     = React.useState("");
    const [city,        setCity]        = React.useState("");
    const [address,     setAddress]     = React.useState("");
    const [acceptRules, setAcceptRules] = React.useState("");

    const submit = (e) => {
        e.preventDefault();

        // const newFormData = new FormData(e.target);
        // const data = Object.fromEntries(newFormData.entries());

        // setEmail(data.email);
        // setPassword(data.password);
        // setCountry(data.country);
        // setCity(data.city);
        // setAddress(data.address);
        // setAcceptRules(data.acceptRules === "on" ? "true" : "false");

        setSubmitted(true);
    }
    const back = (e) => {
        e.preventDefault();
        setSubmitted(false);
    }

    return (
        !submitted && <form onSubmit={submit} name="myForm">
        <div className="col-md-6 mb-3">
            <label htmlFor="email" className="col-form-label">Email</label>
            <input
                    type="email"
                    name="email"
                    className="form-control"
                    id="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
        </div>
        <div className="col-md-6 mb-3">
            <label htmlFor="password" className="col-form-label">Password</label>
            <input
                    type="password"
                    name="password"
                    className="form-control"
                    id="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
        </div>
        <div className="col-md-6 mb-3">
            <label htmlFor="address" className="col-form-label">Address</label>
            <textarea
                    type="text"
                    className="form-control"
                    name="address"
                    id="address"
                    placeholder="1234 Main St"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    ></textarea>
        </div>
        <div className="col-md-6 mb-3">
            <label htmlFor="city" className="col-form-label">City</label>
            <input type="text" className="form-control" name="city" id="city" value={city} onChange={(e) => setCity(e.target.value)} />
        </div>
        <div className="col-md-6 mb-3">
            <label htmlFor="country" className="col-form-label">Country</label>
            <select id="country" name="country" className="form-control" value={country} onChange={(e) => setCountry(e.target.value)} >
                <option value="">Choose</option>
                <option value="argentina">Argentina</option>
                <option value="russia">Russia</option>
                <option value="china">China</option>
            </select>
        </div>
        <div className="col-md-6 mb-3">
            <div className="form-check">
                <label className="form-check-label" htmlFor="rules">
                    <input
                            id="rules"
                            type="checkbox"
                            name="acceptRules"
                            className="form-check-input"
                            checked={acceptRules}
                            onChange={(e) => setAcceptRules(e.target.checked)}
                            />
                    Accept Rules
                </label>
            </div>
        </div>
        <button type="submit" className="btn btn-primary">Sign in</button>
        </form> || <div>
            <button onClick={back} type="button" className="btn btn-primary">Back</button>
            <table className="table">
                <tbody>
                    <tr>
                        <td>acceptRules</td>
                        <td>{`${acceptRules === true ? "true" : "false" }`}</td>
                    </tr>
                    <tr>
                        <td>address</td>
                        <td>{address}</td>
                    </tr>
                    <tr>
                        <td>city</td>
                        <td>{city}</td>
                    </tr>
                    <tr>
                        <td>country</td>
                        <td>{country}</td>
                    </tr>
                    <tr>
                        <td>email</td>
                        <td>{email}</td>
                    </tr>
                    <tr>
                        <td>password</td>
                        <td>{password}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default MyForm;
// END
