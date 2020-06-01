/*
File: improver.js
Zachary Muranaka
Improves the user's password by randomly changing letters into numbers or symbols that look similar using jQuery
*/

$(function()
{
    "use strict";

    // Returns a random member of the argument array
    function randomArrayMember(array) { return array[Math.floor(Math.random() * array.length)]; }

    // Returns a random character that is the same or looks similar to the argument character
    function getChar(character)
    {
        switch(character)
        {
            case 'a':
            case 'A':
                return randomArrayMember(['a', 'A', '4', '@']);
            case 'b':
            case 'B':
                return randomArrayMember(['b', 'B', '8']);
            case 'c':
            case 'C':
                return randomArrayMember(['c', 'C', '<', '(']);
            case 'd':
            case 'D':
                return randomArrayMember(['d', 'D', ')']);
            case 'e':
            case 'E':
                return randomArrayMember(['e', 'E', '3']);
            case 'f':
            case 'F':
                return randomArrayMember(['f', 'F']);
            case 'g':
            case 'G':
                return randomArrayMember(['g', 'G', '6', '9']);
            case 'h':
            case 'H':
                return randomArrayMember(['h', 'H', '#']);
            case 'i':
            case 'I':
                return randomArrayMember(['i', 'I', '1', '!']);
            case 'j':
            case 'J':
                return randomArrayMember(['j', 'J', ']']);
            case 'k':
            case 'K':
                return randomArrayMember(['k', 'K']);
            case 'l':
            case 'L':
                return randomArrayMember(['l', 'L', '1', '|']);
            case 'm':
            case 'M':
                return randomArrayMember(['m', 'M']);
            case 'n':
            case 'N':
                return randomArrayMember(['n', 'N', '^']);
            case 'o':
            case 'O':
                return randomArrayMember(['o', 'O', '0']);
            case 'p':
            case 'P':
                return randomArrayMember(['p', 'P']);
            case 'q':
            case 'Q':
                return randomArrayMember(['q', 'Q']);
            case 'r':
            case 'R':
                return randomArrayMember(['r', 'R']);
            case 's':
            case 'S':
                return randomArrayMember(['s', 'S', '5', '$']);
            case 't':
            case 'T':
                return randomArrayMember(['t', 'T', '7', '+']);
            case 'u':
            case 'U':
                return randomArrayMember(['u', 'U']);
            case 'v':
            case 'V':
                return randomArrayMember(['v', 'V']);
            case 'w':
            case 'W':
                return randomArrayMember(['w', 'W']);
            case 'x':
            case 'X':
                return randomArrayMember(['x', 'X']);
            case 'y':
            case 'Y':
                return randomArrayMember(['y', 'Y']);
            case 'z':
            case 'Z':
                return randomArrayMember(['z', 'Z', '2']);
            default:
                return character;
        }
    }

    // Improves the user's password and displays the results when the submit button is clicked
    $('#submitBtn').click(
    function()
    {
        var pswd = $('#oldPassword').val(); // Get the password the user supplied
        $('#improvedPassword').text('');

        // Write the textContent of the improved password
        for(let i = 0; i < pswd.length; i++)
            $('#improvedPassword').append(getChar(pswd[i]));

        // The user did not enter a password
        if($('#improvedPassword').text() === '')
            $('#improvedPassword').text("Please enter a password");
    });
});
