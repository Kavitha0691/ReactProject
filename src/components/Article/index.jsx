import styles from './article.module.css'
import Flower from '../../assets/flower.jpeg'

const Article = () => {
    return (
      <article className = {styles.article}>
        <img src={Flower} alt="flower" />
       <h2>Article</h2>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit doloremque quo molestiae ab quae hic quibusdam, dolorum inventore sunt fugit! Hic et earum quis. Quibusdam ex ad tenetur impedit dolore?</p>
      </article>
    )
}

export default Article