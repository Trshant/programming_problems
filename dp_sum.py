
def findbiggest( res , arr ):
    arr.sort()
    ##print arr
    arr.reverse()
    ##print arr
    for i in arr:
        ##print i
        if( i <= res ):
            return i

def combo(result , inp_list , result_list ):
    if( result == 0 ):
        return result_list
    to_be_subtracted = findbiggest(result , inp_list)
    result_list.append( to_be_subtracted )
    new_result = result - to_be_subtracted
    final_result = combo( new_result , inp_list , result_list )
    return final_result

inp = [1,3,5]
result = 13 ##/ 2 / 4 / 7 // 14
fres = combo( result , inp , [] )
print 'Final result ',fres