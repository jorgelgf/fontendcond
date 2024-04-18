import {  useState } from 'react';

type MonthTypes ={
month:number;
}
type MonthItem = {
  index: number;
  m: string;
};
export const MonthList = ({month}:MonthTypes) => {
  const [monthList, ] = useState<number>(month)

   if (month===undefined){
    throw new Error("Mês não encontrado"); 
  }
  const list = 
  [
    {index:0, m:'JANEIRO'},
    {index:1, m:'FEVEREIRO'},
    {index:2, m:'MARÇO'},
    {index:3, m:'ABRIL'},
    {index:4, m:'MAIO'},
    {index:5, m:'JUNHO'},
    {index:6, m:'JULHO'},
    {index:7, m:'AGOSTO'},
    {index:8, m:'SETEMBRO'},
    {index:9, m:'OUTUBRO'},
    {index:10, m:'NOVEMBRO'},
    {index:11, m:'DEZEMBRO'}
  ]

let filterNextMonth:MonthItem|undefined

  (monthList===11)?
  filterNextMonth = list.find((i)=>i.index === 0):
  filterNextMonth = list.find((i)=>i.index === monthList+1);

   const filterMonth = list.find((i)=> i.index ===monthList)
 return<>
        <span>{filterMonth?.m} / {filterNextMonth?.m}</span>
      </>
}
