
const  SearchBox= () => {
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <input
                type="text"
                className="form-control"
                placeholder="Search..."    
                        // value={value}
                    // onChange={onChange}
            style={{ marginRight: '5px' }}
          />
                    <button className="btn btn-primary" type="button">Search</button>

          {/* <button onClick={onSearch}>Search</button> */}
        </div>
      );
    };
export default SearchBox;