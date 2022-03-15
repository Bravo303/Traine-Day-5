import fetch from 'node-fetch';

async function bravo() {
  let promise = await fetch('https://jservice.io/api/random?count=1')
  let content = await promise.json()
  // console.log('>>>> 1 >>>>', content)

  for (let data in content) {
    // console.log('>>>> 2 >>>>', content[data])
    return content[data]

  }
}



console.log('>>>> 3 >>>>', bravo())

