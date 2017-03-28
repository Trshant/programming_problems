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


numofpegs = 3
allpegs = []
for i in range(numofpegs):
    allpegs.append( Peg() )

##allpegs[0].insert(4)
allpegs[0].insert(3)
allpegs[0].insert(2)
allpegs[0].insert(1)

def computehanoi( num_pegs , numofpegs , from_peg , use_peg , to_peg  ):
    if( num_pegs > 0 ):
        print "call 1 : ",num_pegs-1 , numofpegs , from_peg , to_peg , use_peg
        computehanoi( num_pegs-1 , numofpegs , from_peg , to_peg , use_peg )
        disk_in_hand = allpegs[from_peg].remove();
        allpegs[use_peg].insert( disk_in_hand )
        print "move from ",from_peg," to peg ",use_peg
        print "call 2 : ",num_pegs-1 , numofpegs , to_peg , use_peg , from_peg
        computehanoi( num_pegs-1 , numofpegs , to_peg , use_peg , from_peg )



computehanoi( 3 , 3 , 0 , 2 , 1  )