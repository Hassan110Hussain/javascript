// for

for (let i = 0; i < 10; i++) {
  const ele = i;
  if (ele === 5) {
    // console.log('5 is best number');
  }
  // console.log(ele);
}

for (let i = 0; i <= 2; i++) {
  // console.log(`inner loop ${i}`);
  for (let j = 0; j <= 2; j++) {
    // console.log(`inner loop ${j} and ${i}`);
    // console.log(i + '*' +  j + '=' + i*j);
  }
}

let myArray = ["thor", "superman", "loki"];

for (i = 0; i < myArray.length; i++) {
  const element = myArray[i];
  // console.log(element);
}

// break n continue

for (let i = 0; i < 20; i++) {
  if (i == 5) {
    // console.log('5 detected');
    break;
  }
  // console.log(`${i}`);
}

for (let i = 0; i < 10; i++) {
  if (i == 5) {
    console.log("5 detected");
    continue;
  }
  console.log(`${i}`);
}
