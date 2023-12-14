[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=13028534&assignment_repo_type=AssignmentRepo)
# Wildcard Project

You have a cool idea for an algorithms project? Use this repository. Make sure
to explain what problem you're solving and how you're doing it.

## N-Queens

I've been thinking about the N-Queens ever since we talked about it in class. I thought of a potential solution to the problem that involved starting in the position just to the right of the upper-left corner, and every time you go down a row, you place the next queen two spaces to the right of the previous, and if two spaces to the right of the previous queen was off the board you would place one on the sam row in the far left position and continue the process. I tested several different sizes of the problem on a white board and I was nearly sure it worked. Which seems silly in retrospect because of how simple of a solution it is, someone would have obviously found it by now. Fortunately when I implemented it in code, my function to check my code was more accurate than my tests by hand, so unfortunately I did not come upon a solution to the N-queens problem in polynomial time. I figure since I did invest a fair bit of my time into it that I should at least upload the work I put in. So the method I described above is what is in the code. The tests will fail but they are there.
