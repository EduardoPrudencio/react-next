import {GetStaticProps} from 'next';
import Head from 'next/head'
import { SubscribeButton } from '../components/SubscribeButton'
import { stripe } from '../services/stripe';
import styles from './home.module.scss'

interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  }
}

export default function Home({product}: HomeProps) {
  return  (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Hey, welcome </span>
          <h1>News about the <span>React</span> world.</h1>
          <p>
            Get access to all publications <br />
            <span>for {product.amount}</span>
          </p>
          <SubscribeButton priceId={product.priceId} />
        </section>
        <img src="/images/avatar.svg" alt="Girl coding"/>
      </main>
    </>
  )
}

//getServerSideProps
export const getStaticProps : GetStaticProps = async () => {
  const price = await stripe.prices.retrieve('price_1KdF6jFIYsYih9Xx95pVoGpr', { 
    expand:['product']
  })
  
  const product = {
    priceId: 'rgvwtrbky,fiy,8po,rymtuyn',
    amount: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(990 / 100),    
  };
  
  return {
    props:{
      product
    },
    revalidate: 60 * 60 * 24, // Funciona a penas com o GetStaticProps. Indica o tempo para recriar o cache da página
  }
}
