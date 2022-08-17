import Navigation from './Navigation';

import styles from './Header.module.css';

const Header = () => {
    return(
        <header className={styles.header}>
            <div className={styles['header-inner']}>
                <div className={styles['logo-container']}>
                    {/* <img src={fmgLogo} alt='main-logo' className={styles.logo} /> */}
                    <p style={{color: '#9b9898', fontSize: '18px', marginBottom: '15px'}}>Practice</p>
                </div>
                <Navigation />
            </div>
        </header>
    )
}

export default Header;