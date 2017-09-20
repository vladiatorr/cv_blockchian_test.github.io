function startApp() {

var address = {
  "3" : "0x987c626359dd452d40fdbea1e29e745dcf9f485b" // Ropsten
}

var contract = web3.eth.contract(abi).at(address["3"]);
console.log("Contract initialized successfully")

candidates = {"Nick": "candidate-1", "Sam": "candidate-2", "Bob": "candidate-3"}

function voteForCandidate() {
  candidateName = $("#candidate").val();
  contract.voteForCandidate(candidateName, {from: web3.eth.accounts[0]}, function() {
    let div_id = candidates[candidateName];
    $("#" + div_id).html(contract.totalVotesFor.call(candidateName).toString());
  });
}

$(document).ready(function() {
  candidateNames = Object.keys(candidates);
  for (var i = 0; i < candidateNames.length; i++) {
    let name = candidateNames[i];
    let val = contract.totalVotesFor.call(name).toString()
    $("#" + candidates[name]).html(val);
  }
})

}
