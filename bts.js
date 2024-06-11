import * as bitcoin from 'bitcoinjs-lib';
import { ECPairFactory } from 'ecpair';
import * as ecc from 'tiny-secp256k1';

const ECPair = ECPairFactory(ecc);

export function createBitcoinAccount() {
   const keyPair = ECPair.makeRandom();
   const { address } = bitcoin.payments.p2pkh({ pubkey: keyPair.publicKey });
   const privateKey = keyPair.toWIF();
   return {
      address,
      privateKey
   };
}

const account = createBitcoinAccount();
console.log(account);

