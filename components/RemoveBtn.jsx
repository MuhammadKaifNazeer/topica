"use client"

import React from 'react'
import { useRouter } from 'next/navigation'

export const RemoveBtn = ({ id }) => {
  const router = useRouter();
  const removeTopic = async () => {
    const confirmed = confirm("Are you sure?")

    if (confirmed) {
      const res = await fetch(`http://localhost:3000/api/topics?id=${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        router.refresh();
      }
    }
  }

  return (
    <>
      <button onClick={removeTopic} className='bg-transparent text-black font-semibold focus:outline py-2 px-4 border border-black  rounded'>
        Delete
      </button>
    </>
  )
}
