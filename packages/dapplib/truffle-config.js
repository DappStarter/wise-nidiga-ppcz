require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz entire sun food track rate pitch umbrella coral light army giant'; 
let testAccounts = [
"0x7ba81db0ddabf747d38ba58828abd269c587e6c2721d42af6c96ffdc8117dc09",
"0x0181a4b2cd840499ac7b15a98a0462c4361d009cd95c9f081bf9653bcc241dc7",
"0xc08ca1083703f71642567346a4f29bbdd9e16f3a99ab3545dfea15f9bce80662",
"0x0537547eb511790e18c16f80c2ce894a9a196fa8c5bcea995cd24cce9038f518",
"0xa29b574d3fe295b5c2a78fa6c46ac915e4d8fe2fd27928fbf7cb80e8ab761d9e",
"0x46dca03bffd9533957073a0cac3a7c96cccb561a49094c3714d3758096f25954",
"0xa555ebc02bc7ae1d7f33ef0a70d80d3f915c1a84b611299c89aff5dad435c074",
"0xb760da9a82c3c984af958069bf580af1624bfbaa3c8cd25dced02a0e9bc6bfdb",
"0x0e4e541a8faddabdef859506306c52b744db7ebcbcd2a9b11bfc44c50f9e324a",
"0x8506eef1fcab81b9223a05872a27deecbe97e1cbed47409a736e3b3931cfab24"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

