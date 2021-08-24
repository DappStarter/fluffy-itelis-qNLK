require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid glove flower smooth name regret spice pulse harvest office army ghost'; 
let testAccounts = [
"0x977a19c994cbb5637045b6043e03b85d11144127a8fe5b2f25710bf9753605e8",
"0x955dcb0777826277c88764cf3001d58b68954648dc98973c99d2b1c0fee8abca",
"0x3684e84f98989b1acb14c19c5862b31b5cf1a54111c0aba5b366e49dd5956810",
"0x70662af9a89484fcb970a1c5d7af6c7d244967c3e2a3cdd5b27e665a5812e267",
"0xfca006f972ba3ee373fc6b083440e6ccde0844cdce215d65c16c3a338ed14f3d",
"0x1a27e98a3625807a0970e8b6cde26508d251b67eb9b0e96143fffaa2d866daa3",
"0xe0d398a33f9dc99f2a3ea9e9f3708f08862951d6d6936679e6297fb024284dcc",
"0xff9dcc0b4e5d01dfec77aae4e84822353e83ca1c5d782e6452a0f4ee3b42aa96",
"0xc5875511ea53272bfa56072c8747131e1c141376deaa9418661d1e3399fd6505",
"0x59027a8703bcc7e2f4ce84d2ed30d2aea94863fdbe4204f844aadf778e1210ca"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

