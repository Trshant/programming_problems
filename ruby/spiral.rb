=begin

This file will show many many ways of writing comments, 
but it is mainly a demonstration of 
making an array of numbers print in a spiral way using ruby language.

Have a look at the above representation of the array. 
This is how the numbers should print spirally.

The first array is of the size 3X3. The second is 5X5. 

This would mean, for the 5X5 matrix - to fill all the spaces 
of the topmost row (5 places) , take a turn (T) , then fill up all 
the available places on the leftmost column (4 places) , going down. 
Turn (T). Then filling up the free spaces on the bottom row (4 places) , 
going backwards. Turn (T).Then fill the free spaces of the leftmost 
column going up (3 places). Turn (T). Fill up the available spaces in 
the 2nd row (3 places). Do work out the rest of the place filling the 
same way.  

5 - T - 4 - T - 4 - T - 3 - T - 3 - T - 2 - T - 2 - T - 1 - T - 1.

similarly, considering a 4X4 matrix filled similarly, the way the places 
would be filled are 4 - T - 3 - T - 3 - T - 2 - T - 2 - T - 1 - T - 1.

Generalising, this would be summarised as. for filling up a matrix of 
n length, first fill up n rows i nthe first row. then turn. fill up 
n-1 places, turn. fill up n-1 places again. turn and fill up n-2 
places. twice. Repeat till you decrease number of places to 0, 
thats when you stop. 

This brings us to the next question....how does one calculate the exact 
array positions? Since there will be 4 kinds of turns:


1. Going right. 
   X is steady since we are going in the same secondary array. 
   Y is incrementing. 
   so our calculating array for this would be [0,1]
2. Going down . 
   X is increamenting since we are going to fill the 
      same index in succeeding arrays. 
   Y is steady. 
   so our calculating array for this would be [1,0].
3. Going left . 
   X is steady. 
   Y is decrementing. 
   So our calculating array for this would be [0,-1].
4. Going up.
   X is decrementing. 
   Y is steady. 
   So our calculating array for this would be [-1,0].

From the above cases, we can get the correct row and column position.

Now if you read up the code and the comments, i think this will be an easy 
wrap up.

=end

require 'pp' # for pretty print

i = 5 # size of the martix i want to print in a spiral
num = 0 # the number i want to start with for filling in the empty spaces.

# an empty array of arrays is created, of size 5 in both dimensions. 
array_to_fill = Array.new( i ) { Array.new(i , 0) } 

first = i # This plays an important part in the second printing.

directions = [[0,1],[1,0],[0,-1],[-1,0]] # As given above.
direction = 0 # this shows us which one of the array of the 'directions' you should take.


row_pointer = 0 - directions[direction][0] #This specific starting offset makes out upcoming code easy to understand.
col_pointer = 0 - directions[direction][1]

while i > 0  do
	inner = i
   	puts("Inside the loop i = #{i}" )
   	
   	for j in 1..i
        row_pointer = row_pointer + directions[direction][0] #  Updating the X and Y pointers. I could not think of a better name to give........ 
        col_pointer = col_pointer + directions[direction][1]
   		array_to_fill[row_pointer][col_pointer] = num 
   		puts("puts #{num} in #{row_pointer} , #{col_pointer}.")
   		num += 1
   	end

    direction = ( direction + 1 ) % directions.length # Take that turn!
   	puts("turn #{direction}")

   	if i != first # see? here is where we print everything else a second time, apart from the very first number.

        puts("Inside the loop i = #{i} : a second time!" )
   		for j in 1..i
            row_pointer = row_pointer + directions[direction][0]
   			col_pointer = col_pointer + directions[direction][1]
   			array_to_fill[row_pointer][col_pointer] = num 
   			puts("puts #{num} in #{row_pointer} , #{col_pointer}.")
   		    num += 1
   		end	
        direction = ( direction + 1 ) % directions.length #take a turn, again. yes. this one actually comes first. the once above comes later.
        puts("turn #{direction}")
           
   	end
   	
   	i -=1
end

pp array_to_fill # pretty printing the filled up array 

__END__

sources:
https://www.tutorialspoint.com/ruby/ruby_loops.htm