import * as bitcoin from 'bitcoinjs-lib';
import * as ecc from 'tiny-secp256k1';
import { ECPairFactory } from 'ecpair';

// Initialize ECPair
const ECPair = ECPairFactory(ecc);

// Define the network you want to generate the address for
const network = bitcoin.networks.testnet;

// Generate a random key pair
const aliceKeys = ECPair.makeRandom({ network });
const bobKeys = ECPair.makeRandom({ network });

// Generate a Bech32 (SegWit) address
const aliceP2wpkhAddress = bitcoin.payments.p2wpkh({
    pubkey: aliceKeys.publicKey,network,
    });
const bobP2wpkhAddress = bitcoin.payments.p2wpkh({
    pubkey: bobKeys.publicKey,network,
    });

// Get private key
const alicePrivateKey = aliceKeys.toWIF();
const bobPrivateKey = bobKeys.toWIF();

console.log("Alice address:", aliceP2wpkhAddress.address);
console.log("Alice private key:", alicePrivateKey);
console.log("Bob address:", bobP2wpkhAddress.address);
console.log("Bob private key:", bobPrivateKey);