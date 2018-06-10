-module(useless).
-export([
	add/2 ,
	hello/0 ,
	greet_add/1 
]).

add(A,B) -> A + B.

hello() -> io:format("Hello, World!~n").

greet_add(X) -> hello(),add(X,2).

