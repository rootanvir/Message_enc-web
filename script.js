function getKeyArray(key) {
    const keyArr = [];
    for (let i = 0; i < key.length; i++) {
      keyArr.push(key.charCodeAt(i) % 48);
    }
    return keyArr;
  }

  function encrypt() {
    const str = document.getElementById('message').value;
    const kk = document.getElementById('key').value;
    const key = getKeyArray(kk);
    let msg = "", j = 0;
    for (let i = 0; i < str.length; i++) {
      if (j === key.length) j = 0;
      msg += String.fromCharCode(str.charCodeAt(i) + key[j]);
      j++;
    }
    document.getElementById('output').innerHTML = "<span style='color:red'>Encrypted: " + msg + "</span>";
  }

  function decrypt() {
    const str = document.getElementById('message').value;
    const kk = document.getElementById('key').value;
    const key = getKeyArray(kk);
    let msg = "", j = 0;
    for (let i = 0; i < str.length; i++) {
      if (j === key.length) j = 0;
      msg += String.fromCharCode(str.charCodeAt(i) - key[j]);
      j++;
    }
    document.getElementById('output').innerHTML = "<span style='color:green'>Decrypted: " + msg + "</span>";
  }
  function clearFields()
  {
    document.getElementById('message').value = "";
    document.getElementById('key').value = "";
    document.getElementById('output').innerHTML = "";
  }