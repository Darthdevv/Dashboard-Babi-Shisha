import React from 'react'

function AddList() {
  return (
    <div className=" flex flex-row items-center justify-center box-border min-h-screen ">
      <div className="flex flex-col items-start justify-center mr-10">
        <label className="text-[16px]" htmlFor="phone">
          Category
        </label>
        <input
          type="text"
          name="Category"
          id="category"
          className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[400px] p-2.5 dark:bg-white dark:border-gray-300 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-5"
          placeholder="+1 (123) 456-7890"
        />
        <label className="text-[16px]" htmlFor="phone">
          Name
        </label>
        <input
          type="text"
          name="Name"
          id="Name"
          className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[400px] p-2.5 dark:bg-white dark:border-gray-300 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-5"
          placeholder="+1 (123) 456-7890"
        />
        <label className="text-[16px]" htmlFor="phone">
          Price
        </label>
        <input
          type="number"
          name="Price"
          id="price"
          className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[400px] p-2.5 dark:bg-white dark:border-gray-300 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-5"
          placeholder="+1 (123) 456-7890"
        />
        <label className="text-[16px]" htmlFor="phone">
          Description
        </label>
        <input
          type="text"
          name="Description"
          id="Description"
          className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[400px] p-2.5 dark:bg-white dark:border-gray-300 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-5"
          placeholder="+1 (123) 456-7890"
        />
      </div>
      <div className="flex flex-col items-start justify-center pb-[30px]">
        <label className="text-[16px]" htmlFor="phone">
          Features
        </label>
        <input
          type="text"
          name="Features"
          id="Features"
          className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[400px] p-2.5 dark:bg-white dark:border-gray-300 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-5"
          placeholder="+1 (123) 456-7890"
        />
        <label className="text-[16px]" htmlFor="password">
          Images
        </label>
        <input
          type="file"
          name="Images"
          id="Images"
          className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[400px] p-2.5 dark:bg-white dark:border-gray-300 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-5 "
          placeholder="Min. 8 characters"
        />
        <label className="text-[16px]" htmlFor="password">
          Other-Images
        </label>
        <input
          type="file"
          name="Other-Images"
          id="Other-Images"
          className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[400px] p-2.5 dark:bg-white dark:border-gray-300 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-5"
          placeholder="Min. 8 characters"
        />
        <button className="w-[400px] text-white bg-indigo-700 hover:bg-indigo-800 active:bg-indigo-900 font-medium rounded-lg text-sm py-2 mb-[35px]">
          Add
        </button>
      </div>
    </div>
  );
}

export default AddList