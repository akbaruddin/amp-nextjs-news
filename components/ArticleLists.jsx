import { useEffect, useState } from "react";
import { nanoid } from 'nanoid'
const Article = ({ title, description }) => {
  return (
    <div>
      <h4>{ title }</h4>
      <p>{ description }</p>
    </div>
  )
}

const ArticleLists = ({ data }) => {
  return (
    <section>
      {data.map(article => <Article key={nanoid()} {...article} />)}
    </section>
  )
}

export default ArticleLists;