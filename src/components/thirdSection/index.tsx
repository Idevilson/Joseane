import React from 'react';
import styles from './styles.module.scss';
import Image from 'next/image'
import ReactPlayer from 'react-player/youtube'

export function ThirdSection() {

    return(
        <>
            <div className={styles.container} id="posicionamento">
                <div className={styles.centerContainer}>
                    <div className={styles.headerContent}>
                        <Image
                            src="/assets/thirdSection/posicionamentos.png"
                            alt="Posicionamentos"
                            width={531}
                            height={43}
                            quality={100}
                        />
                    </div>

                    <div className={styles.bodyVideoContainer}>
                        <ReactPlayer url='https://youtu.be/r3KN6tiWE7U' />
                    </div>

                    <div className={styles.footer}>
                            <div className={styles.card}>
                                <Image
                                    src="/assets/thirdSection/boy.png"
                                    alt="Ícone de um menino"
                                    width={85}
                                    height={113}
                                    quality={100}
                                />

                                <div className={styles.textBox}>
                                    <h2 className={styles.text}>
                                        Pelos jovens que <br/>
                                        buscam um lugar no <br/>
                                        mercado de trabalho
                                    </h2>
                                </div>
                            </div>

                        <div className={styles.card}>
                            <Image
                                src="/assets/thirdSection/hand.png"
                                alt="Ícone de uma mão"
                                width={85}
                                height={143}
                                quality={100}
                            />

                            <div className={styles.textBox}>
                                <h2 className={styles.text}>
                                    Qualificação e <br/>
                                    capacitação profissional <br/>
                                    do cidadão
                                </h2>
                            </div>
                        </div>

                        <div className={styles.card}>
                            <Image
                                src="/assets/thirdSection/money.png"
                                alt="Ícone do dinheiro"
                                width={100}
                                height={93}
                                quality={100}
                            />

                            <div className={styles.textBox}>
                                <h2 className={styles.text}>
                                    Pela valorização e <br />
                                    engajamento das mulheres
                                </h2>
                            </div>
                        </div>

                        <div className={styles.card}>
                            <Image
                                src="/assets/thirdSection/heart.png"
                                alt="Ícone do dinheiro"
                                width={100}
                                height={90}
                                quality={100}
                            />

                            <div className={styles.textBox}>
                                <h2 className={styles.text}>
                                    Por um Estado onde as <br/>
                                    pessoas se sintam <br/>
                                    acolhidas e respeitadas
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.containerMobile} id="posicionamento">
                <div className={styles.centerContainerMobile}>
                    <div className={styles.headerContentMobile}>
                        <Image
                            src="/assets/thirdSection/posicionamentos.png"
                            alt="Posicionamentos"
                            width={531}
                            height={43}
                            quality={100}
                        />
                    </div>

                    <div className={styles.bodyVideoContainerMobile}>
                        <ReactPlayer
                            width={977}
                            height={550}
                            style={{
                                marginLeft: 100
                            }}
                            url='https://youtu.be/r3KN6tiWE7U'
                        />
                    </div>

                    <div className={styles.footerMobile}>
                        <div className={styles.cardMobile}>
                            <div className={styles.cardImageMobile}>
                                <Image
                                    src="/assets/thirdSection/boyMobile.png"
                                    alt="Ícone de um menino"
                                    width={273}
                                    height={273}
                                    objectFit='contain'
                                    quality={100}
                                />
                            </div>


                            <div className={styles.textBoxMobile}>
                                <h2 className={styles.textMobile}>
                                    Pelos jovens que <br/>
                                    buscam um lugar no <br/>
                                    mercado de trabalho
                                </h2>
                            </div>
                        </div>

                        <div className={styles.cardMobile}>
                            <div className={styles.cardImageMobile}>
                                <Image
                                    src="/assets/thirdSection/handMobile.png"
                                    alt="Ícone de uma mão"
                                    width={273}
                                    height={273}
                                    quality={100}
                                />
                            </div>
                            <div className={styles.textBoxMobile}>
                                <h2 className={styles.textMobile}>
                                    Qualificação e <br/>
                                    capacitação profissional <br/>
                                    do cidadão
                                </h2>
                            </div>
                        </div>

                        <div className={styles.cardMobile}>
                            <div className={styles.cardImageMobile}>
                                <Image
                                    src="/assets/thirdSection/moneyMobile.png"
                                    alt="Ícone do dinheiro"
                                    width={273}
                                    height={273}
                                    quality={100}
                                />
                            </div>
                            <div className={styles.textBoxMobile}>
                                <div className={styles.cardImageMobile}>
                                    <h2 className={styles.textMobile}>
                                        Pela valorização e <br />
                                        engajamento das mulheres
                                    </h2>
                                </div>
                            </div>
                        </div>

                        <div className={styles.cardMobile}>
                            <Image
                                src="/assets/thirdSection/heartMobile.png"
                                alt="Ícone do dinheiro"
                                width={273}
                                height={273}
                                quality={100}
                            />

                            <div className={styles.textBoxMobile}>
                                <h2 className={styles.textMobile}>
                                    Por um Estado onde as <br/>
                                    pessoas se sintam <br/>
                                    acolhidas e respeitadas
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}