

'''
equals = 0
for i in range(2):
    for j in range(2):
        if i == j:
            equals +=1
    else:  
        equals += 1


print(equals)

'''

for num in range(2, 10):
    if num % 2 == 0:
        print("Found an even number", num)
        continue
    print("Found an odd number", num)


