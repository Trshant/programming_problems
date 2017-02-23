def print_attributes(obj):
    for attr in obj.__dict__:
        print attr, getattr( obj , attr )

class dumbo(object):
    def __init__(self, set_to=0):
        self.counter = set_to 
    def __str__(self):
        return '%.2d' % (self.counter)
    def increment(self):
        self.counter += 1
        return self
    def decrement(self):
        self.counter -= 1
        return self
    def printi(self):
        print( self.counter )
        return self

cnt = dumbo(21)
b = cnt.increment().increment().decrement()
print b
print_attributes( cnt )
