import React from 'react';
import styles from './styles.module.scss';
import Image from "next/image";

function CarouselItem1() {

    return(
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.abreAspasContainer}>
                    <Image
                        src="/assets/secondSection/abreAspas.png"
                        alt="Abre Aspas"
                        width={57}
                        height={43}
                        quality={100}
                    />
                </div>
            </div>
            <div className={styles.body}>
                <h2 className={styles.text}>
                    Uma das maiores dificuldades do
                    jovem é o primeiro emprego.
                    Muitas empresas ainda exigem
                    experiência, mesmo para aqueles
                    que estão começando.

                </h2>

            </div>
            <div className={styles.footer}>
                <div className={styles.fechaAspasContainer}>
                    <Image
                        src="/assets/secondSection/fechaAspas.png"
                        alt="fecha Aspas"
                        width={57}
                        height={43}
                        quality={100}
                    />
                </div>
            </div>
        </div>
    )
}

function CarouselItem2() {

    return(
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.abreAspasContainer}>
                    <Image
                        src="/assets/secondSection/abreAspas.png"
                        alt="Abre Aspas"
                        width={57}
                        height={43}
                        quality={100}
                    />
                </div>
            </div>
            <div className={styles.body}>
                <h2 className={styles.text}>
                    Meu nome é Joseane Sousa,
                    sou esposa, mãe e professora.
                    Sou candidata a deputada estadual
                    e defendo a causa dos jovens que
                    buscam um lugar no mercado de trabalho.
                </h2>
            </div>
            <div className={styles.footer}>
                <div className={styles.fechaAspasContainer}>
                    <Image
                        src="/assets/secondSection/fechaAspas.png"
                        alt="fecha Aspas"
                        width={57}
                        height={43}
                        quality={100}
                    />
                </div>
            </div>
        </div>
    )
}

function CarouselItem3() {

    return(
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.abreAspasContainer}>
                    <Image
                        src="/assets/secondSection/abreAspas.png"
                        alt="Abre Aspas"
                        width={57}
                        height={43}
                        quality={100}
                    />
                </div>
            </div>
            <div className={styles.body}>
                <h2 className={styles.text}>
                    É necessário que o Estado invista
                    desde cedo na qualificação do cidadão,
                    com ensino de qualidade e
                    oportunidades de aprendizagem.

                </h2>
            </div>
            <div className={styles.footer}>
                <div className={styles.fechaAspasContainer}>
                    <Image
                        src="/assets/secondSection/fechaAspas.png"
                        alt="fecha Aspas"
                        width={57}
                        height={43}
                        quality={100}
                    />
                </div>
            </div>
        </div>
    )
}

function CarouselItem4() {

    return(
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.abreAspasContainer}>
                    <Image
                        src="/assets/secondSection/abreAspas.png"
                        alt="Abre Aspas"
                        width={57}
                        height={43}
                        quality={100}
                    />
                </div>
            </div>
            <div className={styles.body}>
                <h2 className={styles.text}>
                    Acredito na força da mulher.
                    Precisamos nos engajar, buscando
                    a nossa valorização. Lutarei por
                    um Estado igualitário, onde as pessoas
                    se sintam acolhidas, abraçadas e respeitadas
                    pelos seus  representantes.

                </h2>
            </div>
            <div className={styles.footer}>
                <div className={styles.fechaAspasContainer}>
                    <Image
                        src="/assets/secondSection/fechaAspas.png"
                        alt="fecha Aspas"
                        width={57}
                        height={43}
                        quality={100}
                    />
                </div>
            </div>
        </div>
    )
}

export {
    CarouselItem1,
    CarouselItem2,
    CarouselItem3,
    CarouselItem4,
};