var contractABI = [];
var contractAddress = '0xCF4f0a54861C57294B9C6DAC90499ba8d34Be270';
var web3 = new Web3('http://localhost:9545');
var simpleSmartContract = new web3.eth.Contract(contractABI, contractAddress);

console.log(simpleSmartContract);

web3.eth.getAccounts()
.then(console.log);
