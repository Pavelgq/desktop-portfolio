
import { useDispatch } from 'react-redux';
import styles from './PageLoading.module.css';

export const PageLoading = () => {
  const dispatch = useDispatch();


  return (
    <div className={styles.screen}>
      <div className={styles.progress}>
        
      </div>
    </div>
  )
}