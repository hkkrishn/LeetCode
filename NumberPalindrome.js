// Determine whether an integer is a palindrome.
// An integer is a palindrome when it reads the same backward as forward.
// Example 1:

// Input: 121
// Output: true
// Example 2:

// Input: -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
// A Palindrome is something where its reversed form is the same as it's original form

//palindrome number
//aba = aba , 121 = 121  -121 != 121


//take an interger reverse it and see if they are the same


let isPalindrome = function(x) {
    if (x < 0) {
        return false;
    }

    return x === reversedInteger(x);
};

let reversedInteger = function(x) {
//eg x = 49
//last number 9 needs to be the first number
//divide 49/10 and get the remainder
//49 % 10 = 9
//take whatevr is reversed and multiply by 10 and then add it
// 0 * 10 = 0 + 49 % 10 = (9)
//remove number 9 from x
// 49 /10 = 4.9 and round down = 4

//at this point reversed = 9
// so 9 *10 + 4 % 10 = 94
// x = 4/10 = 0

// and we return 94



    //always initialize reversed number to 0
    let reversed = 0;

    while (x > 0) {

        reversed = (reversed * 10) + (x % 10);
        x = Math.floor(x / 10);
    }

    return reversed;
};