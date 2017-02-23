import copy
'''this is a trial for permutations'''

def permutations_create(liss , el=[] , tot=[]):
    '''This gives the permutations involved with input being a list of elements.'''
    if( len(liss) == 0 ):
        tot.append(el+liss)
    for i in liss:
        tri = copy.deepcopy(liss)
        tri.remove(i)
        pr = permutations_create(tri, el+[i], tot)
    return tot

a = [1,2,2,3]
permutations = permutations_create(a)
print permutations,len(permutations)

def hanoi():
    "TODO : create a class for each stack, then use rules to make the program literate."