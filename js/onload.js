var range = (start, end) => [...Array(end - start + 1)].map((_, i) => start + i);

window.addEventListener('load', function() {
  // Checking if Web3 has been injected by the browser (Mist/MetaMask)
  if (typeof web3 !== 'undefined') {
    // Use Mist/MetaMask's provider
    console.log("Web3 detected!");
    window.web3 = new Web3(web3.currentProvider);
    // Now you can start your app & access web3 freely:
    startApp();
  } else {
    swal({
      title : 'Oops...',
      html :  '<p align="left">If you still want to use this page, please, make sure that:</p>' +
              '<ul align="left">' +
              '<li>You\'re using <a href="https://www.google.com/chrome/" target="_blank">Chrome browser</a></li>' +
              '<li>You have installed <a href="https://metamask.io/" target="_blank">MetaMask plugin</a></li>' +
              '<li><code>Ropsten Test Net</code> is enabled (top-left corner in the Metamask settings)</li>' +
              '</ul>',
      type : 'error',
    })
  }
})
