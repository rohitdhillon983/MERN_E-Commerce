import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import SummaryApi from '../common/commonRoutes'
import VerticalCard from '../components/VerticalCard'

const SearchProduct = () => {
    const query = useLocation()
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(false)
    const [sortBy,setSortBy] = useState("")

    console.log("query",query.search)

    const fetchProduct = async()=>{
        setLoading(true)
        const response = await fetch(SummaryApi.searchProduct.url+query.search)
        const dataResponse = await response.json()
        setLoading(false)

        // console.log(dataResponse)
        setData(dataResponse.data)
    }

    const handleOnChangeSortBy = (e)=>{
      const { value } = e.target

      setSortBy(value)

      if(value === 'asc'){
        setData(preve => preve.sort((a,b)=>a.sellingPrice - b.sellingPrice))
      }

      if(value === 'dsc'){
        setData(preve => preve.sort((a,b)=>b.sellingPrice - a.sellingPrice))
      }
    }

    useEffect(()=>{
        fetchProduct()
    },[query])
    useEffect(()=>{

    },[sortBy])

    // console.log(data)
  return (
    <div className='container mx-auto p-4'>
      {
        loading && (
          <p className='text-lg text-center'>Loading ...</p>
        )
      }
 
      <p className='text-lg font-semibold my-3'>Search Results : {data.length}</p>

      <form className='text-sm flex gap-4 py-2'>
        <div className='flex items-center gap-3'>
          <input type='radio' name='sortBy' checked={sortBy === 'asc'} onChange={handleOnChangeSortBy} value={"asc"}/>
          <label>Price - Low to High</label>
        </div>

        <div className='flex items-center gap-3'>
          <input type='radio' name='sortBy' checked={sortBy === 'dsc'} onChange={handleOnChangeSortBy} value={"dsc"}/>
          <label>Price - High to Low</label>
        </div>
      </form>
      {
        data.length === 0 && !loading && (
           <p className='bg-white text-lg text-center p-4'>No Data Found....</p>
        )
      }


      {
        data.length !== 0 && !loading && (
            // console.log(data),
          <VerticalCard loading={loading} data={data}/>
        )
      }

    </div>
  )
}

export default SearchProduct