import { useEffect, useState } from "react";
import Portfolio from "./Portfolio";
import { fetchPortfolios, postPhoto } from "./api";

const ControlPhoto = () =>{
    const [portfolios, setPortfolios] = useState([])
    const [fileInput, setFileInput]  = useState(null)
    const [selectedPortfolio, setSelectedPortfolio] = useState(1)


    useEffect(() => {
      const loadPortfolios = async () => {
        try {
          const data = await fetchPortfolios();
          setPortfolios(data);
        } catch (err) {
          setError(err.message);
        }
      };
  
      loadPortfolios();
    }, []);
    
    const handleSelectChange = (event) => {
        setSelectedPortfolio(event.target.value);
      };

    const handleSubmit = async (e) =>{
        e.preventDefault()
        const photoForm = new FormData()
        photoForm.append('owner_type', 'portfolio')
        photoForm.append('owner_id', selectedPortfolio)
        photoForm.append('image', fileInput);
        await postPhoto(photoForm)

    }

    const handleFileChange = (e) => {
        setFileInput(e.target.files[0]);
    };


    return(
        <div>
            <h1>fart</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <select value={selectedPortfolio} onChange={handleSelectChange}>
                        {portfolios.map((portfolio) => 
                        <option value={portfolio.id}>{portfolio.title}</option>    
                    )}
                        
                    </select>
                </label>
                <label>
                    <input type="file" name="photo" onChange={handleFileChange}/>
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default ControlPhoto