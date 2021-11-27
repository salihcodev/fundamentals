// ::: HELPERS :::
//  simple logger --
const logger = (logName) => console.log.bind(console, logName);

// ::: BIG (O) CODE :::
const bigOLog = logger("—————— Big (O) log ——————:");

const addUpToN1 = (n) => {
  let tot = 0;
  for (let i = 1; i <= n; i++) {
    tot += i;
  }
  return tot;
};

const addUpToN = (n) => {
  return (n * (n + 1)) / 2;
};

const t = Date.now();
bigOLog("O: (O)", addUpToN1(1000_000_0));
const t2 = Date.now();

bigOLog(`LATENCY:`, (t2 - t) / 1000);

console.log("--");

const t3 = Date.now();
bigOLog("O", addUpToN(5));
const t4 = Date.now();

bigOLog(`LATENCY:`, (t4 - t3) / 1000);


// ::: --- :::
// ::: --- :::
// ::: --- :::
// ::: --- :::
// ::: --- :::
// ::: --- :::
