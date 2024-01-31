import React, { useState } from 'react'
import Layout from '../components/Layout'

export default function AddProduct() {
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [price, setPrice] = useState("")

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            const data = await fetch(
                "https://dummyjson.com/products/add",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        title: title,
                        description: desc,
                        price: price
                    })
                }
            )

            const res = await data.json()

            alert(
                `berhasil add product ${res.title}, ${res.description}, ${res.price}`)

        } catch (e) {
            console.log(e)
        }
    }

    return (
        <Layout>
            <section className='container'>
                <form className='mx-auto space-y-3 max-w-96' onSubmit={handleSubmit}>
                    {/* input title */}
                    <div className='flex flex-col'>
                        <label htmlFor="title">Title</label>
                        <input className='px-2 py-2 border' type="text" id='title' placeholder='title product' required
                            onInput={(e) => { setTitle(e.target.value) }} />
                    </div>

                    {/* input description */}
                    <div className='flex flex-col'>
                        <label htmlFor="desc">Description</label>
                        <textarea className='px-3 py-2 border' name="desc" id="desc" rows="10" placeholder='description products' onInput={(e) => { setDesc(e.target.value) }} required></textarea>
                    </div>

                    {/* input price */}
                    <div className='flex flex-col'>
                        <label htmlFor="price">Price</label>
                        <input className='px-3 py-2 border' type="number" name="price" id="price" placeholder='Price Products...' onInput={(e) => { setPrice(e.target.value) }} required />
                    </div>

                    <button className='px-3 py-2 bg-green-500 rounded-md'>Add</button>
                </form>
            </section>
        </Layout>
    )
}
