import {signIn, signOut, useSession} from 'next-auth/react' 
import styles from './styles.module.scss'

interface SubscribeButtonProps {
  priceId: string;
}

export function SubscribeButton({priceId}: SubscribeButtonProps) {
  const {data: session} = useSession()
  
  function heandleSubscribe(){
  
    if(!session){
      signIn();
      return;
    }
  }

  return (
    <button type="button" className={styles.subscribeButton}
    onClick={()=> heandleSubscribe()}
    >
      Subscribe Now
    </button>
  )
}