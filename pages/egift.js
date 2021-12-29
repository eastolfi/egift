import Image from 'next/image';
import { useState } from 'react';
import styles from '../styles/Egift.module.css';

export default function Egift() {
    const receiver = 'Mery';
    const giftUrl = undefined;
    const giftImage = '/gift.png';

    const [ open, setOpen ] = useState(false);

    console.log(open)
    const toggleGiftOpen = () => {
        setOpen((isOpen) => !isOpen);
    }

    const giftImageElement = (giftImage && 
        <Image alt='Gift' src={giftImage} width='200px' height='200px'></Image>
    ) || undefined;
    const giftLinkElement = (giftUrl &&
        <a href={giftUrl} target='_blank' rel='noreferrer'>{ giftImageElement || <span>View</span> }</a>
    ) || undefined;

    return (
        <div className={ styles.container }>
            <h1 className={ styles.title }>Aquí tiene su regalo digital</h1>
            <section className={ styles['above-fold'] }>
                <div className={ styles['wrap-present'] }>
                    <div className={`${styles['present-box']} ${open ? styles.open : ''}`} id='present' onClick={ toggleGiftOpen }>
                        <div className={ styles.present }>
                            <div className={ styles['img-wrap'] } id='present-image'>
                                { giftLinkElement || giftImageElement || <span>???</span> }
                            </div>
                        </div>
                        <div className={`${styles.side} ${styles.front}`}></div>
                        <div className={`${styles.side} ${styles.back}`}></div>
                        <div className={`${styles.side} ${styles.left}`}></div>
                        <div className={`${styles.side} ${styles.right}`}></div>
                        <div className={`${styles.side} ${styles.top}`}>
                            <span className={ styles.to }>
                                <span className={ styles.name } id='nametag'>
                                    { receiver }
                                </span>
                            </span>
                        </div>
                        <div className={`${styles.side} ${styles.bottom}`}></div>
                    </div>
                </div>

                <p className={ styles['info-text'] }>Click para abrir</p>
            </section>
        </div>
    );
}
