
export interface Products{
  id:number,
  category:string,
  description:string,
  image:string,
  price:number,
  rating:{rate:number, count:number},
  title:string
}