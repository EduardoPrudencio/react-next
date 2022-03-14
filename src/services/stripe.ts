import Stripe from 'stripe' 
import {version} from '../../package.json'

export const stripe = new Stripe(, 
  {
    apiVersion: '2020-08-27',
    appInfo: {
      name: 'Subscription',
      version
    },
  }
)
