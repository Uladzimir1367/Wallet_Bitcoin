// Импортируем функцию createBitcoinAccount из btc.js
import { createBitcoinAccount } from './bts.js';

const aliceAccount = createBitcoinAccount();
console.log('Alice address:', aliceAccount.address);
console.log('Alice private key:', aliceAccount.privateKey);

const bobAccount = createBitcoinAccount();
console.log('Bob address:', bobAccount.address);
console.log('Bob private key:', bobAccount.privateKey);