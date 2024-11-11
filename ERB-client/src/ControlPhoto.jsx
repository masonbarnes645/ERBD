import { useState } from "react";
import { fetchPortfolios, postPhoto } from "./api";
import { useOutletContext } from "react-router-dom";

const ControlPhoto = () => {
  const { portfolios, products } = useOutletContext()
  const [selectedPortfolio, setSelectedPortfolio] = useState(1)
  const [selectedProduct, setSelectedProduct] = useState(1)
  const [poFileInput, setPoFileInput] = useState(null)
  const [prFileInput, setPrFileInput] = useState(null)



  const handleSelectChange = (event) => {
    setSelectedPortfolio(event.target.value);
  };

  const handleSubmitPo = async (e) => {
    e.preventDefault()
    const photoForm = new FormData()
    photoForm.append('owner_type', 'portfolio')
    photoForm.append('owner_id', selectedPortfolio)
    photoForm.append('image', poFileInput);
    await postPhoto(photoForm)

  }
  const handleSubmitPr = async (e) => {
    e.preventDefault()
    const photoForm = new FormData()
    photoForm.append('owner_type', 'product')
    photoForm.append('owner_id', selectedProduct)
    photoForm.append('image', prFileInput);
    await postPhoto(photoForm)

  }

  const handlePoFileChange = (e) => {
    setPoFileInput(e.target.files[0]);
  };
  const handlePrFileChange = (e) => {
    setPrFileInput(e.target.files[0]);
  };


  return (
    <>
      <div>
        <h1 style={{ color: 'black' }}>Portfolio</h1>
        <form onSubmit={handleSubmitPo}>
          <label>
            <select value={selectedPortfolio} onChange={handleSelectChange}>
              {portfolios.map((portfolio) =>
                <option value={portfolio.id}>{portfolio.title}</option>
              )}

            </select>
          </label>
          <label>
            <input type="file" name="photo" onChange={handlePoFileChange} />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div>
        <h1 style={{ color: 'black' }}>Products</h1>
        <form onSubmit={handleSubmitPr}>
          <label>
            <select value={selectedPortfolio} onChange={handleSelectChange}>
              {products.map((product) =>
                <option value={product.id}>{product.name}</option>
              )}

            </select>
          </label>
          <label>
            <input type="file" name="photo" onChange={handlePrFileChange} />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  )
}

export default ControlPhoto

// select photo/port, conditionally render option list based on that state, decide what to append based on that state