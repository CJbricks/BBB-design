import React from 'react'
import styles from '@/styles/Menu.module.css'

export default function FlatMenu() {
  return (
    <>
    <div className={styles.body}>
        <div className={styles.work}>Work
        </div>
        <div className={styles.contact}>Contact
        </div>
        <div className={styles.store}>Store
        </div>
</div>
    </>
  )
}
