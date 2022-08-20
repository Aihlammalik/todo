import React from 'react'

export default function uniquechracter() {
    const array =['Aihlam ','malik',"ahmad",'100']
    for (let index = 0; index < array.length; index++) {
       if (index == 1) {
        console.log("unique character is found successfully")
       }
        else{
console.log('not found')
        }
    }
  return (
    <h1>Running</h1>
  )
}
