# https://www.w3schools.com/python/python_sets.asp
# a = ["Geeks", "for", "Geeks"]
# # Iterating list using enumerate to get both index and element
# for i, name in enumerate(a):
#     print(f"Index {i}: {name}")
#
# # Converting to a list of tuples
# print(list(enumerate(a)))

# https://leetcode.com/problems/two-sum/

# hashMap = {}
# for e in list1:
#     hashMap.put(e, e)
#
# print(l1)

# ttt = map((lambda x: x ** 2), [1, 2, 3, 4])

# list = set(source)
# print('list', source)
# print("banana" in list)
# print(5 in list)
# print(5 in source)

class Solution:
    def twoSum(nums, target: int) -> [int]:

        # convert nums to dict
        nums_dict = {value: index for index, value in enumerate(nums)}
        print('nums_dict:', nums_dict)

        result_set = set()
        for idx, value in enumerate(nums):
            dict_value = nums_dict.get(target - value)
            if dict_value:
                result_set.add(idx)
                result_set.add(dict_value)

        return list(result_set)

print(Solution.twoSum([2,7,11,15], 9)) # [0,1]
print(Solution.twoSum([3,2,4], 6)) # [1,2]
print(Solution.twoSum([3,3], 6)) # [0,1]