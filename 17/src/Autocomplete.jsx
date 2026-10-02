import axios from 'axios';
import React from 'react';

// BEGIN (write your solution here)
const Autocomplete = () => {
    const [text, setText] = React.useState("");
    const [countries, setCountries] = React.useState([]);

    React.useEffect( () => {
        const getCountries = async () => {
            if (text.length > 0) {
                const res = await axios.get("/countries", { params: { term: text } });
                setCountries(res.data);
            } else {
                setCountries([]);
            }
        }
        getCountries();
    }, [ text ])

    return (
        <div>
            <form>
                <input type="text" className="form-control" placeholder="Enter Country" value={text} onChange={(e) => setText(e.target.value)} />
            </form>
            {countries.length > 0 && <ul>
                {countries.map( (country) => {
                    return (
                        <li key={country}>{country}</li>
                    );}
                )}
            </ul> || null}
        </div>
    );
}

export default Autocomplete;
// END
