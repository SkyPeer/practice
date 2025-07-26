# Text Type:	str - ok
# Numeric Types:	int, float, complex
# Sequence Types:	list, tuple, range
# Boolean Type:	bool
# None Type:	NoneType

# Mapping Type:	dict
# Set Types:	set, frozenset
# Binary Types:	bytes, bytearray, memoryview

# ==== LIST ====
print("==== LIST ====")
mylist = ["apple", "banana", "cherry"]
mylist.append('orange')
mylist.insert(2, 'potato')
mylistCopy = mylist.copy()
mylistCopy[0] = "BaNaNa"

print("mylist:", mylist)
print("mylistCopy:", mylistCopy)
print("mylist type:", type(mylist))

# ForLoop
for item in mylistCopy:
    print(item)

for index in range(len(mylistCopy)):
    print("index:", index, " item:", mylistCopy[index])

print("  ")

# ==== TUPLE ====
print("==== TUPLE ====")
myTuple = ("apple", "banana", "cherry", "apple", "cherry")
print("myTuple.count cherry:", myTuple.count("cherry"))

# changeTuple (with convert TupleToList and ListToTuple)
tupleToList = list(myTuple)
print("tupleToList type:", type(tupleToList))
tupleToList[2] = "bigCherry"
print("myTuple", myTuple)

print("tupleToList:", tupleToList)
listToTuple = tuple(tupleToList)
print("listToTuple type:", type(listToTuple))
print("listToTuple:", listToTuple)






