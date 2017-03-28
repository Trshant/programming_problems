class Peg():
    def __init__(self):
        self.pegcontent = []
    
    def last_disk_size(self):
        length = len( self.pegcontent )
        if(  length == 0 ):
        	return 0
        else:
        	return self.pegcontent[length-1]

    def insert(self, disk_to_be_inserted ):
        self.pegcontent.append( disk_to_be_inserted )
        return self.pegcontent
    
    def remove(self):
        self.pegcontent.reverse
        pop = self.pegcontent.pop()
        self.pegcontent.reverse
        return pop

    def content(self):
    	return self.pegcontent
    
    def __str__(self):
        strnum = map(str, self.pegcontent )
        return ', '.join(strnum)  


def is_goal( all_the_pegs ):

	if( all_the_pegs[2].pegcontent == [3,2,1] ):
		return True
	else :
		return False

numofpegs = 3
allpegs = []
for i in range(numofpegs):
    allpegs.append( Peg() )

#allpegs[0].insert(4)
allpegs[0].insert(3)
allpegs[0].insert(2)
allpegs[0].insert(1)

count_steps = 0
disk_in_hand = 0
while( True ):

	##print "count : "+str(count_steps)
	##print allpegs[0]
	##print allpegs[1]
	##print allpegs[2]

	if( is_goal(allpegs) ):
		break;


	count_steps += 1
	Pegnum = abs( (count_steps % 3) - 2 )
	if( disk_in_hand != 0 ):
		if( allpegs[Pegnum].last_disk_size() == 0 or allpegs[Pegnum].last_disk_size() > disk_in_hand ):
			allpegs[Pegnum].insert( disk_in_hand )
			disk_in_hand = 0
			print "moved to :",Pegnum
			continue
		else:
			continue

	if( allpegs[Pegnum].last_disk_size() != 0 ):

		disk_in_hand = allpegs[Pegnum].remove()
		print "picked up ",disk_in_hand," from ",Pegnum
	else:
		continue
