export function DropDownOption({optionMenu}: any) {
    // optionMenu = {
    //     optionName: method,
    //     label: Method,
    //     values: [
    //         {
    //             value: 1,
    //             valueOption: University of Islamic Sciences, Karachi,
    //         },
    //         {
    //             value: 2,
    //             valueOption: Islamic Society of North America,
    //         },
    //     ]
    // }
    return (
        <>
            <label htmlFor={`${optionMenu.optionName}`}>{optionMenu.label}</label>
            <select name={`${optionMenu.optionName}`} id={`${optionMenu.optionName}`} onChange={optionMenu.eventHandler}>
                {optionMenu.values.map((data: any) => (
                    <option value={data.value} key={data.value}>{`${data.valueOption}`}</option>
                ))}
            </select>
        </>
    );
}