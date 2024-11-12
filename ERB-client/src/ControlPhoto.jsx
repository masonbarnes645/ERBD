import { useState } from "react";
import { fetchPortfolios, postPhoto } from "./api";
import { useOutletContext } from "react-router-dom";

const ControlPhoto = () => {
  const { portfolios, products } = useOutletContext()
  const [selectedOption, setSelectedOption] = useState(1)
  const [fileInput, setFileInput] = useState(null)
  const [uploadType, setuploadType] = useState('product')


  const handleSubmit = async (e) => {
    e.preventDefault()
    const photoForm = new FormData()
    photoForm.append('owner_type', uploadType)
    photoForm.append('owner_id', selectedPortfolio)
    photoForm.append('image', fileInput);
    await postPhoto(photoForm)
  }

  const handleChange = (e) => {
    setuploadType(e.target.value)
    setSelectedOption(1)

  }



  const handleFileChange = (e) => {
    setFileInput(e.target.files[0]);
  };


  return (
    <>
      <div>
        <h1 style={{ color: 'black' }}>Add Photos</h1>
            <select value={uploadType} onChange={handleChange}>
              <option value={'product'} onClick={() => setuploadType('product')}>Product</option>
              <option value={'portfolio'} onClick={() => setuploadType('portfolio')}>Portfolio</option>
            </select>
        <form onSubmit={handleSubmit}>
          <label>
            <select value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
              {uploadType === 'portfolio' ? portfolios.map((portfolio) =>
                <option value={portfolio.id}>{portfolio.title}</option>
              ) : products.map((product) =>
                <option value={product.id}>{product.name}</option>
              )}

            </select>
          </label>
          <label>
            <input type="file" name="photo" onChange={handleFileChange} />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  )
}

export default ControlPhoto

// select photo/port, conditionally render option list based on that state, decide what to append based on that state