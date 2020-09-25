import {useState} from 'react'

 export const useList = (init)=>{
    const [list,setList] = useState(init);

    return{
        list,
        removeItem(itemName){

             let newList = list.filter((item,index)=>{
              if(item.name !== itemName){
                return item
              }
            })
            setList(newList)
          },
          saveItem(index,newVal){
            let newList = [...list]
            newList[index].name = newVal
          }

    }
}