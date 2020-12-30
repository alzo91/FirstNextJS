import { GetStaticProps } from "next"


interface ICategory {
  id: String,
  title:String,
}

interface ICategories{
  categories: ICategory[]
}

export default function Categories({categories}:ICategories){
    return (
      <>
      <div>
        <h1>Categorias</h1>
      </div>
      <ul>
        {
          categories.map(category => <li key={String(category.id)}><p>{category.title}</p></li>)
        }
      </ul>
      </>
    )

}

export const getStaticProps:GetStaticProps = async (context) =>{
  const response = await fetch('http://localhost:3333/categories');
  const categories = await response.json();
  return {
    props:{
      categories,
    },revalidate:60,
  }
}
