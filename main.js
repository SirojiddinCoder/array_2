   //// min topish

// var arr = [10, 5, 11, 'apple', 2, 3,4,5,6];
// var min = arr[0];
// for (var k = 1; k < arr.length; k++) {
//   if (arr[k] < min) {
//     min = arr[k];
//   }
// }
// console.log("Min: " + min);

/////// max

// var arr = [10, 5, 11, 'apple', 2, 3,4,5,6];
// var max = arr[0];
// for (var k = 1; k < arr.length; k++) {

//   if (arr[k] > max) {
//     max = arr[k];
//   }
// }
// console.log("Max: " + max);

/// max dan bitta oldingi


// var arr = [10, 5, 11, 'apple', 2, 3,4,5,6];
// var max = arr[0];
// for (var k = 1; k < arr.length; k++) {
//   if (arr[k] > max) {
//     max = arr[k];
//     console.log("Max: " + max);
//     if (k === 1) {
//       console.log("Max ozi birinchida undan oldin element yoq");
//     } else {
//       console.log("Max dan bitta oldingisi: " + arr[k - 1]);
//     }
//   }
// }

//   sonni teskarisi


//  function reverse(arr, n, k)
//         {
//             for(let i = 0; i < n; i += k)
//             {
//                 let left = i;


//                 let right = Math.min(i + k - 1, n - 1);
//                 let temp;


//                 while (left < right)
//                 {
//                     temp = arr[left];
//                     arr[left] = arr[right];
//                     arr[right] = temp;
//                     left += 1;
//                     right -= 1;
//                 }
//             }
//             return arr;
//         }


//         let arr = new Array(1, 2,3);
//         let k = 3;
//         let n = arr.length;
//         let arr1 = reverse(arr, n, k);

//         for(let i = 0; i < n; i++)
//         {


//           console.log(arr1[i]+ "");
//         }


 //// yigindisi



// var yigindi = [10, 5, 11, 'apple', 2, 3,4,5,6];
// s = 0;

// yigindi.map((value)=>{
//    ( typeof(value) === 'number') && (s += parseInt(value));

// })

// console.log(s);


var fruits = ['Apple',12,'Ananas','Orange', 'Banana','Kiwi'];


var fruits1 = fruits.join('');
sum_A = 0;
sum_B = 0;
for (let i = 0; i < fruits1.length; i++) {

    (fruits1[i] === ('a' || 'A')) && sum_A ++;
    (fruits1[i] === ('b' || 'B')) && sum_B ++;

}
console.log(sum_A);
console.log(sum_B);
