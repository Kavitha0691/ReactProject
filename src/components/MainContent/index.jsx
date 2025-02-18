import Article from '../Article'
import styles from './main-content.module.css'

const MainContent = () => {
    return (
      <div class={styles.main}>
         <Article/>
         <Article/>
         <Article/>
         <Article/> 
      </div>
    )
}

export default MainContent