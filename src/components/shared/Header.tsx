import React from 'react'
import styles from '../../styles/Header.module.scss'

const Header: React.FC = () => {
  return (
    <section className={styles.headerWrapper}>
      <div>
        <img className={styles.logo} src="/logo.png" alt="Logo" />
      </div>
      <div className={styles.navTabsContainer}>
        <div className={styles.navTabsWrapper}>
          <button type="button">Nav buttons</button>
          <button type="button">Nav buttons</button>
          <button type="button">Nav buttons</button>
          <button type="button">Nav buttons</button>
        </div>
      </div>
    </section>
  )
}

export default Header
